# HOPE game quality rubric

Rate each *tested* dimension from **0 (broken/absent)** to **4 (excellent)**. Use **N/A** where evidence is lacking, not zero. Each dimension has a suggested importance weight. Do not present weighted totals as scientific validity or measured learning.

| Dimension | Weight | What a 4 looks like | Red flags |
|---|---:|---|---|
| HOPE-marker fidelity | 20% | Accurate evidence-to-marker reasoning; author-reviewed keys and nuanced interpretations | Wrong/misleading labels, unsupported certainty, keyword-only correctness |
| Learning & transfer | 20% | Scaffolded recognition then novel application, explanations after mistakes, success tied to reasoning | Answer memorization, pure guessing, feedback without rationale |
| Meaningful agency / game theory | 15% | Choices have understandable outcomes, fair options, learner sees consequences | One obvious path, reward for spam/guessing, false choices |
| Rules / feedback / recovery | 15% | Clear goal and controls, immediate nonjudgmental feedback, easy retry/restart and progress | Stuck states, duplicate advancement, opaque feedback |
| Grade fit / cognitive load | 10% | Reading level, challenge complexity and scaffolding fit each supported grade | Dense text for younger learners, shallow tasks for older learners |
| Accessibility / inclusion | 10% | Keyboard, focus, touch, screen-reader semantics, optional narration, reduced motion | Timer dependency, mouse-only action, inaccessible controls |
| Replayability / narrative coherence | 5% | Purposeful replay or variation that adds learning | Grind, rewards detached from meaning |
| Technical robustness / privacy | 5% | Reliable state across navigation, minimal data, no unauthorized collection | State corruption, unrequested tracking, network leakage |

## Severity rules
- **Critical:** misleading educational material published as authoritative, student data/privacy exposure, or major learning path impossible.
- **High:** repeated game-blocking bug, wrong answer feedback that teaches incorrect interpretation, severe accessibility barrier.
- **Medium:** confusing instructions, unreliable progress, easily exploited reward, missing differentiation or recovery.
- **Low:** polish, minor friction, optional delight.

## Evidence and classification
For each observation record `Game`, `Grade`, `Reproduction`, `Evidence type`, `Expected`, `Actual`, `Learning impact`, `Proposed fix`, `Approval`, `Confidence`. Separate the severity of the observed problem from the magnitude of the proposed redesign.

## Suggested player-flow script
1. From grade selection, locate a game without a walkthrough.
2. Explain what success requires in one sentence; note confusion.
3. Complete one correct and one incorrect attempt; describe feedback and whether it teaches WHY.
4. Intentionally choose a different plausible marker; see whether ambiguity is respectfully addressed.
5. Use keyboard alone; repeat the test on a narrow viewport.
6. Leave the game, return, retry, finish, and restart.
7. Ask the player to distinguish one new example of **Plans** from **Agency** (transfer). Do not record identifiable student data.
