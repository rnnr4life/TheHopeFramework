const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'hope-trail', 'game.js'), 'utf8');
const start = source.indexOf('function handleTrailKeydown(');
const handlerSource = source.slice(start, source.indexOf('\n}', start) + 2);

test('Trail activates advertised Space/Enter once and preserves native input behavior', () => {
    for (const key of [' ', 'Enter']) {
        let clicks = 0;
        let prevented = 0;
        const control = { textContent: key === ' ' ? 'Press SPACE BAR to explore' : 'Press ENTER to continue', click: () => clicks++, getAttribute: () => null };
        const screen = { contains: () => true, querySelectorAll: () => [control] };
        const handler = vm.runInNewContext(`(${handlerSource})`, { document: { querySelector: () => screen } });
        const event = { key, target: { closest: () => null }, preventDefault: () => prevented++ };
        handler(event);
        assert.equal(clicks, 1);
        assert.equal(prevented, 1);
        handler({ ...event, repeat: true });
        assert.equal(clicks, 1);
        for (const tag of ['input', 'textarea', 'select', 'button', 'a', 'contenteditable']) {
            handler({ ...event, target: { closest: selector => selector.startsWith('input,') ? { tag } : null } });
        }
        assert.equal(clicks, 1);
        handler({ ...event, ctrlKey: true });
        assert.equal(clicks, 1);
    }
});

test('a focused Trail choice supports Enter even without a prompt', () => {
    let clicks = 0;
    const control = { textContent: 'Travel the Hope Trail', click: () => clicks++, getAttribute: () => null };
    const handler = vm.runInNewContext(`(${handlerSource})`, {
        document: { querySelector: () => ({ contains: () => true }) }
    });
    handler({
        key: 'Enter',
        target: { closest: selector => selector === '.menu-option' ? control : null },
        preventDefault() {}
    });
    assert.equal(clicks, 1);
});

function functionSource(name) {
    const start = source.indexOf(`function ${name}(`);
    assert.notEqual(start, -1, `Missing function ${name}`);
    return source.slice(start, source.indexOf('\n}', start) + 2);
}

function trailFixture() {
    const elements = new Map();
    const controls = Array.from({ length: 4 }, () => ({
        style: {}, disabled: false, attributes: {},
        setAttribute(name, value) { this.attributes[name] = value; }
    }));
    const get = id => {
        if (!elements.has(id)) {
            let text = '';
            let html = '';
            elements.set(id, {
                style: {}, value: '', children: [], focused: false,
                get textContent() { return text; },
                set textContent(value) { text = value; html = value; },
                get innerHTML() { return html; },
                set innerHTML(value) { html = value; text = ''; },
                appendChild(child) { this.children.push(child); },
                focus() { this.focused = true; }
            });
        }
        return elements.get(id);
    };
    const context = vm.createContext({
        document: { getElementById: get, querySelectorAll: () => controls, querySelector: () => ({ id: context.screen }), createElement: () => ({}) },
        sfx_select() {}, sfx_hope() {}, sfx_bad() {}, sfx_coin() {}, sfx_good() {},
        drawTownScene() {}, showScreen(id) { context.screen = id; },
        showEvent() {}, showGameMenu() {}, updateUI() {}, finishTravel() { context.finished = true; },
        setTrailVisible(active) { context.visible = active; },
        checkGameOver() {}, appendEvent() {},
        game: {}, store: { money: 400, food: 10, gas: 0, supplies: 0 },
        hopeScore: { h: 0, o: 0, p: 0, e: 0 }, console,
        communityTrust: 3, challengeIndex: 0, trailGrade: 'middle',
        _dilemmaChoices: {}, _dilemmaId: 0,
        MAP_ROUTE_SOUTH: [], MAP_ROUTE_NORTH: []
    });
    vm.runInContext(source.slice(0, source.indexOf('// SOUND EFFECTS')), context);
    vm.runInContext(['setSeason', 'setRoute', 'setVehicle', 'answerChallenge',
        'showHopeChallenge', 'renderChallengeAnswer', 'updateChallengeProgress', 'afterChallenge',
        'leaveStore', 'centerBuy', 'openCenter', 'switchVehicle', 'setTrailGrade',
        'startShortSession', 'pauseTrailSession', 'resumeTrailSession', 'advanceDay',
        'canShareMeals', 'spendVolunteerDay', 'showDilemma', 'changeTrust',
        'dilemmaStrandedFamily', 'dilemmaFoodBank', 'dilemmaSharedWell',
        'dilemmaCommunityGarden', 'dilemmaTrailCleanup', 'dilemmaHitchhiker',
        'eventTrustReciprocity', 'getSpirits', 'eventCommunityCleanup',
        'eventWildlife', 'eventFarmersMarket', 'eventFreeCharger',
        'eventEVMeetup', 'eventBusFriend', 'eventScenicBusRoute'].map(functionSource).join('\n'), context);
    const run = code => vm.runInContext(code, context);
    run('setSeason(2); setRoute("south")');
    return { context, get, run, controls };
}

