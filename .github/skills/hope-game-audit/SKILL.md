---
name: hope-game-audit
description: Audit and playtest the HOPE Framework's Marker Match, Detective, Quest, Walk, and Trail games for educational gameplay quality, clarity, accessibility, progression, and bugs. Use for whole-app reviews, game comparisons, and pre-release audits.
---

# HOPE Game Audit

Use this skill for read-only reviews and as the diagnosis stage before implementing a game change. Follow the [scoring rubric](./review-rubric.md) and [game inventory guide](./game-inventory.md). Ground judgments in **current** code and working UI, not assumed behavior or old documents.

## Workflow
1. Inspect `index.html`, `js/app.js`, `hope-trail/index.html`, `hope-trail/game.js`, relevant CSS, `tests/`, and current editorial/release docs. Locate the game/grade selector, win criteria, data/correct answers, feedback branches, retry/reset, navigation and state persistence. Avoid refactoring during a review.
2. Inventory **Marker Match, HOPE Detective, HOPE Quest, HOPE Walk, HOPE Trail**; note grade support as currently implemented (do **not** presume Trail supports all three grades). Include Guided Example/Text Analyzer only when checking the instructional bridge into games or when explicitly requested.
3. Play or trace each supported game/grade: first visit, correct choice, incorrect choice, retry, repeated input, completion, replay, navigation away/back, grade change, reset and refresh. For multi-case games test progression between cases. For Trail test embedded iframe lifecycle and input focus. Test on representative narrow and wide widths and keyboard-only if a real browser is available.
4. Analyze learning objective and scoring: is the learner required to **cite evidence**, differentiate Motivation vs. Belief vs. Plans vs. Agency, and understand the reason for an answer? Identify any ambiguous case that a reasonable learner could interpret differently; record it for author review instead of silently fixing the key.
5. Check fairness and UX: discoverability, explicit rules, delayed or invisible feedback, accidental double-advance, repeated choices, unearned rewards, shallow guess-and-advance, dead ends, broken back/restart, state loss, audio dependency, reduced-motion behavior and focus/aria announcements.
6. Assign evidence confidence for each finding: **Observed in live/browser**, **reproduced by automated test**, **confirmed in source**, or **hypothesis requiring playtest**. Never use browser-tested language for source-only findings.
7. Score using the rubric; mark unsupported/not-tested dimensions as N/A rather than inventing a score. Present 3-7 prioritized fixes with effort estimates and a test plan. Differentiate **quick fixes**, **design experiments**, and **researcher/content approval**.

## Expected audit output
- One-paragraph overall verdict: what teaches well / what blocks learning.
- Matrix: game × supported grade (plus objective, primary mechanic, key friction).
- Scored rubric with confidence and notes; avoid false precision.
- Prioritized defects and improvements with evidence (`file:function` or repro steps), reason, severity (critical/high/medium/low), and effort (S/M/L).
- Suggested 10-15 minute playtest script for an educator or student volunteer; ask no unnecessary personal questions or identifiers.
- Acceptance criteria for the first change recommended.

## Non-negotiable distinction
A test that all code paths pass is **not** evidence that students learn the framework. If learning outcomes are unmeasured, say 'plausible design improvement, requires learner evaluation'.
