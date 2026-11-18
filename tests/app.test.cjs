const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');
new vm.Script(source);

function functionSource(name) {
    const start = source.indexOf(`function ${name}(`);
    assert.notEqual(start, -1, `Missing function ${name}`);
    return source.slice(start, source.indexOf('\n}', start) + 2);
}

function element() {
    const classes = new Set();
    const listeners = new Map();
    return {
        dataset: {},
        listeners,
        textContent: '',
        innerHTML: '',
        style: {},
        disabled: false,
        children: [],
        focus() {},
        setAttribute(name, value) { this[name] = value; },
        removeAttribute(name) { delete this[name]; },
        addEventListener(name, callback) {
            if (!listeners.has(name)) listeners.set(name, []);
            listeners.get(name).push(callback);
        },
        dispatch(name, event = {}) { for (const callback of listeners.get(name) || []) callback(event); },
        click() { this.dispatch('click', { target: this }); },
        insertAdjacentHTML(_, html) { this.innerHTML += html; },
        classList: {
            add: (...names) => names.forEach(name => classes.add(name)),
            remove: (...names) => names.forEach(name => classes.delete(name)),
            toggle(name, force) {
                const add = force === undefined ? !classes.has(name) : force;
                if (add) classes.add(name); else classes.delete(name);
                return add;
            },
            contains: name => classes.has(name)
        },
        appendChild(child) { this.children.push(child); },
        querySelector: () => null,
        querySelectorAll: () => []
    };
}

test('screen preparation initializes every activity once per grade without resetting revisits', () => {
    const calls = [];
    const context = {
        currentAge: 'elementary',
        initializedScreens: new Map()
    };
    for (const name of ['initWalk', 'initGuided', 'initDetective', 'initQuest', 'initMatchActivity', 'renderResources', 'initTrail']) {
        context[name] = () => calls.push(name);
    }
    vm.createContext(context);
    vm.runInContext(functionSource('prepareScreen'), context);
    for (const grade of ['elementary', 'middle', 'high']) {
        context.currentAge = grade;
        for (const screen of ['walk-screen', 'guided-screen', 'detective-screen', 'quest-screen', 'match-screen', 'resources-screen', 'trail-screen']) {
            const before = calls.length;
            vm.runInContext(`prepareScreen('${screen}'); prepareScreen('${screen}')`, context);
            assert.equal(calls.length, before + (screen === 'trail-screen' && grade !== 'elementary' ? 0 : 1));
        }
    }
});

test('one story button uses the recommended narrator and toggles pause/resume without restarting', () => {
    const calls = [];
    const recording = { src: 'audio/narration/story.wav' };
    const story = { id: 'guided-text', text: 'Story text.', language: 'en' };
    const player = {
        preferBrowser: false, state: 'idle',
        start(source) { Object.assign(this, source, { state: 'playing' }); calls.push(['start', source.recording]); },
        pause() { this.state = 'paused'; calls.push(['pause']); },
        resume() { this.state = 'playing'; calls.push(['resume']); }
    };
    const context = {
        storyNarration: player, storyReadingSource: () => story,
        narrationLibrary: [recording], document: { baseURI: 'https://example.test/' },
        findNarrationRecording: () => recording
    };
    vm.createContext(context);
    vm.runInContext(functionSource('selectedStoryRecording') + '\n' + functionSource('toggleStoryNarration'), context);
    const click = () => vm.runInContext('toggleStoryNarration({})', context);
    click();
    click();
    click();
    assert.deepEqual(calls, [['start', recording], ['pause'], ['resume']]);
    player.state = 'loading';
    click();
    assert.equal(calls.at(-1)[0], 'pause');
    player.preferBrowser = true;
    player.state = 'idle';
    click();
    assert.deepEqual(calls.at(-1), ['start', null]);
    player.state = 'paused';
    story.text = 'Different story.';
    click();
    assert.equal(calls.at(-1)[0], 'start');
});

test('returning visitors start at grade selection while explicit activity links retain the saved grade', () => {
    const start = source.indexOf('(function initAdaptiveUX()');
    const startup = source.slice(start, source.indexOf('\ninitNavigation();', start));
    for (const grade of ['elementary', 'middle', 'high', 'unknown', null]) {
        for (const hash of ['', '#learn-screen']) {
            let active = 'age-screen';
            let selectedGrade = 'middle';
            let navVisible = false;
            const context = vm.createContext({
                ageContent: { elementary: {}, middle: {}, high: {} },
                HopeMetrics: { getData: () => ({ lastGrade: grade, totalSessions: 4 }) },
                setAge(value) { selectedGrade = value; navVisible = true; },
                updateNavActive(id) { navVisible = id !== 'age-screen'; },
                showScreen(id) { active = id; navVisible = id !== 'age-screen'; },
                screens: [{ id: 'age-screen' }, { id: 'learn-screen' }],
                document: { querySelector: () => ({ id: active }) },
                navigationSession: 'fixture', navigationReady: false,
                window: {
                    location: { hash }, addEventListener() {},
                    history: { replaceState(state) { this.state = state; } }
                }
            });
            vm.runInContext(functionSource('initNavigation') + '\n' + startup + '\ninitNavigation()', context);
            assert.equal(active, hash ? 'learn-screen' : 'age-screen');
            assert.equal(navVisible, !!hash);
            assert.equal(selectedGrade, ['elementary', 'middle', 'high'].includes(grade) ? grade : 'middle');
        }
    }
});

