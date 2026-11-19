# Phased game redesign

## Scope and safeguards

Requested on 2026-11-19 following the five-game audit. Implement the technical
and content-preserving portions first. The user subsequently reported
"All are approved by Colleen," authorizing the documented game redesign.
This records user-reported approval, not a separate signed author review.

The approved game copy and feedback change; existing marker mappings and
answer keys, recorded transcripts, and framework naming remain unchanged. No paid services,
production dependencies, accounts, telemetry, cloud changes, or new persistent
student storage are introduced. Optional evidence notes exist only in page
memory and rendered controls; they are neither graded nor exported.

This is not a learning-efficacy claim. Technical success and game completion
do not establish independent understanding or emotional outcomes.

## Phase 1 - Reward integrity and accessible recovery

Implemented:

- Trail records one first answer per challenge per journey, including
  incorrect answers and revisits. Only a correct first answer adds one
  literacy match. Answer options are native disabled buttons.
  Continuation is guarded against repeat activation.
- Vehicle bonuses were initially bounded, then removed in the approved
  construct-separation phase. Switching changes travel resources, not literacy.
- Quest focuses the new stage and completion heading. Walk focuses revealed
  choices, then feedback and Continue, without moving focus back after a learner
  has moved elsewhere. Completion has a focusable heading.
- Walk, Trail answer feedback, packing, and center messages have status
  semantics. Trail center messages survive menu refresh.

Acceptance: pointer/Enter/Space cannot repeat an award; normal first-answer
feedback remains intact; keyboard users always have a visible next destination.
Actual screen-reader evaluation remains required.

## Phase 2 - Readability, control, and honest rules

Implemented:

- Game effects are silent until enabled. Detective, Quest, and Walk share
  synchronized controls; Trail has a control available outside its main menu.
  Muting suspends active audio. Unsupported audio reports the problem and
  leaves gameplay usable.
- Trail uses readable body typography, minimum 44px menu controls, associated
  input labels, responsive status panels, and a content-sized iframe.
  Same-origin/source-checked resize messages remove the fixed inner scroll
  viewport without transferring story text or student input.
- Transit no longer requires buying gas. Fuel-based initial vehicles still
  require fuel and provide a return-to-packing route that preserves purchases.
- Starting-month instructions accurately describe randomized weather rather
  than promising an unimplemented seasonal simulation.
- Main games expose progress counts and confirmed active-session restarts.
  Detective identifies its two cases and labels the next cycle as replay.
- Trail has an explicit pause/return control and explains its shared-grade
  journey and refresh behavior, plus a confirmed active-journey restart.
  No save/checkpoint storage is added.

Acceptance: no horizontal overflow in representative narrow/wide layouts;
Trail prose is at least 16px at default zoom, controls are at least 44px high,
and the embedding page accommodates the active content height.

## Phase 3 - Content-preserving learning supports

Implemented:

- Marker Match offers optional, unscored evidence notes. Notes do not unlock
  answers, change keys, or become a completion requirement.
- Completion review reuses each exact excerpt and existing explanation
  alongside any note. All learner text is rendered as text, not HTML.
- Notes clear on restart/grade reinitialization/refresh.
- Detective explains its existing keyboard/tap select-and-place interaction.
- Walk sparks no longer advertise their answer through marker-specific color.
- Trail reports story questions answered and first-answer correctness.
  The approved phase below replaces the original mixed journey ratings.

Acceptance: every grade can still finish with no notes; retries and Continue
remain intact; existing curriculum data and answer keys match the baseline.

## Phase 4 - Author-approved instructional redesign

Implemented following the reported approval:

1. Quest analyzes fictional characters rather than prescribing learners'
   feelings. It removes the unsupported numerical research assertions,
   unsafe window-exit distractor, marker hierarchy, and mandatory emotional
   sequence. Completion describes practice, not mastery.
