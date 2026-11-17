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
        const control = { textContent: key === ' ' ? 'Press SPACE BAR to explore' : 'Press ENTER to continue', click: () => clicks++ };
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
    const control = { textContent: 'Travel the Hope Trail', click: () => clicks++ };
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

test('Trail suspends travel when hidden and resumes without discarding the journey', () => {
    const start = source.indexOf('function setTrailVisible(');
    const paused = [];
    let resumed = 0;
    const context = {
        travelAnim: 9, travelPauseStarted: null,
        travelResume() { resumed++; context.travelPauseStarted = null; },
        cancelAnimationFrame: id => paused.push(id),
        performance: { now: () => 100 }, audioCtx: null
    };
    vm.createContext(context);
    vm.runInContext(source.slice(start, source.indexOf('\n}', start) + 2), context);
    vm.runInContext('setTrailVisible(false); setTrailVisible(false); setTrailVisible(true)', context);
    assert.deepEqual(paused, [9]);
    assert.equal(resumed, 1);
});
