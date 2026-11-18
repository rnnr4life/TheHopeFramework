const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'narration.js'), 'utf8');

function fixture(saved = {}) {
    const utterances = [];
    const notices = [];
    const warnings = [];
    const storage = new Map(Object.entries(saved));
    const handlers = {};
    let voices = [];
    let starts = 0;
    const speech = {
        getVoices: () => voices,
        addEventListener: (name, handler) => { handlers[name] = handler; },
        speak: utterance => utterances.push(utterance),
        cancel() { utterances.at(-1)?.onend?.(); }
    };
    const context = vm.createContext({ URL, console: { warn: (...args) => warnings.push(args) } });
    vm.runInContext(source + '\nglobalThis.Player = HopeNarration;', context);
    const player = new context.Player({
        speech, Utterance: function(text) { this.text = text; },
        storage: {
            getItem: key => storage.get(key) || null,
            setItem: (key, value) => storage.set(key, value)
        },
        notify: message => notices.push(message),
        onStart: () => starts++
    });
    return {
        player, speech, utterances, notices, warnings, storage,
        matchRecording: (source, library) => context.findNarrationRecording(source, library, 'https://example.test/hope/'),
        get starts() { return starts; },
        voices(list) { voices = list; handlers.voiceschanged(); }
    };
}

const story = { id: 'guided-text', text: 'First paragraph.\n\nSecond paragraph.', language: 'en' };

test('pause restarts only the current paragraph and rejects canceled/stale callbacks', () => {
    const { player, utterances } = fixture();
    player.start(story);
    const old = utterances[0];
    player.pause();
    assert.equal(player.state, 'paused');
    old.onend();
    old.onerror({ error: 'network' });
    assert.equal(player.segment, 0);
    player.resume();
    assert.equal(utterances[1].text, 'First paragraph.');
    utterances[1].onend();
    assert.equal(utterances[2].text, 'Second paragraph.');
    player.pause();
    player.resume();
    assert.equal(utterances[3].text, 'Second paragraph.');
    utterances[3].onend();
    assert.equal(player.state, 'ended');
    player.start({ ...story, text: 'Replacement.' });
    old.onend();
    assert.equal(player.segment, 0);
    player.stop();
    assert.equal(player.state, 'idle');
});

test('asynchronously loaded voices preserve saved choices, prefer local and match language', () => {
    const { player, voices } = fixture({
        'hope-narration': JSON.stringify({ rate: 1, voiceURI: 'chosen' })
    });
    const local = { voiceURI: 'local', name: 'Local', lang: 'en-US', localService: true };
    const chosen = { voiceURI: 'chosen', name: 'Chosen', lang: 'en-GB', localService: false };
    const french = { voiceURI: 'fr', name: 'French', lang: 'fr-FR', localService: true };
    voices([local]);
    assert.equal(player.voiceFor().voiceURI, 'local');
    voices([local, chosen, french]);
    assert.equal(player.voiceFor().voiceURI, 'chosen');
    assert.equal(player.voiceFor('fr').voiceURI, 'fr');
    assert.equal(player.voiceFor('ja'), null);
    voices([]);
    assert.equal(player.voiceURI, 'chosen');
    voices([chosen]);
    assert.equal(player.voiceFor().voiceURI, 'chosen');
});

test('preferences change stops playback, applies rate and neutral pitch, and reports storage errors', () => {
    const { player, utterances, notices, storage } = fixture();
    player.start(story);
    player.configure(1.15, '');
    assert.equal(player.state, 'idle');
    assert.equal(JSON.parse(storage.get('hope-narration')).rate, 1.15);
    player.start(story);
    assert.equal(utterances.at(-1).rate, 1.15);
    assert.equal(utterances.at(-1).pitch, 1);
    player.storage.setItem = () => { throw Error('Unavailable storage'); };
    player.configure(1, '');
    assert.match(notices.at(-1), /could not be saved/);
});