test('HOPE opens grade selection, Grade activities stays in grade, and the grade dropdown switches directly', () => {
    const ids = ['nav-home', 'nav-change-grade', 'nav-grade', 'nav-toggle', 'nav-links',
        'nav-dropdown-grade', 'nav-dropdown-games', 'nav-dropdown-tools', 'global-nav'];
    const elements = new Map(ids.map(id => [id, element()]));
    const activities = element();
    activities.dataset = { nav: 'welcome-screen', group: 'home' };
    const games = element();
    games.dataset = { nav: 'games', group: 'games' };
    const choices = ['elementary', 'middle', 'high'].map(age => {
        const choice = element();
        choice.dataset.age = age;
        return choice;
    });
    const dropdowns = ids.filter(id => id.startsWith('nav-dropdown')).map(id => elements.get(id));
    const selections = [];
    const destinations = [];
    const documentEvents = {};
    const context = vm.createContext({
        document: {
            getElementById: id => elements.get(id),
            querySelectorAll(selector) {
                if (selector === '.global-nav-link') return [activities, games];
                if (selector === '.global-nav-dropdown') return dropdowns;
                if (selector === '.age-btn, [data-grade-choice]') return choices;
                return [];
            },
            addEventListener(name, callback) { documentEvents[name] = callback; }
        },
        setAge: grade => selections.push(grade),
        showScreen: id => destinations.push(id)
    });
    const navStart = source.indexOf('const screenToGroup =');
    const ageStart = source.indexOf("document.querySelectorAll('.age-btn, [data-grade-choice]')");
    vm.runInContext(source.slice(navStart, source.indexOf('// ===== Learn Screen', navStart))
        + '\n' + source.slice(ageStart, source.indexOf('// ===== Adaptive UX Engine', ageStart)), context);
    elements.get('nav-home').click();
    activities.click();
    assert.deepEqual(destinations, ['age-screen', 'welcome-screen']);
    const toggle = elements.get('nav-change-grade');
    const dropdown = elements.get('nav-dropdown-grade');
    const open = () => toggle.dispatch('click', { currentTarget: toggle, stopPropagation() {} });
    for (const [index, choice] of choices.entries()) {
        open();
        assert.equal(toggle['aria-expanded'], 'true');
        assert.equal(dropdown.classList.contains('open'), true);
        assert.equal(destinations.length, index + 2);
        choice.click();
        assert.equal(toggle['aria-expanded'], 'false');
        assert.equal(dropdown.classList.contains('open'), false);
        assert.equal(destinations.at(-1), 'welcome-screen');
    }
    assert.deepEqual(selections, ['elementary', 'middle', 'high']);
    let restoredFocus = false;
    toggle.focus = () => { restoredFocus = true; };
    open();
    elements.get('nav-grade').dispatch('keydown', { key: 'Escape' });
    assert.equal(restoredFocus, true);
    assert.equal(toggle['aria-expanded'], 'false');
    open();
    documentEvents.click({ target: { closest: () => null } });
    assert.equal(dropdown.classList.contains('open'), false);
    open();
    games.dispatch('click', { stopPropagation() {} });
    assert.equal(toggle['aria-expanded'], 'false');
    assert.equal(elements.get('nav-dropdown-games').classList.contains('open'), true);
});

test('Back uses application history once and falls back to grade activities after refresh', () => {
    let backs = 0;
    const screens = [];
    const context = {
        navigationPending: false, navigationReady: true, navigationIndex: 2,
        window: { history: { back: () => backs++ } },
        showScreen: id => screens.push(id)
    };
    vm.createContext(context);
    vm.runInContext(functionSource('goBack'), context);
    vm.runInContext('goBack(); goBack()', context);
    assert.equal(backs, 1);
    context.navigationPending = false;
    context.navigationIndex = 0;
    vm.runInContext('goBack()', context);
    assert.deepEqual(screens, ['welcome-screen']);
});

