---
name: hope-game-implementation
description: Safely implement approved HOPE Framework game improvements in its vanilla HTML/CSS/JavaScript codebase, update Node tests, verify UX/accessibility regressions, and prepare staged handoff. Use only when the user explicitly requests code changes or implementation.
---

# HOPE Game Implementation & Release Safety

## Authorization check
Confirm the task is an **implement/fix/build** request, not an audit alone. If approval-bound instructional material would change, implement only the approved subset; prepare a separate exact-wording/answer-key diff for researcher review. No pushing, committing, publishing, staging deployment, production deployment or cloud-rule edits unless separately and explicitly instructed.

## Repo-aware implementation workflow
1. `git status --short` and inspect existing uncommitted changes before touching anything. Preserve user modifications and avoid unrelated reformatting.
2. Inspect `index.html`, `js/app.js`, `css/style.css`, `hope-trail/`, test files and relevant docs for the smallest viable change. The repository historically uses plain HTML/CSS/JS with **no frontend bundler or root package.json**; re-verify before introducing tools.
3. Define observable **before/after behavior** and failure tests first when feasible. Prefer adding focused cases to `tests/app.test.cjs` or `tests/trail.test.cjs`, matching existing conventions (`node:test`, `node:assert/strict`, `vm`). For UI behavior, use a browser if available; do not misrepresent a mock as a real browser test.
4. Implement narrowly. Preserve existing marker labels, story strings, narration transcript matching, answer mappings, worksheet/export behavior, game state and history/grade navigation. Maintain mobile, keyboard, focus, touch, native controls and prefers-reduced-motion compatibility.
5. Test first the directly affected case, then all available relevant tests. At the root, check which commands are valid; historically these work from repository root:
   ```bash
   node --test
   node --check js/app.js
   node --check js/resources.js
   node --check hope-trail/game.js
   git diff --check
   ```
   Run `node --check` for **any additional modified JavaScript file**. Do not run optional Firebase emulator tests or installs unless relevant and safe; those may require Java/dependencies.
6. Inspect the changed interaction in a local browser/preview when available: first load, failure, retry, finish, revisit, reset, grade change, 390px viewport, 1280px viewport, Tab/Enter/Space, reduced motion and focus. For Trail, verify the iframe is entered/exited without stealing native text-input keystrokes.
7. Review the diff and final `git status --short`. Summarize file changes, measurable acceptance checks, tests run/results, coverage gaps and **author approval holds**. If tests fail, do not claim completion; either fix or report why not.

## Protected surfaces
- **Content:** curriculum, labels and canon passages/answer keys require author approval when meaning changes.
- **Privacy:** no new student storage, cloud metrics or outbound requests without privacy owner authorization. Check `PRIVACY_REVIEW.md` first.
- **Narration:** transcript/recording mappings in `js/narration-library.js` and `audio/narration/` are content-sensitive. Changing read-aloud text may break corresponding recorded audio; assess before changing.
- **Release:** no Firebase deployment, GitHub Pages publication, push, commit, or deleting data without a new explicit release action. Colleen's remote staging should be treated as separate from production; verify URLs/config before any authorized deployment.

## Report template
**Request and approved scope** | **Files edited** | **Player-facing behavior before → after** | **Test commands and results** | **Browser checks actually performed** | **Remaining issues / content approval** | **Deployment status: not performed**.
