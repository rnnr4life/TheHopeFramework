import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const modelId = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const revision = '1939ad2a8e416c0acfeecc08a694d14ef25f2231';
const modelHash = 'fbae9257e1e05ffc727e951ef9b9c98418e6d79f1c9b6b13bd59f5c9028a1478';
const sha256 = data => createHash('sha256').update(data).digest('hex');

export function encodeWav(samples, sampleRate = 24000) {
    if (!samples.length || samples.some(value => !Number.isFinite(value))) {
        throw new Error('Generated audio is empty or contains non-finite samples.');
    }
    let peak = 0;
    let energy = 0;
    for (const value of samples) {
        peak = Math.max(peak, Math.abs(value));
        energy += value * value;
    }
    if (peak < 0.01 || Math.sqrt(energy / samples.length) < 0.005) {
        throw new Error('Generated audio is silent or too quiet.');
    }
    const gain = 0.85 / peak;
    const wav = Buffer.alloc(44 + samples.length * 2);
    wav.write('RIFF', 0);
    wav.writeUInt32LE(wav.length - 8, 4);
    wav.write('WAVEfmt ', 8);
    wav.writeUInt32LE(16, 16);
    wav.writeUInt16LE(1, 20);
    wav.writeUInt16LE(1, 22);
    wav.writeUInt32LE(sampleRate, 24);
    wav.writeUInt32LE(sampleRate * 2, 28);
    wav.writeUInt16LE(2, 32);
    wav.writeUInt16LE(16, 34);
    wav.write('data', 36);
    wav.writeUInt32LE(samples.length * 2, 40);
    for (let i = 0; i < samples.length; i++) {
        wav.writeInt16LE(Math.round(samples[i] * gain * 32767), 44 + i * 2);
    }
    return { wav, duration: samples.length / sampleRate, peak: 0.85, rms: Math.sqrt(energy / samples.length) * gain };
}

export function readBuiltInStories(app) {
    const declarations = [
        ['const sampleText = ', '\nconst textContent ='],
        ['const guidedStory = {', '\nlet guidedStep ='],
        ['const sampleTexts = {', '\n// Text picker']
    ].map(([begin, finish]) => {
        const start = app.indexOf(begin);
        const end = app.indexOf(finish, start);
        if (start < 0 || end < start) throw new Error(`Could not locate ${begin}`);
        return app.slice(start, end);
    }).join('\n');
    const { sampleTexts, guidedStory } = vm.runInNewContext(
        declarations + '\n({ sampleTexts, guidedStory });');
    const stories = [
        ...Object.values(sampleTexts).flat(),
        { id: 'riverside-creek', text: guidedStory.paragraphs.map(paragraph => paragraph.text).join('\n\n') }
    ];
    const unique = new Map();
    for (const story of stories) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(story.id || '') || !story.text?.trim()) {
            throw new Error('Every built-in story must have a stable ID and nonempty transcript.');
        }
        if (unique.has(story.id) && unique.get(story.id).text !== story.text) {
            throw new Error(`Story ID has conflicting transcripts: ${story.id}`);
        }
        unique.set(story.id, { id: story.id, text: story.text });
    }
    return [...unique.values()];
}