test('screen history ignores duplicate destinations and restores browser Back without pushing', () => {
    let active;
    const elements = new Map(['welcome-screen', 'learn-screen', 'marker-detail-screen'].map(id => {
        const item = element();
        item.id = id;
        item.classList.add('screen');
        item.querySelector = () => null;
        return [id, item];
    }));
    active = elements.get('welcome-screen');
    let pushes = 0;
    let welcomeRefreshes = 0;
    const context = {
        document: {
            getElementById: id => id === 'trail-iframe' ? {} : elements.get(id),
            querySelector: () => active
        },
        screens: [...elements.values()],
        prepareScreen() {}, stopStoryNarration() {},
        window: {
            location: { origin: 'https://fixture.test' }, scrollTo() {},
            history: {
                pushState(state) { pushes++; this.state = state; },
                replaceState(state) { this.state = state; }
            }
        },
        HopeMetrics: { trackScreenView() {} },
        updateAdaptiveWelcome() { welcomeRefreshes++; }, updateNavActive() {},
        navigationReady: true, navigationSession: 'fixture', navigationIndex: 0,
        markerOrder: ['motivation', 'belief', 'plans', 'agency'], currentMarkerIdx: 1,
        console, showToast: message => { throw new Error(message); }
    };
    vm.createContext(context);
    vm.runInContext(functionSource('showScreen'), context);
    vm.runInContext("showScreen('welcome-screen'); showScreen('learn-screen')", context);
    assert.equal(pushes, 1);
    assert.equal(welcomeRefreshes, 1);
    active = elements.get('learn-screen');
    vm.runInContext("showScreen('marker-detail-screen')", context);
    assert.equal(pushes, 2);
    assert.equal(context.window.history.state.hopeMarker, 'belief');
    active = elements.get('marker-detail-screen');
    context.currentMarkerIdx = 3;
    vm.runInContext("showScreen('marker-detail-screen')", context);
    assert.equal(pushes, 2);
    assert.equal(context.window.history.state.hopeMarker, 'agency');
    vm.runInContext("showScreen('marker-detail-screen', { record: false })", context);
    assert.equal(pushes, 2);
});

test('marker details restore their content on reload, Back, Forward and direct entry', () => {
    const renders = [];
    let popstate;
    const active = { id: 'marker-detail-screen' };
    const context = vm.createContext({
        markerOrder: ['motivation', 'belief', 'plans', 'agency'], currentMarkerIdx: 0,
        screens: [active], navigationSession: 'fixture', navigationReady: false,
        navigationIndex: 0, navigationPending: false,
        document: { querySelector: () => active },
        window: {
            location: { hash: '#marker-detail-screen' },
            history: {
                state: { hopeMarker: 'belief' },
                replaceState(state) { this.state = state; }
            },
            addEventListener(_, handler) { popstate = handler; }
        },
        renderMarkerDetail: marker => renders.push(marker)
    });
    vm.runInContext([functionSource('prepareScreen'), functionSource('initNavigation')].join('\n'), context);
    context.showScreen = id => vm.runInContext(`prepareScreen('${id}')`, context);
    vm.runInContext('initNavigation()', context);
    assert.deepEqual(renders, ['belief']);
    assert.equal(context.window.history.state.hopeMarker, 'belief');
    popstate({ state: { hopeScreen: active.id, hopeSession: 'fixture', hopeIndex: 1, hopeMarker: 'agency' } });
    popstate({ state: { hopeScreen: active.id, hopeSession: 'fixture', hopeIndex: 2, hopeMarker: 'plans' } });
    assert.deepEqual(renders, ['belief', 'agency', 'plans']);
    context.window.history.state = null;
    vm.runInContext('initNavigation()', context);
    assert.equal(renders.at(-1), 'motivation');
    context.navigationPending = true;
    popstate({ state: { hopeScreen: 'unknown-screen' } });
    assert.equal(context.navigationPending, false);
});

function guidedFixture(grade = 'elementary') {
    const elements = new Map();
    const utterances = [];
    const timers = new Map();
    const notices = [];
    let timerId = 0;
    let celebrations = 0;
    let focused = '';
    const context = vm.createContext({
        currentAge: grade, console: { warn() {} },
        document: {
            getElementById(id) {
                if (!elements.has(id)) {
                    const item = element();
                    item.focus = () => { focused = id; };
                    if (id === 'guided-thinkaloud') item.querySelector = () => ({ innerText: 'A marker explanation.' });
                    elements.set(id, item);
                }
                return elements.get(id);
            },
            querySelectorAll: () => [], querySelector: () => null
        },
        window: {
            speechSynthesis: {
                speak: utterance => utterances.push(utterance),
                cancel() { utterances.at(-1)?.onend?.(); }
            }
        },
        SpeechSynthesisUtterance: function(text) { this.text = text; },
        stopStoryNarration() {},
        updateNarrationControls() {},
        escapeHtml: String, triggerCelebration() { celebrations++; },
        showToast: message => notices.push(message),
        setTimeout(callback) { timers.set(++timerId, callback); return timerId; },
        clearTimeout: id => timers.delete(id)
    });
    const start = source.indexOf('const guidedStory =');
    vm.runInContext(source.slice(start, source.indexOf("document.getElementById('btn-guided-next').addEventListener", start)), context);
    const run = code => vm.runInContext(code, context);
    run('initGuided()');
    return { run, context, elements, utterances, timers, notices,
        get celebrations() { return celebrations; }, get focused() { return focused; } };
}

