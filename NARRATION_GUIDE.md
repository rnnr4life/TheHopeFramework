# Zero-budget narration

## Status and scope

**Available across all built-in English stories.** Browser controls,
licensed recorded playback and local production tooling are implemented.
The previously denied edit was resumed only after explicit user authorization.
Publication status is tracked by repository history and GitHub Pages deployments.

| Phase | Result |
|---|---|
| Simplified story player | One Read aloud/Pause/Resume button and Stop; optional speed/voice choices in Settings |
| Free-license gate | Apache-licensed Kokoro v1.0 / stock `af_heart`; evidence below |
| Recorded playback | Stable story IDs, exact transcript/language matching, native audio playback and explicit fallback |
| Recommended voice | Automatically uses the matching story recording; device voices remain an explicit Settings choice |
| App-wide expansion | User requested expansion to every built-in story; all remain labeled previews |
| Technical regression/documentation | Full-library transcript/audio checks, browser checks and reproducible workflow below |

Seven unique recordings cover all nine grade-specific story choices and the
Guided story. The shared Riverside Creek transcript uses the same recording
across grades and Guided. This adds one consistent **Kokoro Heart** narrator,
not the entire collection of Kokoro voices; device voices still come from the
browser and operating system.
Guided teaching explanations are now text-only, advanced manually with Start
exploring / Next marker. Translations and entered story text use browser speech.
No recording is certified as listening-approved.

| Recording | Available in | Duration |
|---|---|---|
| The Beach Cleanup | Elementary | 69.900 s |
| The Butterfly Garden | Elementary | 64.775 s |
| Riverside Creek | All three grades and Guided | 92.625 s |
| The Empty Lot | Middle | 78.375 s |
| The Pollinator Project | Middle | 91.275 s |
| The Factory Town | High | 122.225 s |
| The Carbon Audit | High | 125.750 s |

### Read a story

1. Choose any built-in story at any grade. In the Guided example, select
   **Read Aloud** to reveal the optional story player.
2. Press **Read aloud**. The matching story narrator is chosen automatically.
   In Guided, this button is labeled **Play story**.
   The same button changes to **Pause**, then **Resume**; **Stop** ends playback.
3. Optionally open **Settings** for speed, one Voice picker, or **Read from
   beginning**. No separate narration-source choice is needed.

**Recommended** uses the story recording when available, otherwise a compatible
device voice (preferring local). **Device voice - automatic** and named device
voices explicitly bypass the recording; **Recommended** restores automatic
narration. Explicit device choices and speed are saved locally. Existing saved
voice/rate values are retained, but old preferences do not disable the new
recommended narrator until a device choice is explicitly made in this UI.

Recorded audio resumes at its playback position. Device speech resumes from the
start of the current paragraph; Settings explains that limitation. Preview
status stays visible in the short player status, with synthetic-voice attribution
and pending listening review disclosed in Settings.

Edits, translations or a changed story cannot reuse mismatched recorded audio.
Missing or rejected audio shows an error; learners explicitly choose a device
voice in Settings rather than being silently switched to a potentially
network-backed voice.

The browser player works for story text in Guided and the Text Analyzer.
Guided starts in **Read Myself**, which hides the audio player and stops playback.
Selecting **Read Aloud** reveals the existing player without autoplay; **Play
story** starts narration. Switching back to Read Myself stops it. Start Over
restores Read Myself. The Text Analyzer's controls are unchanged.

All eight existing underlined evidence fragments are interactive native buttons.
Click, tap, Enter or Space shows the corresponding grade-specific explanation.
All four markers can be explored in any order without starting/stopping narration,
skipping ordered steps or awarding completion. Existing story wording and
explanations are unchanged, so exact-transcript recordings remain eligible.
On narrow layouts, passage activation scrolls the explanation into view.

**Explore HOPE markers** is a silent, learner-paced teaching sequence, not a
second audio player. It has no spoken explanations, timers or automatic
progression. Next marker reveals an explanation without changing story playback.
Translations cannot preserve English passage mappings: their underlines are
removed and a notice directs learners to ordered English explanations or to
restore Original (English). Restoring English restores the interactive passages.

No paid service, API key, free trial, account, voice cloning or student-text
upload is part of this implementation. Existing translation and browser-network
voices retain their separately disclosed provider boundaries. Browser voice
availability is not a license to extract and redistribute an installed voice.

## License gate (checked 2026-11-18)

The selected local-production candidate is **Kokoro v1.0, stock `af_heart`**,
using the `kokoro-js` library and the ONNX-community conversion.