test('unsupported speech, thrown speak, async errors and empty text remain recoverable', () => {
    const { player, speech, utterances, notices } = fixture();
    player.start({ ...story, text: '  ' });
    assert.match(notices.at(-1), /Load a story/);
    speech.speak = () => { throw Error('Unavailable'); };
    player.start(story);
    assert.equal(player.state, 'error');
    assert.match(notices.at(-1), /could not start/);
    speech.speak = utterance => utterances.push(utterance);
    player.start(story);
    utterances.at(-1).onerror({ error: 'network' });
    assert.equal(player.state, 'error');
    player.speech = null;
    player.start(story);
    assert.equal(player.state, 'error');
    assert.match(notices.at(-1), /unavailable/);
});

test('recordings require stable identity, exact transcript, language and same-origin narration paths', () => {
    const { matchRecording } = fixture();
    const input = { ...story, storyId: 'butterfly-garden' };
    const record = {
        storyId: input.storyId, text: input.text, language: 'en',
        status: 'preview', src: 'audio/narration/butterfly.wav'
    };
    assert.equal(matchRecording(input, [record]), record);
    for (const change of [{ storyId: '' }, { text: input.text + ' Changed.' }, { language: 'es' }]) {
        assert.equal(matchRecording({ ...input, ...change }, [record]), null);
    }
    for (const change of [
        { src: 'https://other.test/audio/narration/x.wav' },
        { src: 'audio/narration/../../x.wav' }, { src: 'javascript:alert(1)' },
        { status: 'unreviewed-license' }
    ]) assert.equal(matchRecording(input, [{ ...record, ...change }]), null);
});

function mediaFixture() {
    const data = fixture();
    const media = [];
    data.player.createAudio = src => {
        const audio = {
            src, currentTime: 0, paused: true, plays: [],
            play() {
                this.paused = false;
                let resolve;
                let reject;
                const pending = new Promise((ok, fail) => { resolve = ok; reject = fail; });
                this.plays.push({ pending, resolve, reject });
                return pending;
            },
            pause() { this.paused = true; },
            removeAttribute() { this.src = ''; },
            load() {}
        };
        media.push(audio);
        return audio;
    };
    return { ...data, media };
}

const settle = () => new Promise(resolve => setImmediate(resolve));
const recordedStory = { ...story, recording: { src: 'audio/narration/test.wav' } };

test('recorded pause/resume preserves position and old promises cannot revive stopped audio', async () => {
    const { player, media, utterances } = mediaFixture();
    player.start(recordedStory);
    const audio = media[0];
    assert.equal(player.state, 'loading');
    player.pause();
    audio.currentTime = 12;
    player.resume();
    audio.plays[1].resolve();
    await settle();
    audio.plays[0].resolve();
    await settle();
    assert.equal(player.state, 'playing');
    assert.equal(audio.paused, false);
    assert.equal(audio.currentTime, 12);
    assert.equal(utterances.length, 0);
    const oldEnded = audio.onended;
    player.stop();
    oldEnded();
    assert.equal(player.state, 'idle');
    assert.equal(audio.src, '');
    player.start(recordedStory);
    player.stop();
    media[1].plays[0].resolve();
    await settle();
    assert.equal(player.state, 'idle');
    assert.equal(media[1].paused, true);
});

test('recorded failure offers an explicit fallback choice without silently switching to speech', async () => {
    const { player, media, notices, utterances } = mediaFixture();
    player.start(recordedStory);
    media[0].plays[0].reject(Error('Autoplay blocked'));
    await settle();
    assert.equal(player.state, 'error');
    assert.match(notices.at(-1), /Choose a device voice in Settings/);
    assert.equal(utterances.length, 0);
    player.start(recordedStory);
    media[1].onerror();
    assert.equal(player.state, 'error');
    assert.equal(utterances.length, 0);
    player.start(story);
    assert.equal(player.state, 'playing');
    assert.equal(utterances.length, 1);
    player.start(recordedStory);
    player.pause();
    media[2].play = () => { throw Error('Device unavailable on resume'); };
    assert.doesNotThrow(() => player.resume());
    assert.equal(player.state, 'error');
    assert.match(notices.at(-1), /Choose a device voice in Settings/);
});