2. Detective provides 48 clue-specific rationales after correct and incorrect
   placements. Ambiguous outcome/emotion/planning clues explicitly discuss
   contextual inference and plausible alternative readings; original keys
   remain fixed rather than silently accepting a new scored interpretation.
3. Match adds one unfamiliar example per grade. Native radio groups require a
   marker, quotation, and reason; feedback permits revision and distinguishes
   revised success. This optional practice does not gate the original game,
   award mastery, store answers, or grade free text.
4. Walk discovery reveals both existing problem and response text. Every
   scene retains its original landscape: no spark clears pollution, grows
   trees, reveals restored scenery, or heals ecosystems. The compost cue now
   explicitly describes planning; the original Plans key is preserved.
5. Trail literacy results count only correct first story answers, once each.
   Vehicles, passive encounters, donations, and trust never add literacy
   matches. Endings report travel and practice separately, with no hope rank.
   Resource needs and travel fatigue replace scored emotions. Optional free
   counselor conversations promise no emotional or game-stat outcome.
6. Trail donations preserve one next-turn food reserve; declining has no trust
   penalty. Essential shelter help is unconditional, low-trust price markups
   are removed, and the hitchhiking scenario is now a public staffed-center
   conversation. The old water/meal exploit becomes an explicit pantry
   allocation/purchase choice. Volunteering costs one actual calendar day and
   one meal per party member, disclosed before choosing; duplicate dilemma
   activation is guarded.
7. Trail receives the selected grade through validated same-origin messages
   without resetting its shared journey. Elementary support opens by default,
   Middle prompts quotation/comparison, and High prompts alternative readings
   and uncertainty. Narratives and keys remain shared, not independently
   validated grade-level curricula.
8. Both routes offer a two-question short session without packing/travel
   grinding. A checkpoint can continue into a supplied full journey from its
   start, preserving prior answers. Active sessions can pause/resume in page
   memory, including travel animation; refresh still clears progress.
9. All five games identify their examples as fictional/illustrative. This is
   disclosure, not independent verification of named projects or statistics.

Framework naming and recorded Guided/sample-story transcripts are untouched.
Technical acceptance is separate from the learner evaluation below.

## Audit recommendation traceability

| Audit rank | Status | Delivered / remaining |
|---|---|---|
| 1 - Educational integrity | Implemented | Approved game framing/cues; original marker keys retained |
| 2 - Repeat scoring | Implemented | Once per challenge; no vehicle/passive literacy awards |
| 3 - Focus/announcements | Implemented | Browser/Node checks; real screen-reader review remains |
| 4 - Separate constructs | Implemented | Literacy, travel, fatigue, and community resources separated |
| 5 - Evidence/transfer | Implemented; evaluation pending | Three novel examples require evidence and reason; no mastery claim |
| 6 - Detective feedback | Implemented | 48 cue-specific, ambiguity-aware rationales |
| 7 - Walk consequences | Implemented | Discovery reveals evidence without changing scenery |
| 8 - Readability/inclusion | Implemented; specialist QA pending | Readability, targets, sound, embedding, grade scaffolds |
| 9 - Honest choices | Implemented | Food reserves, disclosed costs, unconditional help, safe conversation |
| 10 - Sessions/replay | Implemented | Two-question sessions on both routes; in-memory pause/checkpoint/resume |

## Phase 5 - Evaluation and release

Still required: a 12-15 minute non-identifying classroom
pilot: locate a game; try correct/incorrect answers; explain the feedback;
use keyboard/narrow layout; leave/return; explain an approved unseen
Plans-versus-Agency example. Do not request personal climate emotions.

Observe evidence-backed explanation, ambiguity, recovery, fairness, and
navigation rather than speed, positivity, or completion alone. Start with a
small Match observation; technical checks do not establish learning benefits.

See [validation evidence](VALIDATION_REPORT.md#phased-game-improvements).
Commit, publication, and deployment require separate explicit authorization.