async function download(url, destination, expectedHash) {
    let data;
    try {
        data = await readFile(destination);
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }
    if (!data || (expectedHash && sha256(data) !== expectedHash)) {
        console.log(`Downloading ${url}`);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Download failed (${response.status}): ${url}`);
        data = Buffer.from(await response.arrayBuffer());
        if (expectedHash && sha256(data) !== expectedHash) throw new Error(`Checksum mismatch: ${url}`);
        await mkdir(path.dirname(destination), { recursive: true });
        await writeFile(destination, data);
    }
    return { url, sha256: sha256(data), bytes: data.length };
}

async function main() {
    const cache = path.join(here, '.cache', revision);
    const output = path.join(root, 'audio', 'narration');
    const provenance = [];
    for (const file of ['config.json', 'tokenizer.json', 'tokenizer_config.json', 'onnx/model_quantized.onnx', 'README.md']) {
        provenance.push(await download(
            `https://huggingface.co/${modelId}/resolve/${revision}/${file}`,
            path.join(cache, file), file.endsWith('.onnx') ? modelHash : undefined));
    }
    const voice = path.join(here, 'node_modules', 'kokoro-js', 'voices', 'af_heart.bin');
    const upstreamVoice = path.join(cache, 'voices', 'af_heart.bin');
    const voiceRecord = await download(
        `https://huggingface.co/${modelId}/resolve/${revision}/voices/af_heart.bin`, upstreamVoice);
    if (sha256(await readFile(voice)) !== voiceRecord.sha256) {
        throw new Error('Packaged stock voice differs from the pinned upstream voice.');
    }
    provenance.push(voiceRecord);
    const authorCard = path.join(cache, 'AUTHOR-MODEL-CARD.md');
    provenance.push(await download('https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md', authorCard));

    // Nothing, including story text, may leave the machine during inference.
    globalThis.fetch = () => { throw new Error('Network access disabled during local narration generation.'); };
    const { KokoroTTS } = await import('kokoro-js');
    const tts = await KokoroTTS.from_pretrained(cache, { dtype: 'q8', device: 'cpu' });
    const app = await readFile(path.join(root, 'js', 'app.js'), 'utf8');
    const stories = readBuiltInStories(app).filter(story =>
        !process.argv.includes('--pilot') || story.id === 'butterfly-garden');
    const libraryPath = path.join(root, 'js', 'narration-library.js');
    const previous = vm.runInNewContext(await readFile(libraryPath, 'utf8') + '\nnarrationLibrary;');
    const records = previous.filter(record => !stories.some(story => story.id === record.storyId));
    await mkdir(path.join(output, 'licenses'), { recursive: true });
    await copyFile(path.join(here, 'node_modules', 'kokoro-js', 'LICENSE'), path.join(output, 'licenses', 'KOKORO-APACHE-2.0.txt'));
    await writeFile(path.join(output, 'licenses', 'ONNX-MODEL-CARD.md'),
        (await readFile(path.join(cache, 'README.md'), 'utf8')).replace(/[ \t]+$/gm, ''));
    await copyFile(authorCard, path.join(output, 'licenses', 'AUTHOR-MODEL-CARD.md'));
    for (const story of stories) {
        console.log(`Generating ${story.id}`);
        records.push(await generateStory(tts, story, output, provenance));
    }
    await writeFile(libraryPath, `const narrationLibrary = ${JSON.stringify(records, null, 4)};\n`);
    console.log(`Installed ${stories.length} generated stories; library contains ${records.length} recordings.`);
}

async function generateStory(tts, story, output, provenance) {
    const { TextSplitterStream } = await import('kokoro-js');
    const pieces = [];
    const segments = [];
    let total = 0;
    for (const paragraph of story.text.split('\n\n')) {
        // Sentence splitting avoids the model's 510-token truncation limit.
        const splitter = new TextSplitterStream();
        splitter.push(paragraph);
        splitter.close();
        for await (const { text, phonemes, audio } of tts.stream(splitter, { voice: 'af_heart', speed: 0.95 })) {
            if (tts.tokenizer(phonemes, { truncation: false }).input_ids.dims.at(-1) > 510) {
                throw new Error(`Sentence exceeds model token limit: ${story.id}`);
            }
            if (audio.sampling_rate !== 24000) throw new Error('Unexpected narration sample rate.');
            pieces.push(audio.audio, new Float32Array(7200));
            segments.push({ text, startSeconds: total / 24000, durationSeconds: audio.audio.length / 24000 });
            total += audio.audio.length + 7200;
            console.log(`Generated sentence ${segments.length} (${(total / 24000).toFixed(1)} seconds total)`);
        }
        pieces.push(new Float32Array(9600));
        total += 9600;
    }
    const combined = new Float32Array(total);
    let offset = 0;
    for (const piece of pieces) { combined.set(piece, offset); offset += piece.length; }
    const { wav, ...measurement } = encodeWav(combined);
    const wordsPerMinute = story.text.split(/\s+/).length * 60 / measurement.duration;
    if (wordsPerMinute < 90 || wordsPerMinute > 220) throw new Error(`Unexpected reading pace: ${wordsPerMinute}`);
    if (segments.map(segment => segment.text).join(' ').replace(/\s+/g, ' ') !== story.text.replace(/\s+/g, ' ')) {
        throw new Error(`Generated sentences do not cover the complete transcript: ${story.id}`);
    }
    await writeFile(path.join(output, `${story.id}.wav`), wav);
    const record = {
        storyId: story.id, language: 'en', text: story.text,
        src: `audio/narration/${story.id}.wav`, status: 'preview',
        label: 'Story narrator - Kokoro Heart (synthetic)'
    };
    await writeFile(path.join(output, `${story.id}.production.json`), JSON.stringify({
        generatedAt: new Date().toISOString(), storyId: story.id, transcriptSha256: sha256(story.text),
        audioSha256: sha256(wav), modelId, revision, dtype: 'q8', voice: 'af_heart',
        engine: 'kokoro-js@1.2.1', speed: 0.95, sampleRate: 24000, channels: 1,
        ...measurement, wordsPerMinute, segments, provenance,
        review: 'Technical preview only. Human listening review pending.'
    }, null, 2) + '\n');
    console.log(JSON.stringify({ ...measurement, wordsPerMinute, bytes: wav.length, status: 'preview' }));
    return record;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    await main().catch(error => { console.error(error); process.exitCode = 1; });
}