test('Guided explanations advance only manually, never speak, and complete once for every grade', () => {
    for (const grade of ['elementary', 'middle', 'high']) {
        const fixture = guidedFixture(grade);
        assert.equal(fixture.elements.get('btn-guided-next').textContent, 'Start exploring');
        fixture.run('advanceGuided()');
        assert.equal(fixture.run('guidedStep'), 0);
        assert.equal(fixture.elements.get('btn-guided-next').textContent, 'Next marker');
        assert.equal(fixture.timers.size, 0);
        assert.equal(fixture.utterances.length, 0);
        assert.equal(fixture.notices.length, 0);
        fixture.run('for (let i = 0; i <= guidedStory.paragraphs.length; i++) advanceGuided()');
        assert.equal(fixture.celebrations, 1);
        assert.equal(fixture.elements.get('guided-completion').classList.contains('hidden'), grade !== 'elementary');
        assert.equal(fixture.elements.get('btn-guided-next').classList.contains('hidden'), true);
        assert.equal(fixture.focused, grade === 'elementary' ? 'btn-guided-story' : 'btn-guided-reset');
        fixture.run('initGuided()');
        assert.equal(fixture.run('guidedStep'), -1);
        assert.equal(fixture.elements.get('guided-completion').classList.contains('hidden'), true);
    }
});

test('guided story choices open the analyzer and load the selected grade-specific story', () => {
    for (const grade of ['elementary', 'middle', 'high']) {
        const screens = [];
        const loaded = [];
        const card = element();
        card.dataset.index = '0';
        const grid = element();
        grid.querySelectorAll = () => [card];
        const modal = element();
        modal.classList.add('hidden');
        const context = {
            currentAge: grade,
            sampleTexts: { [grade]: [{ id: 'test-story', title: 'A story', desc: 'A description', text: `${grade} story text` }] },
            showScreen: screen => screens.push(screen),
            escapeHtml: String, loadText: (text, id) => loaded.push({ text, id }),
            document: { getElementById: id => id === 'text-picker-grid' ? grid : modal }
        };
        vm.runInNewContext(functionSource('openStoryChoices') + '\nopenStoryChoices()', context);
        assert.deepEqual(screens, ['activity-screen']);
        assert.equal(modal.classList.contains('hidden'), false);
        card.click();
        assert.deepEqual(loaded, [{ text: `${grade} story text`, id: 'test-story' }]);
        assert.equal(modal.classList.contains('hidden'), true);
    }
});

test('loading a story refreshes narration after replacing its transcript and stable identity', () => {
    const textContent = element();
    const refreshed = [];
    const context = {
        textContent, findings: [], collectedMarkers: new Set(),
        stopStoryNarration() {}, updateFindings() {}, resetCollectionTracker() {},
        escapeHtml: String,
        updateNarrationControls: () => refreshed.push({ ...textContent.dataset, html: textContent.innerHTML })
    };
    vm.runInNewContext(functionSource('loadText') + '\nloadText("A paragraph.", "butterfly-garden"); loadText("Edited text.");', context);
    assert.deepEqual(refreshed, [
        { storyId: 'butterfly-garden', html: '<p>A paragraph.</p>' },
        { storyId: '', html: '<p>Edited text.</p>' }
    ]);
});

test('one voice picker maps recommended and device choices to persistent preferences', () => {
    let change;
    const configured = [];
    const rate = { value: '1.15' };
    const voice = { value: 'voice:chosen-voice' };
    const context = {
        panel: {
            querySelectorAll: () => [{ addEventListener: (_, callback) => { change = callback; } }],
            querySelector: selector => selector === '[data-reading-rate]' ? rate : voice
        },
        storyNarration: { configure: (...values) => configured.push(values) }
    };
    const normalized = source.replace(/\r\n/g, '\n');
    const start = normalized.indexOf("panel.querySelectorAll('select').forEach");
    const end = normalized.indexOf('\n});\nupdateNarrationControls();', start);
    assert.ok(start >= 0 && end > start);
    vm.runInNewContext(normalized.slice(start, end), context);
    change();
    voice.value = 'device';
    change();
    voice.value = '';
    change();
    assert.deepEqual(configured, [[1.15, 'chosen-voice', true], [1.15, '', true], [1.15, '', false]]);
});