test('recommended narration is the default and explicit device preferences survive reload', () => {
    const { player, storage } = fixture({
        'hope-narration': JSON.stringify({ rate: 1, voiceURI: 'legacy-voice' })
    });
    assert.equal(player.preferBrowser, false);
    player.configure(1.15, 'chosen-voice', true);
    const reloaded = fixture(Object.fromEntries(storage));
    assert.equal(reloaded.player.preferBrowser, true);
    assert.equal(reloaded.player.voiceURI, 'chosen-voice');
    reloaded.player.configure(0.9, '');
    assert.equal(reloaded.player.preferBrowser, false);
    assert.equal(JSON.parse(reloaded.storage.get('hope-narration')).preferBrowser, false);
});

test('local audio encoding rejects unusable output and normalizes peaks without clipping', async () => {
    const { encodeWav } = await import('../tools/narration/generate.mjs');
    for (const values of [[], [0, 0], [NaN, 1], [Infinity, 1]]) {
        assert.throws(() => encodeWav(Float32Array.from(values)), /empty|non-finite|quiet/);
    }
    const { wav } = encodeWav(Float32Array.from([0, 2, -2, 0.5]));
    assert.equal(wav.readUInt32LE(40), 8);
    assert.equal(wav.readInt16LE(46), Math.round(0.85 * 32767));
    assert.equal(wav.readInt16LE(48), -Math.round(0.85 * 32767));
});

test('built-in production rejects missing/conflicting IDs and deduplicates the shared Guided transcript', async () => {
    const { readBuiltInStories } = await import('../tools/narration/generate.mjs');
    const app = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
    const stories = readBuiltInStories(app);
    assert.equal(stories.filter(story => story.id === 'riverside-creek').length, 1);
    assert.throws(() => readBuiltInStories(app.replace("id: 'beach-cleanup'", "id: ''")), /stable ID/);
    assert.throws(() => readBuiltInStories(app.replace("id: 'beach-cleanup'", "id: 'riverside-creek'")), /conflicting transcripts/);
});

test('every installed built-in recording matches its transcript, provenance hashes and unclipped PCM shape', async () => {
    const { readBuiltInStories } = await import('../tools/narration/generate.mjs');
    const crypto = require('node:crypto');
    const hash = data => crypto.createHash('sha256').update(data).digest('hex');
    const root = path.join(__dirname, '..');
    const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
    const stories = readBuiltInStories(app);
    const records = vm.runInNewContext(fs.readFileSync(path.join(root, 'js', 'narration-library.js'), 'utf8') + '\nnarrationLibrary;');
    const { matchRecording } = fixture();
    for (const story of stories) {
        const record = matchRecording({ storyId: story.id, text: story.text, language: 'en' }, records);
        assert.ok(record, `Missing recording for ${story.id}`);
        assert.equal(records.filter(entry => entry.storyId === story.id).length, 1);
        const production = JSON.parse(fs.readFileSync(path.join(root, 'audio', 'narration', `${story.id}.production.json`)));
        const wav = fs.readFileSync(path.join(root, record.src));
        assert.equal(hash(wav), production.audioSha256);
        assert.equal(hash(story.text), production.transcriptSha256);
        assert.equal(production.segments.map(segment => segment.text).join(' ').replace(/\s+/g, ' '), story.text.replace(/\s+/g, ' '));
        assert.equal(wav.toString('ascii', 0, 4), 'RIFF');
        assert.equal(wav.toString('ascii', 8, 16), 'WAVEfmt ');
        assert.equal(wav.readUInt16LE(20), 1);
        assert.equal(wav.readUInt16LE(22), 1);
        assert.equal(wav.readUInt32LE(24), 24000);
        assert.equal(wav.readUInt16LE(34), 16);
        assert.equal(wav.readUInt32LE(40), wav.length - 44);
        const duration = (wav.length - 44) / 48000;
        const pace = story.text.split(/\s+/).length * 60 / duration;
        assert.ok(pace >= 90 && pace <= 220, `${story.id} must have a comfortable reading pace`);
        assert.equal(duration, production.duration);
        let peak = 0;
        for (let i = 44; i < wav.length; i += 2) peak = Math.max(peak, Math.abs(wav.readInt16LE(i)));
        assert.ok(peak > 10000 && peak < 32767, `${story.id} must be audible without clipped PCM samples`);
        assert.equal(matchRecording({ storyId: '', text: story.text, language: 'en' }, records), null);
        assert.equal(matchRecording({ storyId: story.id, text: story.text, language: 'es' }, records), null);
    }
});
