# HOPE prompt-pack validation

## Outcome and boundaries

### Approved instructional game redesign

The user reported Colleen's approval of the documented game proposals after
the technical phases below. The implementation and decision record is in the
[phased plan](GAME_REDESIGN_PLAN.md#phase-4---author-approved-instructional-redesign).
This supersedes the earlier game-content approval holds, not unrelated
historical editorial proposals or release authorization.

**58 Node tests pass, 0 fail.** Run: `node --test`. Syntax checks pass for
`js/app.js`, `hope-trail/game.js`, `tests/app.test.cjs`, and
`tests/trail.test.cjs`; `git diff --check` passes.

New/updated regression coverage verifies:

- All three fresh Match examples require a marker, evidence, and reason,
  permit revision, reject repeated completion, and reset without changing the
  original game completion.
- All 48 Detective placements expose their clue rationale on both branches.
- Walk discovery preserves scenery and retains the problem alongside response
  evidence; discovery is not ecological restoration.
- Trail awards only one correct-first-answer match, never a vehicle/passive
  reward; donations retain food reserves, volunteer costs match calendar/food
  effects, and repeated dilemma activation cannot repeat consequences.
- Both short routes stop after two questions without claiming route victory,
  continue with their answers retained, and support in-memory pause/resume.
- Grade scaffolds update without resetting the shared journey. Counseling,
  community aid, literacy answers, and travel fatigue remain separate.
- Parent visibility changes cannot resume internally checkpointed travel.

Fresh local headless Edge verification, with third-party requests blocked,
reloaded the app and exercised:

- **24 Match excerpts, 3 fresh transfer examples, 48 Detective clues, 12 Quest
  stages, and 22 Walk scenes**, including wrong/correct responses and completion.
  Detective used native Enter/Space selection and marker-place buttons.
  Transfer used native form controls, revision, and keyboard submission.
- All Walk scenes retained their exact sky/ground/scene DOM across discovery.
- Both Trail short sessions, keyboard answer selection, checkpoints, native
  pause/resume, grade changes, retained answers, and guarded repeated answers.
- Both routes' **17 challenge entries**, reached through controlled state,
  plus food-reserve denial, actual cleanup cost, and unconditional shelter aid.
- Native normal-motion travel pause/resume, including a simulated parent
  hide/show while checkpointed; controlled-state win/loss endings.
- Representative **1280px and 390px** layouts without document-level horizontal
  overflow. Trail text measured 16px and answer buttons at least 44px tall.
  Desktop/mobile screenshots were inspected.

The browser pass found and corrected quote truncation in Detective rationale
attributes: rationales are now assigned through the DOM dataset API, not
interpolated into HTML attributes. Successful final runs had **no uncaught
page exceptions**.

Read-only comparison against the published Git baseline confirmed all original
game marker keys, Quest choice-marker mappings, Detective clue text, Trail
correct-answer indices/options, and recorded-narration files are preserved.
Approved game prompts, explanations, ambiguity cues, and the professor's
Motivation cue change intentionally. Narration integrity also passes its
existing exact-transcript/provenance/audio tests.

Not performed: a learner/educator pilot, actual screen-reader or physical-touch
evaluation, cross-browser/audio-listening certification, comprehensive contrast
measurement, or organic 2,000-mile route-balance playthroughs. Technical passes
do not establish learning effectiveness, reading-level suitability, or emotional
benefits. Trail scaffolds differ by grade, but route narratives/keys are shared.

No new persistent student storage, analytics, network services, or production
dependencies were introduced. The temporary browser driver lived outside the
repository. **Commit, publication, and deployment were not performed.**

### Phased game improvements

Historical verification before the subsequent author-approved phase above:

Implemented on 2026-11-19 under the
[phased game plan](GAME_REDESIGN_PLAN.md). Phases 1-3 cover technical fixes and
content-preserving supports; instructional redesign and learner evaluation
remain approval-gated, not completed by these changes.

**52 Node tests pass, 0 fail**, including nine added regressions covering
one-time Trail answers/vehicle bonuses, repeat continuation, preserved center
messages, transit packing, disabled keyboard controls, hidden/muted effects,
Walk focus recovery, optional Match notes, and shared/unsupported game audio.
JavaScript syntax checks and `git diff --check` pass.

Automated local headless Edge verification (not a student study) covered:

- All three grades: 24 Match excerpts, 48 Detective clue placements, 12 Quest
  stages, and 22 Walk scenes, with incorrect/correct branches and completion.
- Optional notes safely rendered as literal text; existing explanations in
  the completion review; restart cancellation/confirmation and note reset.
- Detective keyboard selection/placement, case counts, and replay labeling.
- Quest/Walk focused continuation and completion; shared main-game audio
  controls and actual AudioContext running/suspended transitions.
- Representative 1280px/390px layouts without document-level horizontal
  overflow. Trail prose measured 16px and answer controls at least 44px high;
  its iframe resized to content rather than imposing the old inner viewport.
- Native Trail name-input typing, no-gas transit, fuel-vehicle recovery,
  repeated answers and revisits without extra awards, bounded vehicle bonuses,
  preserved purchase confirmation, normal-motion pause/resume, and new-game
  reset. Both routes' 17 challenge entries exercised alternating correct and
  incorrect answers and guarded repeat calls.
- Controlled-state Trail win/loss branches. These were not organic full-route
  playthroughs and do not establish random-event balance.
- Game curriculum data blocks compared unchanged against the pre-change Git
  baseline, normalizing Windows line endings. Recorded-narration transcript
  integrity remains covered by the existing Node suite.

No uncaught page exceptions occurred in successful browser runs. Actual
screen-reader use, physical touch devices, cross-browser/audio listening
certification, full contrast measurement, classroom evaluation, and organic
Trail route balance remain unverified.

Existing end ratings, emotional-state rewards, clue explanations, answer keys,
story wording, and Walk restoration narrative were not rewritten. See the
[specific author decisions](EDITORIAL_REVIEW.md#game-redesign-approval-queue).
No new persistent student storage, analytics, services, or production
dependencies were added. Commit/publication/deployment were not performed.

### Independent Guided reading

The read-only analysis found that story narration and marker explanations were
already independent, but underlined evidence consisted of noninteractive spans.
The existing four paragraphs and three grade-specific explanation sets are
reused without curriculum changes.

Read Myself is the silent default. Read Aloud reveals the existing player;
Play story starts it. Each of the eight existing evidence fragments now opens
its marker explanation independently of ordered progression or narration.

All **43 tests pass**, plus syntax/patch checks. Local browser verification
covered all eight fragments in shuffled order at all three grades, exact
recording transcript preservation, playback/pause/resume, stopping on Read
Myself, ordered completion/reset, native keyboard activation, and layouts at
375, 768 and 1280 pixels. Translation behavior was verified using a local stub,
without sending story text to a translation provider. These are browser/emulated
layout checks, not physical-device or screen-reader certification.

| Acceptance check | Result |
|---|---|
| Students can choose Read Myself or Read Aloud | Pass |
| Read Myself works without playing audio | Pass |
| Underlined passages can be clicked or tapped | Pass (native button/pointer activation; physical touch review remains) |
| Correct marker explanations appear on the right | Pass; below the story on narrow screens |
| All four HOPE markers remain available | Pass |
| Students can explore markers in any order | Pass |
| Elementary, Middle and High School all work | Pass |
| Mobile and keyboard access are functional | Pass in viewport and native keyboard checks |
| Existing Read Aloud still works | Pass |

### Landing page and grade navigation

Opening the app without an activity link shows the grade-selection landing
page, including for returning visitors. A saved grade is retained for explicit
activity links, but no longer bypasses grade selection on launch.

The HOPE logo returns to that app landing page. **Grade activities** returns to
the current grade's activity menu, with a grade-specific accessible label.
The upper-right grade button opens direct Elementary, Middle School and High
School choices; selecting one updates the grade and opens its activity menu
without revisiting the landing page. The dropdown supports native keyboard
activation, Escape to close and restore focus, and outside-click dismissal.

Focused regressions cover returning visitors, explicit links, invalid saved
grades, the two distinct navigation destinations and direct grade switching.
All **41 normal tests pass**, along with JavaScript syntax and patch checks.
Local browser verification covered all three grades, refreshed landing and
activity links, Back/Forward, same-page grade changes, Enter/Space/Tab/Escape,
and dropdown fit at viewport widths from 375 to 1280 pixels. The compact
navigation breakpoint is 820 pixels to keep the longer activity label readable.

### Publication authorization and rules release

On 2026-11-17 the owner explicitly approved website publication and Firebase
deny-all rules deployment. All 27 normal tests, JavaScript syntax checks and
patch checks passed immediately before publication. Firebase CLI successfully
compiled and released the root rules to `hope-framework-metrics` using
`firebase deploy --only firestore:rules --project hope-framework-metrics --non-interactive`.
No production records were queried or deleted. This release note supersedes
the historical uncommitted/undeployed status in the review below.
Editorial and icon proposals remain drafts, not integrated app changes.

Prompts 01-09 have been implemented or delivered as editorial proposals, as
their instructions require. Prompt 10 supplies icon directions and this
release-candidate review. The separate [privacy audit](PRIVACY_REVIEW.md)
records Prompt 11 and the subsequently approved client-only privacy fixes.
No commit, push, deployment, production deletion, new data schema, recording or
replacement app icon was performed. The user separately approved closing client
rules, removing cloud analytics and clarifying reset. Isolated rule-test
dependencies were added; the frontend and normal suite still need none.

The original clean, published checkpoint remains `9839a10`. All current work
is uncommitted. Earlier permission blocks were respected; after the user
requested resumption, previously unfinished implementation and checks resumed.

| Prompt | Completed output |
|---|---|
| 00 | Repository/workflow inspection and ordered implementation scope |
| 01 | Shared activity initialization and grade-aware reentry |
| 02 | Trail keyboard controls, focus styling and motion preference |
| 03 | Contextual navigation/history, safe root Back and restored marker content on reload |
| 04 | Example/answer-key audit, canonical Match feedback consistency, held prose proposals |
| 05 | Stable game feedback, explicit progression, distinct-clue completion and safe callbacks |
| 06 | Accessible wheel links and separate copy/copyright proposals |
| 07 | Guided manual progression, resilient narration, elementary next step and audio proposal |
| 08 | Source-checked educator-background draft with research-access limitations |
| 09 | Unchanged resource extraction and safe contributor workflow |
| 10 | Three unapproved icon directions at five sizes, regression evidence and release checklist |
| 11 | Read-only audit delivered; subsequent explicit approval implemented client-only metrics, deny-all client rules and scoped reset, verified with actual emulator tests |

Approval-bound requests were executed as proposals, not silently published.
Icon integration is held pending owner selection; regression checks were still
run against the currently accepted app, rather than waiting on that decision.

## Offline verification

Commands executed successfully:

```powershell
node --test
node --check js\app.js
node --check js\resources.js
node --check hope-trail\game.js
git diff --check
```

**27 normal tests pass; 3 isolated emulator cases pass.** The app test file also parses the complete application with
`vm.Script`, so syntax errors cannot hide behind isolated function tests.
There is no frontend package manifest, bundler or separate build. A private
package under `tests/firestore` supplies only optional rule-testing dependencies.

- Matching: explicit Continue, wrong-answer retry, duplicate choice/Continue
  suppression, restart and once-only completion across three grades.
- Quest: stable outcomes, no outcome/advance timeouts, wrong-answer retry,
  duplicate transition suppression and all grade-specific stages.
- Detective: all distinct clues required, repeated setup does not multiply
  handlers, keyboard selection, reset visibility and both cases in each grade.
- Guided: Resume preserves paragraph, old speech callbacks are invalidated,
  playback errors are visible, text-only reading has no automatic timeout,
  elementary completion offers a next step, story selection routes correctly.
- Resources: correct script order, grade/category filtering, HTTPS destinations
  and existing worksheet screen IDs.
- Trail: advertised/focused Enter/Space, no interception of native inputs or
  modified keys, repeated-key protection and travel pause/resume.
- Prior regressions: gallery empty states, grade change after story loading
  and escaping equivalence. Superseded Firebase bootstrap/write tests were
  replaced with local-only tracking, unload, reset and dashboard regressions.

Additional checks:

- All **50** extracted resource entries match the checkpoint's literal text
  exactly after normalizing Windows checkout line endings.
- Main HTML has **424** unique IDs; Trail HTML has **78**.
- SVG concepts parse as XML and contain three symbols and 15 previews:
  every concept at 16, 32, 48, 180 and 192 CSS pixels. They were also rendered
  and visually inspected in the browser; raster exports are not approved.
- Privacy diagram JSON, unique IDs, text dimensions and bindings were validated.
  The future aggregate-policy example was syntax-checked only. After separate
  approval, real tests of the adopted deny-all policy ran successfully via
  `npm --prefix tests\firestore test`: 3 contexts, 14 denied operations each.
  Java was initially missing; a checksum-verified portable runtime was used
  only for this session, without a system installation or persistent PATH edit.
- Application, HTML/CSS, Trail, test and directly related documentation diffs
  were reviewed. Resource removal was checked against the exact extraction,
  not assumed to be harmless.

## Browser checks actually performed

Used the verified existing project preview at `http://127.0.0.1:8765/`.
Reloaded after edits. Browser interception blocked **every external request**,
including Firebase, remote fonts and translation, before loading the app.
No live Firestore operation was used as a test.

| Path | Observed result |
|---|---|
| Grade selection -> Learn -> expand marker -> Deep Dive | Correct screen and selected grade in all three grades |
| Guided -> text-only paragraphs -> completion | Completed all grades; elementary next-step status/button visible |
| Elementary completion -> own story | Opens analyzer and grade-appropriate story picker; selected text loads |
| Learn -> Choose a Story -> choose another -> Cancel | Story remains available; picker does not erase it |
| Marker Match | Eight phrases completed per grade, advancing only on Continue |
| Quest | All four stages completed per grade; wrong answer stays on current stage; duplicate Continue does not skip |
| Detective | Both cases in every grade require all eight distinct clues; next case restores board |
| Walk | Seven elementary, eight middle, seven high scenes completed; Home/revisit retains progress and clears queued effects |
| Resources | 16 elementary, 16 middle, 18 high entries; every category filtered correctly; worksheet actions open expected screens |
| Teacher -> Guided -> Back | Returns to Teacher Hub; high-school selection preserved |
| Learn -> detail -> Back -> browser Forward | Returns to Learn, then restores detail without duplicate pushes |
| Reloaded marker detail | Reproduced an empty definition after refresh, then verified the fix: Belief reload restores its 225-character definition; Next -> reload retains Plans; Back/Forward restore Plans/Agency rather than stale content |
| Refreshed Resources -> Back | Safe welcome fallback from a fresh history root |
| Direct/reloaded Walk hash | Playable scene initializes, with a spark and narrative |
| Embedded Trail menu/name/guide/town/landmark | Focused Enter and advertised Enter/Space advance intended controls; input Space is not intercepted |
| Embedded Trail -> Home -> change grade -> reopen | Same iframe/game state retained; pending travel paused then resumed |
| Embedded Trail exit | Valid child exit message returns parent to welcome |
| Worksheet print | Button invoked print exactly once under a test stub; print CSS shows active worksheet and hides inactive welcome |

No uncaught application exceptions were captured in these successful flows.
Expected console errors during the earlier broad pass were intentionally
blocked external resources and the then-existing Firebase fallback.
The approved client-only follow-up removes Firebase loading and that fallback
error. A fresh dashboard check recorded no Firebase/Firestore requests and no
uncaught app errors.

### Approved privacy follow-up verification

The browser check used temporary in-memory storage fixtures, not the user's
actual browser work. Cancel preserved metrics and the legacy visitor ID.
Confirm removed metrics, the session key and the legacy ID; synthetic classroom
work and teacher comments remained unchanged. Unload did not recreate deleted
metrics, and the dashboard showed zero sessions.

After the cloud removal, all three grades still opened populated marker
definitions, their expected 16/16/18 resources and the first Guided paragraph.
At a 390 px viewport, the metrics screen measured 375 px client width and
375 px scroll width, with no horizontal overflow. A supplied backend tripwire
recorded zero calls; no Firebase/Firestore requests or uncaught app errors were
observed. The dashboard header and reset disclosure were screenshot-inspected.
The test returned the browser to normal Home and removed request interception.

On resumption after shutdown, all 27 normal tests, the three edited JavaScript
syntax checks and `git diff --check` passed again. The unchanged rule policy
retains its previously verified three emulator cases; those cases were not
rerun merely for documentation changes.

### Browser limitations and remaining manual checks

The integrated page reports `document.hidden === true`. Native Playwright
pointer actionability waits timed out, and native input delivery was unreliable.
Successful functional checks therefore used real DOM `.click()` handlers and
bubbling keyboard events in the loaded app, **not** a claim of full physical
mouse/touch or assistive-technology certification.

- Screen layouts were examined at 390 px and 1280 px, including a mobile
  screenshot. Learn, Resources, Detective and Guided fit their tested widths.
  The existing welcome suggestion banner clips/overflows on the narrow layout;
  its banner styling was not changed in this pass.
- Verify real keyboard Tab/Enter/Space, pointer/touch targets, iframe focus,
  native scrolling and screen-reader announcements in a foreground browser.
- Listen to actual device voices; test TTS unavailable/error behavior on mobile
  and speech pause/resume with real audio. Mocks do not establish voice quality.
- Verify printer pagination, PDF/export output and entered worksheet text in
  real print preview. The check above validated wiring/styles, not a printer.
- Repeat with normal fonts/network after privacy approval. Network-blocked
  preview does not validate production analytics, translation or all links.
- No end-to-end speed improvement is claimed; local QA is not a performance
  benchmark. The earlier helper-only benchmark remains separately documented.

## Existing findings not silently fixed

- The feedback form's empty-title branch references `feedback-title`, whereas
  the input is `collab-title`. The literal-ID inventory still identifies this
  pre-existing mismatch; feedback form repair is outside these scoped edits.
- Translation can return original text after a service failure and still show
  a success-shaped translated notice. No external translation requests were
  made, and that pre-existing behavior is not certified by this review.
- Welcome suggestions can remain stale until their scheduled reevaluation.
- Source permissions and client collection were corrected after explicit
  approval. Production rules remain unverified/undeployed, and legacy cloud
  retention/erasure still needs an approved operator decision.

## Approval queue and release checklist

- [x] Current implementation and offline tests completed.
- [x] Browser DOM integration, iframe lifecycle and representative layouts checked.
- [x] Educational answer keys, stories and existing resource content preserved.
- [x] Research, copy, narration and identity proposals prepared separately.
- [ ] Colleen approves Butterfly Garden revisions, simplified definitions,
  terminology, instructional labels and teacher-background claims.
- [ ] Owner confirms app-wide copyright scope/year and selected icon direction.
- [x] Approve and implement browser-only metrics and scoped reset in source.
- [x] Separately approve, compile and deploy deny-all rules (2026-11-17).
- [ ] Decide legacy retention/erasure and review privileged IAM separately.
- [ ] Foreground keyboard, touch, screen reader, real speech and print review.
- [ ] Review narrow welcome banner and pre-existing feedback/translation issues.
- [x] Explicit owner authorization for publication and rules deployment (2026-11-17).

This is a completed implementation/audit pass with explicit approval holds,
**not a declaration that the app is production-ready**.

## Changed deliverables

- [index.html](index.html), [app.js](js/app.js), [style.css](css/style.css):
  navigation, initialization, controls, pacing and Guided progression.
- [Trail game](hope-trail/game.js), [Trail styles](hope-trail/style.css):
  keyboard controls, motion preference and parent visibility lifecycle.
- [Resource data](js/resources.js) and [contributor guide](RESOURCE_GUIDE.md).
- [App tests](tests/app.test.cjs) and [Trail tests](tests/trail.test.cjs).
- [Client rules](firestore.rules), [isolated rule tests](tests/firestore/rules.mjs),
  test manifest/lock/config/bootstrap and dependency/log ignore entries.
- [Editorial/research/narration review](EDITORIAL_REVIEW.md),
  [icon concepts](design/hope-icon-concepts.svg), this report,
  [privacy review](PRIVACY_REVIEW.md) and its editable
  [data-flow diagram](design/hope-data-flow.excalidraw).
- [External access/setup documentation](EXTERNAL_ACCESS_SETUP.md).