test('each landing wheel link opens its existing marker detail without default hash navigation', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const links = [...html.matchAll(/<a [^>]*data-wheel-marker="([^"]+)"[^>]*>/g)].map(match => {
        assert.match(match[0], /aria-label="Explore [^"]+"/);
        const link = element();
        link.dataset.wheelMarker = match[1];
        return link;
    });
    const opened = [];
    const start = source.indexOf("document.querySelectorAll('[data-wheel-marker]')");
    vm.runInNewContext(source.slice(start, source.indexOf('\nfunction openMarkerDetail', start)), {
        document: { querySelectorAll: () => links },
        openMarkerDetail: marker => opened.push(marker)
    });
    let prevented = 0;
    links.forEach(link => link.dispatch('click', { preventDefault() { prevented++; } }));
    assert.deepEqual(opened.sort(), ['agency', 'belief', 'motivation', 'plans']);
    assert.equal(prevented, 4);
});

function matchFixture(grade = 'middle') {
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
        currentAge: grade,
        HopeMetrics: { trackCompletion: () => completions++ },
        triggerCelebration() {},
        setTimeout(callback) { timers.set(++timerId, callback); return timerId; },
        clearTimeout(id) { timers.delete(id); }
    });
    const start = source.indexOf('// ===== Match Activity =====');
    const end = source.indexOf('// Wire up choice buttons', start);
    vm.runInContext(source.slice(start, end), context);
    const run = code => vm.runInContext(code, context);
    const advance = () => run('continueMatch()');
    run('initMatchActivity()');
    return { run, advance, timers, choices, get completions() { return completions; } };
}

test('matching waits for explicit Continue and accepts each answer only once', () => {
    const fixture = matchFixture();
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    assert.equal(fixture.run('matchIndex'), 0);
    assert.equal(fixture.run('matchAttempts'), 1);
    assert.equal(fixture.timers.size, 0);
    assert.ok(fixture.choices.every(choice => choice.disabled));
    fixture.advance();
    fixture.advance();
    assert.equal(fixture.run('matchIndex'), 1);
    assert.ok(fixture.choices.every(choice => !choice.disabled));
});

test('restarting matching clears pending feedback and every grade completes once', () => {
    for (const grade of ['elementary', 'middle', 'high']) {
    const fixture = matchFixture(grade);
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker); initMatchActivity()');
    assert.equal(fixture.timers.size, 0);
    assert.equal(fixture.run('matchIndex'), 0);
    for (let i = 0; i < fixture.run('matchQueue.length'); i++) {
        fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
        fixture.advance();
    }
    assert.doesNotThrow(() => fixture.run("handleMatchChoice('motivation')"));
    fixture.run('continueMatch(); completeMatchActivity()');
    assert.equal(fixture.completions, 1);
    }
});

test('an incorrect matching answer can be retried without advancing', () => {
    const fixture = matchFixture();
    fixture.run("handleMatchChoice(matchQueue[matchIndex].marker === 'agency' ? 'plans' : 'agency')");
    assert.equal(fixture.run('matchIndex'), 0);
    fixture.run('handleMatchChoice(matchQueue[matchIndex].marker)');
    assert.equal(fixture.run('matchIndex'), 0);
    fixture.advance();
    assert.equal(fixture.run('matchIndex'), 1);
});

test('Quest keeps outcomes stable until Continue, prevents duplicate transitions, and completes every grade', () => {
    for (const grade of ['elementary', 'middle', 'high']) {
        const elements = new Map();
        const choices = Array.from({ length: 4 }, element);
        let completions = 0;
        const context = vm.createContext({
            currentAge: grade, choice: element(),
            document: {
                getElementById(id) {
                    if (!elements.has(id)) elements.set(id, element());
                    return elements.get(id);
                },
                querySelectorAll: () => choices
            },
            questSFX: { enter() {}, type() {}, hover() {}, correct() {}, fragment() {}, wrong() {}, victory() {} },
            getQuestArt: () => '', escapeHtml: String, triggerCelebration() {},
            HopeMetrics: { trackCompletion: () => completions++ },
            setTimeout() { assert.fail('Quest must not schedule outcome or advancement timers'); }
        });
        const start = source.indexOf('const questScenarios =');
        vm.runInContext(source.slice(start, source.indexOf('// Navigation', start)), context);
        const run = code => vm.runInContext(code, context);
        run('initQuest(); advanceQuest()');
        assert.equal(run('questStage'), 0);
        run("choice.dataset.marker = 'invalid'; handleQuestChoice(choice, questScenarios[currentAge][questStage])");
        assert.equal(run('questChoiceMade'), false);
        for (let stage = 0; stage < 4; stage++) {
            run('choice.dataset.marker = questScenarios[currentAge][questStage].marker; handleQuestChoice(choice, questScenarios[currentAge][questStage]); handleQuestChoice(choice, questScenarios[currentAge][questStage])');
            assert.equal(run('questStage'), stage);
            assert.ok(elements.get('quest-result').innerHTML.includes('btn-quest-next'));
            run('advanceQuest(); advanceQuest()');
            assert.equal(run('questStage'), stage + 1);
        }
        assert.equal(completions, 1);
        run('initQuest()');
        assert.equal(run('questStage'), 0);
    }
});

