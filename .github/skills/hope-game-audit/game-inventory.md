# Repository orientation (snapshot, not a source of truth)

As inspected November 19, 2026 at `rnnr4life/TheHopeFramework`:
- `index.html` and `js/app.js` contain the main experience.
- `hope-trail/index.html` and `hope-trail/game.js` implement a distinct embedded journey game; check actual availability by grade.
- `css/style.css`, `hope-trail/style.css` provide styles.
- `tests/app.test.cjs`, `tests/trail.test.cjs` are relevant automated checks.
- `EDITORIAL_REVIEW.md` explicitly preserves proposed narrative/definition changes pending educational-author approval.
- `VALIDATION_REPORT.md` documents prior functional coverage but **does not substitute for a fresh test run**.
- `NARRATION_GUIDE.md` documents optional story playback and transcript matching; changing story text can invalidate a recording.
- `PRIVACY_REVIEW.md` provides historical privacy risks and constraints.

## Existing game examples to locate in *current* source
| Activity | Intended core mechanic (verify) | Audit emphasis |
|---|---|---|
| Marker Match | Categorize text excerpts by HOPE marker, advance explicitly | Clue ambiguity, correctness, explanation quality, retry/Continue, eight examples per grade (historical) |
| HOPE Detective | Identify markers from clue evidence across cases | All distinct clues, meaningful deduction vs clicking, state reset between cases, two cases per grade (historical) |
| HOPE Quest | Sequence of environmental challenges/questions | Retry, learning path, four stages per grade (historical), genuine choices vs single predetermined result |
| HOPE Walk | Narrative scenes and HOPE-marker recognition | Coherence, progression, emotional safety, scene count/grade variation, navigation/revisit |
| HOPE Trail | Family journey with locations and environmental choices | Fairness of question mappings, route choices, embedded focus/keyboard, travel animation reduced motion, scenario factual claims |

Historical counts from `VALIDATION_REPORT.md` are **orientation clues**, not automatic guarantees that current content has those counts.
