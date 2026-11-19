# HOPE Framework: editorial and product review

Except for the separately approved game redesign below, these are drafts, not researcher-approved changes. No story text, scholarly
terminology, ownership claim, resource heading, or logo outside that approved
game section has been replaced on the basis of these proposals.

## Game redesign approval queue

The [phased implementation plan](GAME_REDESIGN_PLAN.md) distinguishes shipped
technical corrections from the instructional proposals below. After their
presentation, the user reported **"All are approved by Colleen."** This
authorizes this game section, not unrelated historical proposals below.
The [implementation plan](GAME_REDESIGN_PLAN.md#phase-4---author-approved-instructional-redesign)
records the concrete choices. Existing answer keys are preserved.

### Approved game wording - implementation record

The replacements in this table are now applied. The compost decision uses the
explicit planning wording, not a key change. Counseling is free and does not
change fatigue or promise emotional improvement. The former descriptions in
the table are retained as review history.

| Game / grade | Existing wording or cue | Proposed wording / decision | Rationale and required check |
|---|---|---|---|
| Quest / Elementary, first-stage incorrect feedback | "the most important thing is to FEEL something first" and the rest of that feedback | Replace the full feedback with: "For this question, look for the character's reason for wanting change. Which words reveal that reason? Other responses can also matter in this story." | Preserve the Motivation key; approve the prompt/choice/feedback set together so a valid action is not called a wrong personal response. Test all four choices. |
| Quest / Middle, first-stage prompt | "The data is real. It's YOUR town. What do you feel?" | "In this fictional story, which response is the intended cue for Motivation for Change?" | Avoid asserting verified personal reality or requiring the learner's own feelings. Approve with the existing choices and stage feedback. |
| Quest / High, first-stage correct explanation | The explanation describes an emotional response as a necessary precondition for agency | Replace the full explanation with: "This passage presents an emotional response as the intended cue for Motivation for Change. It does not mean everyone must experience the same emotion or follow a fixed sequence before acting." | Researcher must approve the interpretation and terminology. Check the stage, victory summary, and related Guided copy for consistency before release. |
| Walk / High, Motivation explanation | "Collective eco-grief and moral outrage as affective catalyst ... Without this response, agency never activates." | Replace the full explanation with: "In this scene, grief and outrage are the intended cues for Motivation for Change." | Do not imply a universal emotional prerequisite. Test this exact scene/key after approval. |
| Quest / Middle, Agency incorrect feedback | Calls Agency "the most powerful marker" | Replace the full feedback with: "This question focuses on Agency to Take Action. Look for what people are doing in the story, rather than only what they intend to do." | Remove a hierarchy without changing the Agency key. Author must review related hierarchy claims across Guided and Walk too. |
| Match / Elementary, outcome-only Agency excerpt | "By June, the garden was full of flowers and bees were buzzing everywhere." | "The students planted and cared for the garden. By June, the garden was full of flowers and bees were buzzing everywhere." | Proposal keeps Agency but makes enacted action explicit. Approve the stored rationale and any corresponding narrative/narration changes together; do not silently relabel the current excerpt. |
| Walk / Elementary, compost scene keyed Plans | Children "are building a compost bin" beside a chart of steps | Replace only "are building a compost bin" with "are preparing a step-by-step plan for a compost bin" **or** explicitly approve an alternative Agency reading | Existing text supports both enacted Agency and Plans. Author must choose the intended evidence and approve the whole scene/explanation before testing the mapping. |
| Trail / Shared, counseling feedback | A character "talked with a counselor and feels hopeful again." | Feedback proposal: "{name} talked with a counselor." Separately review the automatic `healthy` status and related spirit/reward logic | Do not imply a guaranteed therapeutic outcome. Approval of the sentence alone does not approve status/reward redesign. |

These approved game revisions are not new framework definitions. The full
H/O/P/E expansion remains a separate terminology decision; none is inferred
from the textual marker names.

### Approved decisions applied

- **Detective:** 48 cue-specific rationales preserve the six cases' original
  keys and explicitly discuss plausible alternative readings where needed.
- **Transfer:** one unfamiliar Match example per grade requires a marker,
  quotation, and reason, with revision after feedback. This is formative
  practice, not a validated mastery assessment.
- **Walk visuals:** every scene uses evidence discovery, not automatic
  restoration. Problem text remains alongside the revealed response.
- **Trail assessment:** only first-answer story matches affect literacy
  counters. Vehicle/passive/donation rewards and hope ranks are removed;
  resources, community trust, and physical travel fatigue remain separate.
- **Trail safeguarding/fairness:** public staffed-center conversation replaces
  hitchhiking; donations preserve food reserves; declining is not penalized;
  basic aid is unconditional; volunteer costs match actual day/meal effects.
- **Claims:** Quest's unsupported empirical assertions are replaced with
  fictional, qualified accounts. All games disclose illustrative examples;
  named-place Trail statistics are not presented as verified research.
  No independent fact-check or new research citation is claimed.
- **Grade adaptation/session length:** grade-specific reading scaffolds retain
  shared Trail narratives and keys. Both routes support two-question sessions
  and in-memory pause/checkpoint/resume. No persistent student storage or
  narration transcript changes are introduced.

User-reported approver: Colleen Redmond, PhD. Narration implications: recorded
Guided/sample-story text and mappings are untouched. Acceptance evidence is in
[the validation report](VALIDATION_REPORT.md#approved-instructional-game-redesign).
A non-identifying learner pilot remains necessary; no mastery or mental-health
benefit is established by implementation.

## Prompt 04: educational examples

The four markers remain Motivation, Belief that Change is Possible, Plans for
a Path Forward, and Agency to Take Action.

### Butterfly Garden

The story is in `sampleTexts.elementary` in [app.js](js/app.js). Story selection
calls `loadText`; learners choose their own tags. There is no Butterfly-specific
answer key or pre-annotation. `markerSignals` supplies keyword-based feedback.
Guided Example uses a different, creek-restoration story with explicit
highlights and grade-specific explanations.

| Short original excerpt | Current behavior | Interpretation / proposed action | Confidence / approval |
|---|---|---|---|
| "noticed something sad" | First paragraph receives `partial` for Motivation | Sadness is explicit, but the desire to change conditions is implicit. Add the proposed sentence below only after approval. | High identification; researcher approves wording |
| "Nature can bounce back when we help." | Second paragraph receives `aligned` for Belief | Evidence of another garden's recovery supports Belief. Retain. | High; no change proposed |
| "made a shopping list" | Third paragraph receives `partial` for Plans | Assigned plants and a list are concrete planning. Keyword feedback is not an authoritative answer key. | High rationale; approve any heuristic expansion |
| "they counted 47 butterflies" | Fourth paragraph receives `notAligned` for Agency | Observation of recovery does not explicitly describe planting or maintenance. Do not silently relabel it. | Ambiguous; researcher approval required |

Proposed minimal Motivation addition (NOT applied):

```diff
 "Where did they go?" asked Priya.
+"I miss the butterflies," Priya said. "I want us to help them come back."
```

Possible Agency clarification (NOT applied):

```diff
+The students planted their flowers and took turns watering the garden.
 By May, the garden was blooming.
```

### Cross-path answer consistency

All 24 Marker Match examples were checked: eight per grade, covering all four
markers. Eight existing examples received `notAligned` from the Text Analyzer's
keyword heuristic despite their stored matching answer:

| Grade / short exact excerpt | Existing key | Rationale | Action |
|---|---|---|---|
| Elementary: "the fish came back!" | Belief | Prior success is evidence that restoration is possible. | Preserve key |
| Elementary: "every Friday and plant flowers" | Plans | A recurring schedule specifies intended steps. | Preserve key |
| Elementary: "spent the whole morning picking up litter" | Agency | Completed cleanup is action. | Preserve key |
| Elementary: "the garden was full of flowers" | Agency | Existing explanation treats the result as evidence of action; textual explicitness deserves review. | Preserve existing key; editorial review |
| Middle: "We can't just sit here" | Motivation | Emotional urgency indicates desire for change. | Preserve key |
| High: "The community's frustration grew" | Motivation | Frustration is the motivating response. | Preserve key |
| High: "Student researchers published their water quality data" | Agency | Publication is an accomplished action. | Preserve key |
| High: "They proposed monthly monitoring protocols" | Plans | Proposed coordinated work describes a pathway. | Preserve key |

Technical correction: an exact full-string match to an existing matching
example now uses its stored answer, rather than contradicting it with the
keyword heuristic. No answer mappings or explanations were changed. Regression
tests exercise the existing examples in every grade. Other learner-selected
passages retain heuristic feedback and still need human interpretation.

Detective case data were inventoried: two cases of eight clues per grade.
Quest and Walk use explicit per-scenario markers. Their educational
classifications have not been independently researcher-validated in this pass.
Statistics and purported real-world case-study details in example narratives
must not be treated as verified research citations.

## Prompt 06: landing orientation and copy

Implemented: the existing four wheel regions are native SVG links with named
destinations, larger circular hit areas, keyboard focus and a restrained
hover/focus ring. They use the existing marker detail view and contextual Back.
The diagram's positions, colors and content are unchanged.

### Copyright approval hold

Existing worksheet credit: `© Dr. Colleen Redmond, 2024 — HOPE Framework`.
Proposed landing line: the same credit, pending confirmation that it applies
to the application as well as worksheets. No app-wide copyright notice or
current-year ownership claim was added. Existing author attribution remains.

### Terminology alternatives (not applied)

Keep **"Discover hope in the stories we read"** as the opening candidate.

1. **Literacy-based (academic precision):** "A literacy-based framework for
   identifying hope in stories about the environment."
2. **Story-based (plain-language orientation):** "A story-based introduction
   to four markers of hope, grounded in the HOPE literacy framework."
3. **Combined (recommended draft):** "Discover hope in the stories we read.
   The HOPE Framework is a literacy strategy for exploring environmental stories."

Colleen should approve the scholarly meaning before replacing existing copy.

### Specific introductory revisions (not applied)

| Existing context | Proposed draft |
|---|---|
| Landing: "It helps readers find four markers..." | "The HOPE Framework helps readers find four markers..." |
| Middle: "The problem is when it makes you feel like nothing can be done." (source note paraphrases this as "It becomes a problem when...") | "Environmental worries can sometimes feel overwhelming. Stories can help us explore possible responses together." |
| Middle source note: "In this app, you'll learn about four markers..." (not present verbatim in current copy) | "You will look for four markers of hope in stories, first with a guided example and then on your own." |

These are contextual alternatives, not a global replacement of "It."

### Compassionate eco-grief definitions (not applied)

- **Elementary:** "Eco-grief is sadness about harm to nature or changes to
  places and living things we care about. You can talk about those feelings
  with a trusted adult."
- **Middle:** "Eco-grief is a feeling of loss or sadness about damage to the
  environment. People experience it differently, and you do not have to work
  through those feelings alone."
- **High:** "Eco-grief describes grief connected to experienced or anticipated
  losses in species, ecosystems or meaningful places. It is not a diagnosis;
  experiences and responses differ."

These narrow the existing Teacher Hub's broader "sadness, anxiety, and sense
of loss" explanation without making treatment claims. Review with the author
for consistency across age adaptations.

## Prompt 07: elementary support and narration

Implemented: removed only "Hey there!" from the elementary greeting. After
elementary Guided Example completion, a visible status and **"Try a Story on
Your Own"** button open the existing grade-specific story picker. This is a
provisional UI label for author approval, not a reconstruction of the uncertain
"Read to try on your own?" note. Middle/high instructional prose is unchanged.

A separate Read Without Audio / Next Paragraph control works across grades.
Unavailable or failed browser speech now reports the problem and leaves
progression under learner control, rather than a six-second reading timer.
Pause, reset, navigation and rerender invalidate old speech callbacks.
Browser TTS voices and pronunciation still require device-based listening tests.

### Short elementary marker definitions (drafts, not applied)

| Marker | Proposed wording |
|---|---|
| Motivation | "A feeling that makes someone want things to change." |
| Belief | "A reason to think things can get better." |
| Plans | "Steps for making things better." |
| Agency | "Taking action to help make change happen." |

These need reconciliation with the learning cards, glossary, detail pages and
guided explanations by the researcher before any broad copy replacement.

### Unfinished opening sentence (draft alternatives)

1. "Stories can help us talk about our feelings when nature is changing."
2. "Stories can help us talk about caring for the Earth and finding hope."
3. "Stories can help us talk about problems, possibilities, and ways to help."

### Optional supplied-audio design (proposal only)

- Use recordings supplied and explicitly authorized by Colleen; no cloned or
  synthesized personal voice, assumed consent, or recordings created here.
- Start with standard MP3 (MIME `audio/mpeg`), mono, approximately 64-96 kbps;
  optionally provide an Ogg/Opus alternative only after browser testing.
- Version-control a small mapping: story ID, grade, paragraph ID, locale,
  relative audio path, transcript/version and permission attribution.
  Bind recordings to the approved text revision, not just array position.
- Load metadata only, fetch a paragraph on an explicit Play gesture and avoid
  preloading every story. At 64 kbps, one minute is about 0.48 MB; budget roughly
  2 MB per four-minute lesson before adding more recordings.
- One audio element owns play/pause/currentTime. Pause preserves position;
  Reset starts over; navigation stops it. A supplied clip and TTS must never
  play together. Use the same generation guard as Guided Example.
- Keep the story and think-aloud transcript visible. Add a visible transcript
  toggle if a recording includes additional words; never require audio.
- A missing/failed clip gives a clear notice and offers browser TTS or
  text-only Next Paragraph. Do not silently call a failed clip "played."
- Start playback directly from the user's gesture for mobile autoplay rules;
  handle the `play()` promise rejection and expose Resume explicitly.
- Review voice consent, licenses, accessibility, pronunciation, grade fit and
  delivery budget before adding assets. No prerecorded-audio subsystem or
  resource downloads were introduced in this pass.

## Prompt 08: educator background draft

**Editorial draft only.** Reuse the existing Teacher Hub, rather than adding a
duplicate page. It already contains a climate-emotion statistics banner, an
eco-grief introduction, four marker explanations, classroom rationale,
grade-specific activities, worksheets and an Original Research Paper link.

### Proposed teacher-facing structure and text

1. **Purpose.** The HOPE Framework is a literacy strategy introduced by Colleen
   Redmond for exploring hope in narratives in response to young people's
   eco-grief. Its four textual markers help structure discussion and close
   reading [1].
2. **Four markers.** Look for Motivation for Change; Belief that Change is
   Possible; Plans for a Path Forward; and Agency to Take Action [1].
   Ask students to point to textual evidence and explain their interpretation,
   rather than treating a keyword match as proof.
3. **Eco-grief and classroom context.** Environmental loss can be accompanied
   by grief [2]. Climate anxiety is a related but distinct topic: a survey of
   10,000 respondents aged 16-25 in ten countries documented climate-related
   distress and self-reported impacts on daily functioning [3]. These findings
   must not be generalized into prevalence estimates for elementary pupils.
4. **Teaching example.** Read the existing Guided Example together. Ask what
   Amara feels, what evidence supports possible change, which steps the class
   proposes, and which actions the students actually take. Accept reasoned
   alternative readings. The story is a teaching narrative, not a verified
   environmental intervention study.
5. **Age adaptations.** Elementary: brief passages, oral discussion and
   concrete examples. Middle: evidence-based explanations and comparison of
   feelings, intentions and actions. High: evaluate narrative framing and
   whether claims of change are supported by evidence. These are proposed
   teaching adaptations, not experimentally validated age prescriptions.
6. **Intended use and limits.** Use for reading, discussion and reflection,
   not diagnosis, therapy, emotional grading or a promise to reduce distress.
   Do not require students to disclose personal experiences. Offer a neutral
   story-analysis alternative and follow the school's support procedures when
   a learner asks for help.
7. **Evidence and references.** Separate the framework's pedagogical proposal
   [1] from broader climate-emotion literature [2,3]. The sources checked here
   do not establish that this app or framework improves mental-health or
   educational outcomes. That is a limitation of this evidence review, not a
   claim that no other research exists.

### Verified references and claim boundaries

**[1] Colleen Redmond (19 August 2024).** *HOPE Framework: A Literacy Strategy
for Identifying Hope in Narratives as a Response to Young People's Eco-grief.*
Climate Literacy in Education, 2(1).
[DOI](https://doi.org/10.24926/cle.v2i1.6231);
[publisher-deposited metadata and abstract](https://api.crossref.org/works/10.24926/cle.v2i1.6231).
The deposited abstract introduces a pedagogical strategy and explicitly lists
the four markers. It does not report an outcome trial. Title/subtitle, author,
journal, date and abstract were directly checked against Crossref. The
publisher page/PDF could not be retrieved during this pass; do not imply a
full-text methods appraisal.

**[2] Ashlee Cunsolo and Neville R. Ellis (online 3 April 2018).**
*Ecological grief as a mental health response to climate change-related loss.*
Nature Climate Change, 8, 275-281.
[DOI](https://doi.org/10.1038/s41558-018-0092-2);
[publisher-deposited metadata](https://api.crossref.org/works/10.1038/s41558-018-0092-2).
Supports the ecological-grief topic, not HOPE efficacy. Author names, title,
online date and pagination were directly verified. Publisher full text was
unavailable; review the full paper before approving detailed claims or quotes.

**[3] Caroline Hickman, Elizabeth Marks, Panu Pihkala, Susan Clayton,
R. Eric Lewandowski, Elouise E. Mayall, Britt Wray, Catriona Mellor and
Lise van Susteren (December 2021).** *Climate anxiety in children and young
people and their beliefs about government responses to climate change:
a global survey.* The Lancet Planetary Health, 5(12), e863-e873.
[DOI](https://doi.org/10.1016/S2542-5196(21)00278-3);
[author institutional record](https://researchportal.helsinki.fi/en/publications/climate-anxiety-in-children-and-young-people-and-their-beliefs-ab/);
[indexed primary abstract](https://europepmc.org/article/MED/34895496).
The author list and issue were checked against the institutional record and
Crossref; the primary abstract was retrieved through Europe PMC. It reports
75% finding the future frightening and **more than 45%** reporting negative
effects on daily life/functioning. This is a self-report survey with
correlational analyses, not an intervention trial or evidence of causation.
Month precision is used because the checked records do not agree on an exact
day; no day has been inferred.

### Existing claims needing author review before publication

- The existing banner's "45%" should be reviewed against the abstract's
  "more than 45%"; the displayed 56% "humanity is doomed" item still needs
  verification against the full-text table. It was not verified from the
  abstract and has not been silently changed.
- "It's happening right now in your classroom" and "eco-grief leads to
  disengagement, hopelessness, and avoidance" imply universality/causation not
  established by the sources checked here.
- "Why This Works" and assertions that learners move from helplessness to
  agency should distinguish intended educational purpose from measured
  results. Proposed heading: **"How to Use the Framework in Class."**
- Review the artificial H/O/P/E-to-marker alignment in the existing teacher
  layout with Colleen; the acronym expands to Healing Opportunities for
  Processing Eco-grief, while the markers are the four separately named
  concepts in [1].
- Approve age adaptations, terminology and safeguarding language. Once
  approved, place this material within the existing collapsible Teacher Hub,
  retaining citations, print styles and existing Back/Home actions.

## Prompt 09: resources

The 50 existing entries have been moved verbatim to
[resources.js](js/resources.js), preserving categories, order, labels,
descriptions, links and worksheet actions. Only Windows checkout line endings
were normalized for the comparison with the published checkpoint.
[The contributor guide](RESOURCE_GUIDE.md) describes fields, attribution,
review status, grade/medium organization and owner review before publishing.
No editor, authentication system, database access or new media embeds were added.

Representative read-only link checks:

- NASA Climate Kids redirects to
  <https://science.nasa.gov/kids/earth/> and returned content. Review the
  description/redirect with the author; the stored URL was not silently changed.
- <https://www.ipcc.ch/> returned IPCC content.
- <https://rootsandshoots.org/> returned Roots & Shoots content.
- The original HOPE article's publisher host failed to load; its DOI metadata
  was independently verified through Crossref as described above.

These are representative reachability checks, not a claim that every link,
streaming platform, age recommendation, attribution or reuse right is verified.

## Prompt 10: identity proposals

[The SVG concept sheet](design/hope-icon-concepts.svg) shows three vector
directions at actual 16, 32, 48, 180 and 192 CSS-pixel sizes:

1. **H + four-part ring (recommended):** retains the current H and four-marker
   color structure; omits gradients, glow and small decorative dots.
2. **Sprout + open circle:** emphasizes growth with fewer shapes, but loses
   the distinctive letter/marker relationship.
3. **H + four nodes:** retains marker colors with an open silhouette; tiny
   nodes need particular attention at favicon size.

At 16 px, prioritize a crisp H/silhouette and strokes of at least one device
pixel; do not add words. At 32/48 px, keep the same geometry rather than
introducing details. At 180/192 px, use the same vector with adequate platform
safe-area padding and an approved background.

Current navigation/landing inline SVG logos remain unchanged. No favicon or
manifest link was found in the current HTML head. No replacement icons, raster
exports or manifest were installed. Owner approval, light/dark contrast checks,
platform mask/crop checks and verified PNG exports remain prerequisites for
integrating a selected direction; the concept sheet is not legal clearance.
