const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

function functionSource(name) {
    const start = source.indexOf(`function ${name}(`);
    assert.notEqual(start, -1, `Missing function ${name}`);
    return source.slice(start, source.indexOf('\n}', start) + 2);
}

function element() {
    const classes = new Set();
    return {
        textContent: '',
        innerHTML: '',
        style: {},
        disabled: false,
        children: [],
        classList: {
            add: (...names) => names.forEach(name => classes.add(name)),
            remove: (...names) => names.forEach(name => classes.delete(name)),
            contains: name => classes.has(name)
        },
        appendChild(child) { this.children.push(child); },
        querySelectorAll: () => []
    };
}

function matchFixture() {
    const elements = new Map();
    const choices = Array.from({ length: 4 }, element);
    const timers = new Map();
    let timerId = 0;
    let completions = 0;
    const context = vm.createContext({
        document: {
            createElement: element,
            getElementById(id) {
                if (!elements.has(id)) elements.set(id, element());
                return elements.get(id);
            },
            querySelector: () => element(),
            querySelectorAll: () => choices
        },
        currentAge: 'middle',
        HopeMetrics: { trackCompletion: () => completions++ },
        triggerCelebration() {},
        setTimeout(callback) { timers.set(++timerId, callback); return timerId; },
        clearTimeout(id) { timers.delete(id); }
    });
    const start = source.indexOf('// ===== Match Activity =====');
    const end = source.indexOf('// Wire up choice buttons', start);
    vm.runInContext(source.slice(start, end), context);
    const run = code => vm.runInContext(code, context);
    const advance = () => {
        const [id, callback] = timers.entries().next().value;
        timers.delete(id);
        callback();
    };
    run('initMatchActivity()');
    return { run, advance, timers, choices, get completions() { return completions; } };
}

test('matching accepts only one answer while the next phrase is pending', () => {
    const fixture = matchFixture();
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    assert.equal(fixture.run('matchIndex'), 1);
    assert.equal(fixture.timers.size, 1);
    assert.ok(fixture.choices.every(choice => choice.disabled));
    fixture.advance();
    assert.ok(fixture.choices.every(choice => !choice.disabled));
});

test('restarting matching cancels an outstanding advance and completion is counted once', () => {
    const fixture = matchFixture();
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker); initMatchActivity()');
    assert.equal(fixture.timers.size, 0);
    assert.equal(fixture.run('matchIndex'), 0);
    for (let i = 0; i < fixture.run('matchQueue.length'); i++) {
        fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
        fixture.advance();
    }
    assert.doesNotThrow(() => fixture.run("handleMatchChoice('motivation')"));
    assert.equal(fixture.completions, 1);
});

test('an incorrect matching answer can be retried without advancing', () => {
    const fixture = matchFixture();
    fixture.run("handleMatchChoice(matchQueue[matchIndex].marker === 'agency' ? 'plans' : 'agency')");
    assert.equal(fixture.run('matchIndex'), 0);
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    assert.equal(fixture.run('matchIndex'), 1);
});

test('gallery preserves its empty state across populated, empty, and repeated filters', () => {
    const empty = element();
    const cards = element();
    let html = '';
    cards.children = [empty];
    Object.defineProperty(cards, 'innerHTML', {
        get: () => html,
        set(value) { html = value; cards.children = []; }
    });
    const context = {
        document: {
            getElementById(id) {
                if (id === 'gallery-empty') return cards.children.includes(empty) ? empty : null;
                if (id === 'gallery-cards') return cards;
                return element();
            }
        },
        getStudentClassroom: () => 'ABC234',
        getClassroom: () => null,
        getSubmissions: () => [{ id: 1, type: 'story', title: 'Hope', content: 'A story', date: 'Today' }],
        getFeedback: () => ({}),
        renderFeedbackHtml: () => ''
    };
    vm.runInNewContext(`${functionSource('renderGallery')}\nrenderGallery('all'); renderGallery('poetry'); renderGallery('all'); renderGallery('poetry');`, context);
    assert.ok(cards.children.includes(empty));
    assert.equal(empty.classList.contains('hidden'), false);
    assert.equal(empty.textContent, 'No submissions match this filter.');
});