test('Detective binds zones once and requires every distinct clue in all grade-specific cases', () => {
    for (const grade of ['elementary', 'middle', 'high']) {
        const elements = new Map();
        let clues = [];
        let completions = 0;
        const zones = ['motivation', 'belief', 'plans', 'agency'].map(marker => {
            const zone = element();
            zone.dataset.marker = marker;
            const parent = element();
            parent.querySelector = () => element();
            zone.closest = () => parent;
            return zone;
        });
        const context = vm.createContext({
            currentAge: grade, zones,
            document: {
                getElementById(id) {
                    if (!elements.has(id)) elements.set(id, element());
                    return elements.get(id);
                },
                querySelectorAll: selector => selector === '.detective-zone-drop' ? zones
                    : selector === '.detective-clue.selected' ? clues.filter(clue => clue.classList.contains('selected')) : clues,
                querySelector(selector) {
                    if (selector === '.detective-clue:not(.placed)') return clues.find(clue => !clue.classList.contains('placed'));
                    if (!elements.has(selector)) elements.set(selector, element());
                    return elements.get(selector);
                }
            },
            questSFX: { fragment() {}, wrong() {}, victory() {} },
            HopeMetrics: { trackCompletion: () => completions++ }, triggerCelebration() {}, escapeHtml: String,
            setTimeout() { assert.fail('Detective completion must not depend on a timer'); }
        });
        const start = source.indexOf('const detectiveClues =');
        vm.runInContext(source.slice(start, source.indexOf('// Navigation', start)), context);
        const run = code => vm.runInContext(code, context);
        for (let caseIndex = 0; caseIndex < run('detectiveClues[currentAge].length'); caseIndex++) {
            clues = Array.from(run(`detectiveClues[currentAge][${caseIndex}].clues`), (data, i) => {
                const clue = element();
                clue.dataset.marker = data.marker;
                clue.id = `clue-${i}`;
                elements.set(clue.id, clue);
                return clue;
            });
            context.clues = clues;
            run(`detectiveCase = ${caseIndex}; initDetective(); setupDetectiveDragDrop(); solveDetective()`);
            assert.equal(completions, caseIndex);
            assert.equal(elements.get('.detective-board').style.display, '');
            assert.equal(zones[0].listeners.get('drop').length, 1);
            assert.equal(clues[0].listeners.get('keydown').length, 1);
            clues[0].dispatch('keydown', { key: 'Enter', preventDefault() {} });
            assert.equal(run('selectedClue === clues[0]'), true);
            run("handleClueDrop(clues[0], zones.find(zone => zone.dataset.marker !== clues[0].dataset.marker))");
            assert.equal(run('detectiveCorrect'), 0);
            for (let i = 0; i < clues.length; i++) {
                run(`handleClueDrop(clues[${i}], zones.find(zone => zone.dataset.marker === clues[${i}].dataset.marker)); handleClueDrop(clues[${i}], zones.find(zone => zone.dataset.marker === clues[${i}].dataset.marker))`);
                assert.equal(run('detectiveCorrect'), i + 1);
                assert.equal(completions, caseIndex + (i === clues.length - 1 ? 1 : 0));
            }
            run('solveDetective()');
            assert.equal(completions, caseIndex + 1);
        }
    }
});