test('Trail challenges award once for correct or incorrect answers, including revisits and duplicate continuation', () => {
    for (const correct of [true, false]) {
        const { run, context, controls, get } = trailFixture();
        run('showHopeChallenge(HOPE_CHALLENGES[0], LANDMARKS[1])');
        const chosen = correct ? 'game._currentChallenge.correct' : '(game._currentChallenge.correct + 1) % 4';
        run(`answerChallenge(${chosen}); answerChallenge(${chosen})`);
        assert.equal(Object.values(context.hopeScore).reduce((a, b) => a + b), correct ? 1 : 0);
        assert.ok(controls.every(control => control.disabled && control.attributes['aria-disabled'] === 'true' && control.tabIndex === -1));
        assert.equal(get('challenge-continue').focused, true);
        assert.match(get('trail-challenge-progress').textContent, new RegExp(`1 of 8 answered; ${correct ? 1 : 0} correct`));
        run(`showHopeChallenge(HOPE_CHALLENGES[0], LANDMARKS[1]); answerChallenge(${chosen})`);
        assert.equal(context.game.challengeAnswers.size, 1);
        assert.equal(Object.values(context.hopeScore).reduce((a, b) => a + b), correct ? 1 : 0);
        let screens = 0;
        context.showScreen = () => screens++;
        run('afterChallenge(); afterChallenge()');
        assert.equal(screens, 1);
        run('setSeason(2); setRoute("south"); showHopeChallenge(HOPE_CHALLENGES[0], LANDMARKS[1])');
        assert.equal(context.game.challengeAnswers.size, 0);
    }
});

test('vehicles and passive encounters never change literacy results', () => {
    const { run, context, get } = trailFixture();
    context.game.gas = 1;
    run('setVehicle("ev"); switchVehicle("transit"); switchVehicle("ev"); switchVehicle("transit")');
    run('eventCommunityCleanup(); eventWildlife(); eventFarmersMarket(); eventFreeCharger(); eventEVMeetup(); eventBusFriend(); eventScenicBusRoute()');
    assert.deepEqual({ ...context.hopeScore }, { h: 0, o: 0, p: 0, e: 0 });
    assert.match(get('center-msg').textContent, /Switched to/);
    run('setSeason(2); setVehicle("transit")');
    assert.equal(context.hopeScore.p, 0);
    assert.equal(context.hopeScore.e, 0);
});

test('transit can depart without gas while fuel vehicles retain a recoverable prerequisite', () => {
    const { run, context, get } = trailFixture();
    run('leaveStore()');
    assert.equal(context.screen, 'depart-screen');
    run('setVehicle("van")');
    assert.equal(context.screen, 'depart-screen');
    assert.match(get('vehicle-msg').textContent, /Return to packing/);
    run('setVehicle("transit")');
    assert.equal(context.screen, 'town-screen');
    assert.equal(context.game.gas, 0);
});

test('center transactions keep their confirmation and do not spend money on an unaffordable purchase', () => {
    const { run, context, get } = trailFixture();
    get('center-title').textContent = 'Community Center';
    run('centerBuy("food")');
    assert.equal(context.game.food, 15);
    assert.equal(context.game.money, 390);
    assert.equal(get('center-msg').textContent, 'Got 5 meals.');
    context.game.money = 0;
    run('centerBuy("food")');
    assert.equal(context.game.food, 15);
    assert.equal(get('center-msg').textContent, "Can't afford that!");
});

test('short Trail sessions finish after two questions on both routes and retain answers when continuing', () => {
    for (const route of ['south', 'north']) {
        const { run, context, get } = trailFixture();
        run(`startShortSession("${route}")`);
        assert.equal(context.screen, 'hope-challenge-screen');
        run('answerChallenge(game._currentChallenge.correct); afterChallenge()');
        assert.equal(context.game.challengeAnswers.size, 1);
        assert.equal(context.screen, 'hope-challenge-screen');
        run('answerChallenge((game._currentChallenge.correct + 1) % 4); afterChallenge(); afterChallenge()');
        assert.equal(context.screen, 'checkpoint-screen');
        assert.equal(context.game.challengeAnswers.size, 2);
        assert.equal(context.game.miles, 0);
        assert.equal(context.game.gameOver, false);
        assert.equal(get('trail-pause').disabled, true);
        run('resumeTrailSession()');
        assert.equal(context.screen, 'game-screen');
        assert.equal(context.game.shortSession, false);
        assert.equal(context.game.challengeAnswers.size, 2);
        assert.equal(context.game.food, 40);
        assert.equal(Object.values(context.hopeScore).reduce((a, b) => a + b), 1);
        run('pauseTrailSession(); resumeTrailSession()');
        assert.equal(context.screen, 'game-screen');
        assert.equal(context.visible, true);
        assert.equal(context.game.challengeAnswers.size, 2);
    }
});