test('changing grade after loading a story does not require the removed placeholder', () => {
    const elements = new Map();
    const context = {
        currentAge: 'middle',
        ageContent: { high: { reflectTitle: 'Critical Reflection' } },
        HopeMetrics: { trackAge() {} },
        updateWelcomeClassroomStep() {},
        document: {
            body: {},
            getElementById(id) {
                if (id === 'placeholder-msg') return null;
                if (!elements.has(id)) elements.set(id, element());
                return elements.get(id);
            }
        }
    };
    vm.runInNewContext(`${functionSource('setAge')}\nsetAge('high');`, context);
    assert.equal(context.currentAge, 'high');
    assert.equal(elements.get('reflect-title').textContent, 'Critical Reflection');
});

test('text escaping preserves entities, whitespace, quotes, and Unicode without creating markup', () => {
    const escape = vm.runInNewContext(`(${functionSource('escapeHtml')})`);
    assert.equal(escape('<p>A & B</p> &lt;'), '&lt;p&gt;A &amp; B&lt;/p&gt; &amp;lt;');
    assert.equal(escape(`"hope" 'change'\n\t\u00a0🌿`), `"hope" 'change'\n\t&nbsp;🌿`);
    assert.equal(escape(null), '');
    assert.equal(escape(undefined), '');
    assert.equal(escape(42), '42');
});

test('Firebase bootstrap supports a missing SDK, a partial SDK, and a working SDK', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const bootstrap = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
        .map(match => match[1]).find(script => script.includes('firebase.initializeApp'));
    assert.ok(bootstrap);
    for (const firebase of [undefined, {}, { initializeApp() {}, firestore: () => 'fixture-client' }]) {
        const errors = [];
        const context = { console: { error: message => errors.push(message) } };
        if (firebase) context.firebase = firebase;
        vm.runInNewContext(bootstrap, context);
        assert.equal(context.hopeFirestore, firebase?.firestore ? 'fixture-client' : undefined);
        assert.equal(errors.length, firebase?.firestore ? 0 : 1);
    }
});

function metricsFixture() {
    const storage = () => {
        const items = new Map();
        return {
            getItem: key => items.get(key) || null,
            setItem: (key, value) => items.set(key, value),
            removeItem: key => items.delete(key)
        };
    };
    let write = () => Promise.resolve();
    const errors = [];
    const context = vm.createContext({
        localStorage: storage(),
        sessionStorage: storage(),
        window: { location: { protocol: 'http:' }, addEventListener() {} },
        setTimeout() {},
        setInterval() {},
        console: { error: (...args) => errors.push(args) },
        hopeFirestore: { collection: () => ({ doc: () => ({ set: (...args) => write(...args) }) }) }
    });
    vm.runInContext(source.slice(0, source.indexOf('// ===== Age Group System =====')), context);
    return {
        run: code => vm.runInContext(code, context),
        setWrite: callback => { write = callback; },
        errors
    };
}

test('Firebase write rejection is observed, reported, and cleared after a successful retry', async () => {
    const fixture = metricsFixture();
    const rejection = Promise.reject(Object.assign(new Error('Denied'), { code: 'permission-denied' }));
    rejection.catch(() => {});
    fixture.setWrite(() => rejection);
    await fixture.run('HopeMetrics.syncToFirebase()');
    assert.equal(fixture.run('HopeMetrics.getLastFirebaseError()'), 'permission-denied');
    assert.equal(fixture.errors.length, 1);
    fixture.setWrite(() => Promise.resolve());
    await fixture.run('HopeMetrics.syncToFirebase()');
    assert.equal(fixture.run('HopeMetrics.getLastFirebaseError()'), '');
});

test('Firebase synchronous write errors are reported too', async () => {
    const fixture = metricsFixture();
    fixture.setWrite(() => { throw new Error('SDK unavailable'); });
    await fixture.run('HopeMetrics.syncToFirebase()');
    assert.equal(fixture.run('HopeMetrics.getLastFirebaseError()'), 'SDK unavailable');
    assert.equal(fixture.errors.length, 1);
});