test('leaving Walk settles pending visual effects while restart discards stale effects', () => {
    const timers = new Map();
    const frames = new Map();
    let id = 0;
    const effects = [];
    const context = vm.createContext({
        walkEffects: new Map(), walkFrames: new Map(), effects,
        window: { matchMedia: () => ({ matches: false }) },
        setTimeout(callback) { timers.set(++id, callback); return id; },
        clearTimeout: key => timers.delete(key),
        requestAnimationFrame(callback) { frames.set(++id, callback); return id; },
        cancelAnimationFrame: key => frames.delete(key)
    });
    vm.runInContext(['walkDelay', 'walkFrame', 'stopWalkEffects'].map(functionSource).join('\n'), context);
    vm.runInContext("walkFrame(() => walkFrame(() => effects.push('entered'))); walkDelay(() => walkDelay(() => effects.push('continue-visible'), 200), 100); stopWalkEffects(true)", context);
    assert.deepEqual(effects, ['entered', 'continue-visible']);
    assert.equal(timers.size + frames.size, 0);
    vm.runInContext("walkDelay(() => effects.push('stale'), 200); stopWalkEffects()", context);
    assert.equal(timers.size, 0);
    assert.deepEqual(effects, ['entered', 'continue-visible']);
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

test('extracted resources load before the app and preserve grade filtering and valid worksheet actions', () => {
    const dataSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'resources.js'), 'utf8');
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    assert.ok(html.indexOf('src="js/resources.js"') < html.indexOf('src="js/app.js"'));
    const screenIds = new Set([...html.matchAll(/<section id="([^"]+)" class="screen/g)].map(match => match[1]));
    for (const grade of ['elementary', 'middle', 'high']) {
        const elements = new Map();
        let tabs = [];
        const context = vm.createContext({
            currentAge: grade, escapeHtml: String,
            document: {
                getElementById(id) {
                    if (!elements.has(id)) elements.set(id, element());
                    return elements.get(id);
                }
            }
        });
        vm.runInContext(dataSource, context);
        const categories = vm.runInContext('resources[currentAge]', context);
        for (const category of categories) {
            assert.ok(category.title && category.icon && category.items.length);
            for (const item of category.items) {
                assert.ok(typeof item.title === 'string' && item.title.length > 0);
                assert.ok(typeof item.desc === 'string' && item.desc.length > 0);
                assert.notEqual(Boolean(item.url), Boolean(item.action));
                if (item.url) assert.equal(new URL(item.url).protocol, 'https:');
                if (item.action) assert.ok(screenIds.has(item.action), item.action);
            }
        }
        tabs = Array.from({ length: categories.length + 1 }, (_, index) => {
            const tab = element();
            tab.dataset.tab = String(index);
            return tab;
        });
        const tabRoot = element();
        tabRoot.querySelectorAll = () => tabs;
        elements.set('resources-tabs', tabRoot);
        vm.runInContext(functionSource('renderResources') + '\nrenderResources()', context);
        const grid = elements.get('resources-grid');
        const countCards = () => [...grid.innerHTML.matchAll(/class="resource-card /g)].length;
        assert.equal(countCards(), categories.reduce((total, category) => total + category.items.length, 0));
        categories.forEach((category, index) => {
            tabs[index + 1].click();
            assert.equal(countCards(), category.items.length);
            for (const item of category.items) {
                assert.ok(grid.innerHTML.includes(item.title));
                if (item.action) assert.ok(grid.innerHTML.includes(`data-action="${item.action}"`));
            }
        });
        tabs[0].click();
        assert.equal(countCards(), categories.reduce((total, category) => total + category.items.length, 0));
    }
});