| Component | Evidence and decision |
|---|---|
| Engine/library | [Official kokoro.js instructions](https://github.com/hexgrad/kokoro/tree/main/kokoro.js); [Apache-2.0 license](https://github.com/hexgrad/kokoro/blob/main/LICENSE). Local CPU inference; no subscription required |
| Original weights/stock voice | [Author model card](https://huggingface.co/hexgrad/Kokoro-82M), Apache-2.0 metadata and explicit production-use statement; [stock voice list](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md) identifies `af_heart`. No separate restrictive license for that stock voice is stated there |
| ONNX weights | [Conversion model card](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX), Apache-2.0 metadata and upstream attribution |
| Training attribution | Author card identifies permissive/public-domain/synthetic training sources and credits Koniwa (CC BY 3.0) and SIWIS (CC BY 4.0); preserve that provenance, do not claim independent clearance of every training item |
| Generated narration | No separate output fee, noncommercial-only or research-only output restriction is stated in the reviewed cards. Use approved app text only; generation does not confer ownership of the underlying story or a right to impersonate anyone |

This is a source-backed implementation decision, not a legal clearance opinion.
Do not silently substitute another model, hosted endpoint or voice.
Record exact model revision and checksums with generated assets.

Piper was considered but not selected: its [voice documentation](https://github.com/OHF-Voice/piper1-gpl/blob/main/docs/VOICES.md)
warns that individual model cards have different restrictions. Lessac's card
links a separate dataset license; a public-domain dataset statement for another
voice alone does not establish all model/output permissions. Do not infer model
rights from an engine license or from a repository-wide label.

Azure/other hosted neural services and free tiers are excluded from this
zero-budget implementation. No payment setup is needed.

## Playback and privacy

- Local browser voices are preferred automatically when language-compatible.
  Explicit compatible voice choices are retained when voices load later.
- Network voices are identified. `localService` describes the browser's
  reported service location, not a comprehensive provider/privacy guarantee.
- Voice/rate and explicit device-voice preferences are stored locally under
  `hope-narration` (`rate`, `voiceURI`, `preferBrowser`).
- Text-only reading always works without audio or a supported voice.
- No word highlighting is promised without timing data.
- The frontend must never import the local production tool or model.

## Local production workflow

The private, isolated [tool package](tools/narration/package.json) does not add
dependencies to the student-facing app. From the repository root in PowerShell:

```powershell
npm ci --prefix tools\narration
npm run generate --prefix tools\narration
node --test
```

The first run downloads about 93 MB of model weights plus tokenizer, voice and
license evidence. Internet access is used only for dependency/model downloads.
After downloads, the generator disables JavaScript network requests before
loading the model or reading the built-in transcript. Phonemization and inference
run locally on CPU; no story text is sent to a speech provider.

The generator is limited to built-in stories, not student-entered writing.
It reads the exact app transcripts, uses sentence splitting with explicit stream
closure, rejects oversized model inputs, adds gentle pauses and writes normalized
mono 24 kHz / 16-bit PCM WAV. It verifies complete sentence coverage before
installing each asset and updates the manifest after the whole batch succeeds.
Shared IDs must have identical transcripts; missing or conflicting IDs fail
explicitly rather than producing missing or incorrect recordings.

`npm run generate --prefix tools\narration` regenerates all built-in story assets.
`npm run pilot --prefix tools\narration` regenerates only Butterfly Garden while
retaining the other library entries. Both commands replace recordings for their
selected built-in IDs with synthetic previews; do not run them over hand-curated
human recordings or listening-approved entries without preserving that work.

- Model revision: `1939ad2a8e416c0acfeecc08a694d14ef25f2231`.
- Quantized model SHA-256:
  `fbae9257e1e05ffc727e951ef9b9c98418e6d79f1c9b6b13bd59f5c9028a1478`.
- Engine: `kokoro-js@1.2.1`, pinned with transitive dependencies in the lockfile.
- Voice: bundled stock `af_heart`, checked against the pinned upstream binary.
- Synthesis speed: 0.95; learner playback speed remains independently adjustable.
- Downloads stay in ignored `tools/narration/.cache/`; do not commit model weights
  or dependency directories.

Each story's `.production.json` record, such as the
[Butterfly Garden record](audio/narration/butterfly-garden.production.json), includes
download URLs/checksums, model revision, voice, exact transcript hash, audio hash,
sentence timing and measurements. It is provenance, not word-highlighting data.
[License and model-card snapshots](audio/narration/licenses/) accompany the assets;
trailing whitespace is normalized in the ONNX card. Provenance checksums describe
the original downloads, before that formatting-only normalization.

### Original pilot measurements and listening review

- Duration: **64.775 seconds**, 3,109,244 bytes.
- Pace: approximately **137 words/minute** before learner speed adjustments.
- Peak: **0.85 full scale**, with no clipped PCM samples.
- RMS: **0.0726 full scale**; longest contiguous near-silence measured **1.515 s**.
- All 13 generated sentence transcripts reconstruct the original story exactly.

Human listening has **not** been certified. The user explicitly requested wider
story availability after the pilot; this authorized preview expansion, not
listening approval. Before promoting a recording, listen to it in full for
warmth, age-appropriate pace, pronunciation
(especially Priya, milkweed, zinnias and monarch), missing/repeated speech, abrupt
joins and comfortable classroom-speaker volume. Compare against browser speech.
Keep a warm, calm educator tone without exaggerated character voices or hype.
Only after that review should an authorized maintainer change `status` from
`preview` to `approved`. Do not infer that every recording sounds natural from
its model name, successful generation or technical measurements.

### Validation

`node --test` passes **43 tests**, without installing production dependencies.
Tests include the shared button's playback state transitions, recommended/device
choice persistence, silent independent mode, unordered passage selection,
silent manual Guided progression, paragraph cancellation,
exact story linkage, same-origin matching, audio position,
stale promises, rejected/synchronous playback errors, PCM encoding, installed
audio/transcript hashes and complete sentence coverage for every built-in story.

Browser verification on the local preview confirmed:

- Read Myself initializes silently at every grade; Read Aloud reveals the player
  without autoplay, and switching back stops audio.
- All eight passages select the existing correct explanation at every grade in
  shuffled order without advancing ordered progress or changing audio playback.
- Story transcript equality and recorded playback/pause/resume remain intact
  with interactive buttons; the Text Analyzer player remains available.
- Native Enter/Space activate passages. Layout checks at 375, 768 and 1280 pixels
  keep passages within the story panel, including with reduced motion enabled.
- Mocked translation (no provider request) removes obsolete passage mappings,
  discloses the limitation and restores all eight links when returning to English.
- Fresh reload and both narration panels initialize without application exceptions.
- All nine story-picker paths and Guided at all three grades expose the narrator,
  decode the matching recording, play, pause and stop correctly (12 paths total).
- Actual WAV decoding/playback, speed changes, pause/resume at 12 seconds,
  restart, completion and navigation cleanup.
- Enter/Space activate the same story button for play, pause and resume.
- Speed and explicit device choices survive reload; temporarily unavailable
  voices retain their saved selection rather than being discarded.
- Exploring markers neither starts narration nor changes ongoing/paused story
  playback. Completion restores keyboard focus to a visible next action.
- Deliberately blocked asset shows an error; explicit device-voice selection works.
- Editing the transcript changes Recommended to a device voice. Pasted/teacher-
  entered writing and translations cannot inherit a built-in recording.
- Controls fit both panels at a 375-pixel viewport; desktop viewport restored.

The missing-asset check intentionally produced one browser resource failure and
the expected logged audio warning. Stopping quickly during full-library checks
also cancels in-progress media downloads (`ERR_ABORTED`), without a playback error.
Targeted pilot regeneration was rerun and retained all seven library entries.
Physical touch devices, Safari/Firefox,
screen-reader speech and perceived voice quality still require device/listening
review; viewport emulation is not a real-device certification.

## Recording alternative

Authorized human recordings can use the same static-audio mapping. Obtain
explicit permission for recording, public playback, attribution and withdrawal.
Do not assume Colleen consented or synthesize her identity.

Record in a quiet room without music, use a steady comfortable level and
clear pronunciation, and retain an exact transcript. Prefer browser-compatible
mono audio; check beginning/end, clipping, long pauses and classroom-speaker
intelligibility. Review any story revision before regenerating/re-recording.
Keep story narration separate from Guided explanations.

### Add an authorized human recording

1. Keep consent/license documentation with the recording and verify that the
   narrator permits free public redistribution. Do not include private contact
   details in this public repository.
2. Save the finished WAV or browser-compatible MP3 under `audio/narration/`.
   Do not add a placeholder or external streaming URL.
3. Give the relevant built-in story a unique stable `id` if it lacks one, and add
   an entry to [the narration library](js/narration-library.js):

   ```javascript
   {
       storyId: 'the-built-in-story-id',
       language: 'en',
       text: 'First exact paragraph.\n\nSecond exact paragraph.',
       src: 'audio/narration/the-recording.wav',
       status: 'preview',
       label: 'Story narrator - authorized human recording'
   }
   ```

   Replace the example text with the full exact story. Keep its paragraph
   breaks, punctuation and wording unchanged.
4. Record the transcript/audio hashes, narrator-approved attribution, consent
   scope, source license and review result alongside the asset. Do not copy the
   Kokoro license declaration onto a human recording.
5. Test the entry in the app, complete listening review, then set `approved`.
   Remove the manifest entry and asset if authorized withdrawal requires it;
   published copies and browser caches cannot be remotely erased by this app.
