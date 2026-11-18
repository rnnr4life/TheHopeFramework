class HopeNarration {
    constructor({ speech, Utterance, storage, notify, onStart, onChange, createAudio }) {
        this.speech = speech;
        this.Utterance = Utterance;
        this.storage = storage;
        this.notify = notify;
        this.onStart = onStart;
        this.onChange = onChange;
        this.createAudio = createAudio;
        this.generation = 0;
        this.state = 'idle';
        this.rate = 0.9;
        this.voiceURI = '';
        this.voices = [];
        try {
            const saved = JSON.parse(storage.getItem('hope-narration') || '{}');
            if ([0.75, 0.9, 1, 1.15].includes(saved.rate)) this.rate = saved.rate;
            if (typeof saved.voiceURI === 'string') this.voiceURI = saved.voiceURI;
        } catch (error) {
            console.warn('Narration preferences could not be read:', error);
            notify('Reading preferences could not be restored. Default settings are available.');
        }
        this.refreshVoices();
        speech?.addEventListener('voiceschanged', () => this.refreshVoices());
    }

    refreshVoices() {
        this.voices = this.speech?.getVoices() || [];
        this.onChange?.();
    }

    voiceFor(language = 'en') {
        const compatible = this.voices.filter(voice =>
            voice.lang.toLowerCase().split('-')[0] === language.toLowerCase().split('-')[0]);
        return compatible.find(voice => voice.voiceURI === this.voiceURI)
            || compatible.find(voice => voice.localService && voice.default)
            || compatible.find(voice => voice.localService)
            || compatible.find(voice => voice.default)
            || compatible[0] || null;
    }

    configure(rate, voiceURI) {
        this.stop();
        this.rate = [0.75, 0.9, 1, 1.15].includes(rate) ? rate : 0.9;
        this.voiceURI = voiceURI;
        try {
            this.storage.setItem('hope-narration', JSON.stringify({ rate: this.rate, voiceURI }));
        } catch (error) {
            console.warn('Narration preferences could not be saved:', error);
            this.notify('Reading settings apply now, but could not be saved in this browser.');
        }
        this.onChange?.();
    }

    stop() {
        this.generation++;
        this.state = 'idle';
        if (this.audio) {
            this.audio.onended = null;
            this.audio.onerror = null;
            this.audio.pause();
            this.audio.removeAttribute('src');
            this.audio.load();
            this.audio = null;
        }
        this.speech?.cancel();
        this.onChange?.();
    }

    start({ id, text, language = 'en', recording = null }) {
        this.onStart();
        this.stop();
        this.id = id;
        this.text = text;
        this.language = language;
        this.segments = text.split(/\n\s*\n/).map(segment => segment.trim()).filter(Boolean);
        this.segment = 0;
        if (!this.segments.length) {
            this.notify('Load a story first.');
            return;
        }
        if (recording && !this.createAudio) {
            this.fail('Recording unavailable. Choose Browser voice to try speech, or continue reading the text.');
            return;
        }
        if (recording) {
            try {
                this.audio = this.createAudio(recording.src);
                this.audio.playbackRate = this.rate;
                this.playRecording();
            } catch (error) {
                console.warn('Recorded narration could not start:', error);
                this.fail('Recording unavailable. Choose Browser voice to try speech, or continue reading the text.');
            }
            return;
        }
        this.speakSegment();
    }

    playRecording() {
        const audio = this.audio;
        const generation = ++this.generation;
        this.state = 'loading';
        audio.onended = () => {
            if (generation !== this.generation) return;
            this.state = 'ended';
            this.onChange?.();
        };
        audio.onerror = () => {
            if (generation !== this.generation) return;
            console.warn('Recorded narration failed:', audio.error?.code);
            this.fail('Recording unavailable. Choose Browser voice to try speech, or continue reading the text.');
        };
        this.onChange?.();
        let playback;
        try {
            playback = audio.play();
        } catch (error) {
            console.warn('Recorded narration playback could not start:', error);
            this.fail('Recording could not play. Choose Browser voice to try speech, or continue reading the text.');
            return;
        }
        Promise.resolve(playback).then(() => {
            if (generation !== this.generation) {
                if (this.audio !== audio || ['paused', 'idle', 'error'].includes(this.state)) audio.pause();
                return;
            }
            this.state = 'playing';
            this.onChange?.();
        }).catch(error => {
            if (generation !== this.generation) return;
            console.warn('Recorded narration playback was rejected:', error);
            this.fail('Recording could not play. Choose Browser voice to try speech, or continue reading the text.');
        });
    }

    speakSegment() {
        if (!this.speech || !this.Utterance) {
            this.fail('Read aloud is unavailable in this browser. You can continue reading the text.');
            return;
        }
        const generation = ++this.generation;
        this.state = 'playing';
        const utterance = new this.Utterance(this.segments[this.segment]);
        utterance.rate = this.rate;
        utterance.pitch = 1;
        utterance.lang = this.language;
        const voice = this.voiceFor(this.language);
        if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang;
        }
        this.utterance = utterance;
        utterance.onend = () => {
            if (generation !== this.generation || this.state !== 'playing') return;
            this.segment++;
            if (this.segment < this.segments.length) this.speakSegment();
            else {
                this.state = 'ended';
                this.onChange?.();
            }
        };
        utterance.onerror = event => {
            if (generation !== this.generation) return;
            console.warn('Story narration failed:', event.error);
            this.fail('Read aloud stopped. Try another available voice or continue reading the text.');
        };
        this.onChange?.();
        try {
            this.speech.speak(utterance);
        } catch (error) {
            console.warn('Story narration could not start:', error);
            this.fail('Read aloud could not start. You can continue reading the text.');
        }
    }

    pause() {
        if (!['playing', 'loading'].includes(this.state)) return;
        this.generation++;
        this.state = 'paused';
        if (this.audio) this.audio.pause();
        else this.speech?.cancel();
        this.onChange?.();
    }

    resume() {
        if (this.state !== 'paused') return;
        if (this.audio) this.playRecording();
        else this.speakSegment();
    }

    fail(message) {
        this.stop();
        this.state = 'error';
        this.notify(message);
        this.onChange?.();
    }
}

function findNarrationRecording(source, library, baseURI) {
    const root = new URL('audio/narration/', baseURI);
    return library.find(entry => {
        if (entry.storyId !== source.storyId || entry.language !== source.language
            || entry.text !== source.text || !['preview', 'approved'].includes(entry.status)
            || typeof entry.src !== 'string') return false;
        try {
            const url = new URL(entry.src, baseURI);
            return url.origin === root.origin && url.pathname.startsWith(root.pathname);
        } catch (error) {
            console.warn('Invalid narration asset path:', error);
            return false;
        }
    }) || null;
}