test('Trail grade scaffolds change without resetting the shared session or its answer keys', () => {
    const { run, context, get } = trailFixture();
    run('startShortSession("north"); answerChallenge(game._currentChallenge.correct)');
    const challenge = context.game._currentChallenge;
    for (const grade of ['elementary', 'middle', 'high']) {
        run(`setTrailGrade("${grade}")`);
        assert.equal(context.game._currentChallenge, challenge);
        assert.equal(context.game.challengeAnswers.size, 1);
        assert.equal(get('trail-reading-support').open, grade === 'elementary');
        assert.match(get('trail-grade-prompt').textContent, grade === 'high' ? /alternative/ : grade === 'middle' ? /Cite a phrase/ : /partner/);
    }
});

test('Trail dilemmas protect travel reserves, allow declining, and charge visible volunteer costs once', () => {
    const { run, context } = trailFixture();
    const choose = index => Object.values(context._dilemmaChoices)[index]();
    context.game.food = 8;
    run('dilemmaStrandedFamily()');
    choose(0);
    assert.equal(context.game.food, 8);
    assert.equal(context.communityTrust, 3);
    for (const [dilemma, decline] of [['dilemmaStrandedFamily', 1], ['dilemmaFoodBank', 2]]) {
        run(`${dilemma}()`);
        choose(decline);
        assert.equal(context.communityTrust, 3);
    }
    context.game.food = 20;
    const day = context.game.day;
    run('dilemmaTrailCleanup()');
    const action = Object.values(context._dilemmaChoices)[0];
    action(); action();
    assert.equal(context.game.day, day + 1);
    assert.equal(context.game.food, 16);
    assert.equal(context.communityTrust, 5);
    run('dilemmaCommunityGarden()');
    choose(0);
    assert.equal(context.game.day, day + 2);
    assert.equal(context.game.food, 20);
    assert.deepEqual({ ...context.hopeScore }, { h: 0, o: 0, p: 0, e: 0 });
});

test('counseling and community access do not grade emotions or guarantee a status change', () => {
    const { run, context, get } = trailFixture();
    context.game.party[0].status = 'tired';
    const money = context.game.money;
    run('centerBuy("counsel")');
    assert.equal(context.game.party[0].status, 'tired');
    assert.equal(context.game.money, money);
    assert.equal(get('center-msg').textContent, 'Alex talked with a counselor.');
    assert.equal(run('getSpirits()'), 'Rest needed');
    Object.assign(context.hopeScore, { h: 10, o: 10, p: 10, e: 10 });
    assert.equal(run('getSpirits()'), 'Rest needed');
    context.communityTrust = 0;
    const meals = context.game.food;
    run('eventTrustReciprocity()');
    assert.equal(context.game.food, meals + 3);
    assert.equal(context.game.party[0].status, 'tired');
});

test('disabled legacy Trail choices cannot be activated with the keyboard', () => {
    let clicked = false;
    const control = { click() { clicked = true; }, getAttribute: () => 'true' };
    const handler = vm.runInNewContext(`(${handlerSource})`, {
        document: { querySelector: () => ({ contains: () => true }) }
    });
    handler({
        key: 'Enter', target: { closest: selector => selector === '.menu-option' ? control : null },
        preventDefault() {}
    });
    assert.equal(clicked, false);
});

test('Trail suspends travel when hidden and resumes without discarding the journey', () => {
    const start = source.indexOf('function setTrailVisible(');
    const paused = [];
    let resumed = 0;
    const context = {
        travelAnim: 9, travelPauseStarted: null, game: {},
        travelResume() { resumed++; context.travelPauseStarted = null; },
        cancelAnimationFrame: id => paused.push(id),
        performance: { now: () => 100 }, audioCtx: null
    };
    vm.createContext(context);
    vm.runInContext(source.slice(start, source.indexOf('\n}', start) + 2), context);
    vm.runInContext('setTrailVisible(false); setTrailVisible(false); setTrailVisible(true)', context);
    assert.deepEqual(paused, [9]);
    assert.equal(resumed, 1);
    context.game.sessionPaused = true;
    context.travelPauseStarted = 100;
    vm.runInContext('setTrailVisible(true)', context);
    assert.equal(resumed, 1, 'Returning to an internally paused checkpoint must not restart travel');
});

test('muted or hidden Trail effects never create or resume audio', () => {
    let audioCalls = 0;
    const context = {
        soundOn: true, trailVisible: false,
        ensureAudio() { audioCalls++; throw new Error('Hidden effects must not reach audio'); }
    };
    vm.createContext(context);
    vm.runInContext(functionSource('playTone'), context);
    vm.runInContext('playTone(440, 0.1); trailVisible = true; soundOn = false; playTone(440, 0.1)', context);
    assert.equal(audioCalls, 0);
});