test('changing grade after loading a story does not require the removed placeholder', () => {
    const elements = new Map();
    const context = {
        currentAge: 'middle',
        ageContent: { high: { reflectTitle: 'Critical Reflection' } },
        stopStoryNarration() {},
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

test('text feedback honors the existing answer keys for every grade-specific matching example', () => {
    const context = vm.createContext({});
    for (const [from, to] of [['const markerSignals =', 'function evaluateFinding('], ['const matchPhrases =', '// Correct/incorrect feedback']]) {
        const start = source.indexOf(from);
        vm.runInContext(source.slice(start, source.indexOf(to, start)), context);
    }
    vm.runInContext(functionSource('evaluateFinding'), context);
    const results = vm.runInContext('Object.values(matchPhrases).flat().map(phrase => evaluateFinding(phrase))', context);
    assert.ok(results.every(result => result === 'aligned'));
    assert.equal(vm.runInContext("evaluateFinding({ text: matchPhrases.elementary[0].text, marker: 'plans' })", context), 'notAligned');
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
    let now = 1000;
    let cloudCalls = 0;
    const handlers = new Map();
    const localStorage = storage();
    const sessionStorage = storage();
    const context = vm.createContext({
        localStorage, sessionStorage,
        Date: class extends Date { static now() { return now; } },
        window: { location: { protocol: 'https:' }, addEventListener: (name, handler) => handlers.set(name, handler) },
        setTimeout() { throw new Error('Metrics must not schedule background uploads'); },
        setInterval() { throw new Error('Metrics must not schedule periodic uploads'); },
        hopeFirestore: { collection() { cloudCalls++; throw new Error('Cloud metrics must not be accessed'); } }
    });
    vm.runInContext(source.slice(0, source.indexOf('// ===== Age Group System =====')), context);
    return {
        run: code => vm.runInContext(code, context),
        localStorage, sessionStorage, handlers,
        setNow: value => { now = value; },
        cloudCalls: () => cloudCalls
    };
}

test('metrics remain browser-only during tracking and unload, even if a Firestore client exists', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(match => match[1]);
    assert.ok(!scripts.some(url => /firebase|firestore/i.test(url)));
    assert.ok(!html.includes('firebase.initializeApp'));
    const fixture = metricsFixture();
    fixture.run("HopeMetrics.trackScreenView('learn-screen'); HopeMetrics.trackCompletion('match'); HopeMetrics.trackAge('elementary'); HopeMetrics.trackMarker('agency'); HopeMetrics.trackFeature('readAloud'); HopeMetrics.trackSuggestionFollowed()");
    fixture.handlers.get('error')({ message: 'synthetic', filename: 'qa.js', lineno: 1 });
    fixture.handlers.get('beforeunload')();
    const data = fixture.run('HopeMetrics.getData()');
    assert.equal(data.totalSessions, 1);
    assert.equal(data.completions.match, 1);
    assert.equal(data.ageSelections.elementary, 1);
    assert.equal(data.markerUsage.agency, 1);
    assert.equal(data.featureUsage.readAloud, 1);
    assert.equal(data.suggestionsFollowed, 1);
    assert.equal(data.errors.length, 1);
    assert.ok(data.sessions[0].end);
    assert.equal(fixture.localStorage.getItem('hope-visitor-id'), null);
    assert.equal(fixture.cloudCalls(), 0);
});

test('clearing browser metrics retires the legacy ID without touching classroom work or old screen time', () => {
    const fixture = metricsFixture();
    const retained = {
        'hope-classroom': '{"name":"Synthetic"}',
        'hope-submissions-QA': '[{"content":"Synthetic work"}]',
        'hope-feedback-QA': '{"synthetic":{"comment":"Keep"}}'
    };
    for (const [key, value] of Object.entries(retained)) fixture.localStorage.setItem(key, value);
    fixture.localStorage.setItem('hope-visitor-id', 'synthetic-legacy-id');
    fixture.run("HopeMetrics.trackScreenView('learn-screen')");
    fixture.setNow(60000);
    fixture.run('HopeMetrics.clearData()');
    assert.equal(fixture.localStorage.getItem('hope-metrics'), null);
    assert.equal(fixture.localStorage.getItem('hope-visitor-id'), null);
    assert.equal(fixture.sessionStorage.getItem('hope-session'), null);
    fixture.handlers.get('beforeunload')();
    assert.equal(fixture.localStorage.getItem('hope-metrics'), null);
    for (const [key, value] of Object.entries(retained)) assert.equal(fixture.localStorage.getItem(key), value);
    fixture.setNow(70000);
    fixture.run("HopeMetrics.trackScreenView('resources-screen')");
    const data = fixture.run('HopeMetrics.getData()');
    assert.equal(Object.keys(data.screenTime).length, 0);
    assert.equal(data.events.length, 1);
    assert.equal(data.events[0].id, 'resources-screen');
    assert.equal(fixture.cloudCalls(), 0);
});

test('metrics dashboard renders local counters and histories without fetching aggregate records', () => {
    const data = { errors: ['error'], sessions: ['session'], events: ['event'] };
    const badge = element();
    const rendered = [];
    const context = {
        HopeMetrics: { getData: () => data, getAggregateData() { throw new Error('Unexpected cloud fetch'); } },
        document: { getElementById: () => badge }
    };
    for (const name of ['renderMetricsData', 'renderInsights', 'renderErrorList', 'renderSessionList', 'renderEventLog']) {
        context[name] = value => rendered.push(value);
    }
    vm.runInNewContext(functionSource('renderMetricsDashboard') + '\nrenderMetricsDashboard()', context);
    assert.deepEqual(rendered, [data, data, data.errors, data.sessions, data.events]);
    assert.match(badge.textContent, /cloud collection disabled/);
});

test('browser metrics reset confirms its scope, supports cancellation and reports what remains', () => {
    let allow = false;
    let clears = 0;
    let renders = 0;
    const prompts = [];
    const notices = [];
    const context = vm.createContext({
        confirm: message => { prompts.push(message); return allow; },
        HopeMetrics: { clearData: () => clears++ },
        renderMetricsDashboard: () => renders++,
        showToast: message => notices.push(message)
    });
    vm.runInContext(functionSource('clearBrowserMetrics') + '\nclearBrowserMetrics()', context);
    assert.equal(clears + renders + notices.length, 0);
    assert.match(prompts[0], /Classroom work, downloaded files and legacy cloud records will not be deleted/);
    allow = true;
    vm.runInContext('clearBrowserMetrics()', context);
    assert.equal(clears, 1);
    assert.equal(renders, 1);
    assert.match(notices[0], /legacy cloud records are unchanged/);
});
