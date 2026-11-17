# Student data and Firestore privacy review

## Approved follow-up and rules deployment

After the read-only audit, the user explicitly selected both findings and the
recommended **client-only metrics** approach.

- Root rules now deny every client read/write; no public visitor exception.
- Firebase scripts/configuration, sync timers, unload upload and cross-visitor
  aggregation have been removed. No remote visitor identifier is created.
- The dashboard and JSON export use local counters; the misleading unique
  visitor KPI is removed. Learning and personalization remain local.
- A confirmed **Clear browser metrics** action removes local usage/session data
  and any legacy ID, resets timing, and accurately states that classroom work,
  exports and legacy cloud records are not deleted.
- **27 dependency-free tests and 3 real emulator cases pass.** The emulator
  cases load the actual repository rules and use only a guarded loopback
  `demo-hope-privacy` project with synthetic fixtures.

The original implementation/audit did not contact production data or deploy.
On 2026-11-17 the owner separately approved website publication and deployment
of the deny-all rules to `hope-framework-metrics`. Firebase CLI compiled and
released those rules successfully; no records were queried or deleted.
The deployment changes client authorization, not server/Admin IAM or retention.
Legacy retention/erasure is a separate privileged administrative decision, not
something the client can safely authorize using an old visitor ID.
See the [setup/test/deployment guide](EXTERNAL_ACCESS_SETUP.md).

The editable [data-flow diagram](design/hope-data-flow.excalidraw) reflects this
browser-only client, plus legacy records and the separately approved rules release. Neither the diagram
nor the release establishes remote deletion or restricted server/Admin access.

## Original read-only audit: historical scope and conclusion

The remainder preserves the original **pre-fix** assessment and future design
options. Its current/present-tense descriptions refer to that assessed snapshot,
not the now-modified client or rules. That initial phase made no production
query, exploit, record write, emulator run, dependency installation, rule/schema
edit or deployment. No stored user data or Firebase configuration values are
reproduced here.

The security review found no newly introduced vulnerability in this pass.
The existing prototype policy nevertheless requires an explicit deployment
decision: repository rules authorize public access to individual visitor
documents, and the dashboard downloads those documents before aggregating them.
Calling its display an aggregate does not make the underlying access aggregate-only.

**Deployment is unverified.** This report does not establish which rules are
currently deployed, the contents of any database, IAM, App Check enforcement,
API-key restrictions, production headers, provider retention or configured TTL.
The [Firebase configuration](firebase.json) points to the repository rule file;
that alone does not establish the live policy.

## Original policy findings

These were source-demonstrated existing risks, **not regressions introduced by
the prompt pack**. Both have since been addressed in source as described above;
live permissions and legacy erasure are not claimed fixed. Links in this table
refer to the published pre-fix checkpoint. Confidence is about source behavior.

| # | Severity | File | Lines | Vulnerability | Confidence |
|---|----------|------|-------|---------------|------------|
| 1 | 🟠 HIGH | [firestore.rules](https://github.com/rnnr4life/TheHopeFramework/blob/9839a10c8668c03775f18c5a740789ea0c4c2e04/firestore.rules#L5) | 5-6 | Public get/list/create/update/delete of visitor records; no ownership, field/type validation or authentication condition | 10/10 |
| 2 | 🟡 MEDIUM | [app.js](https://github.com/rnnr4life/TheHopeFramework/blob/9839a10c8668c03775f18c5a740789ea0c4c2e04/js/app.js#L157) | 157-168, 193-198 | Local metrics reset neither erases the remote visitor record nor removes its persistent ID; it is not a remote deletion/withdrawal workflow | 10/10 |

The general deny rule does not override the specific allow rule. The visitor
match is not recursive: visitor subcollections and other paths remain denied.
The allow rule permits arbitrary valid Firestore field contents and field
deletions as well as document deletion. A reader can list the collection without
guessing visitor IDs. This does not grant administrative operations or blanket
collection-group access. See [rules](firestore.rules), lines 3-12.

## Data flow and exact stored classes

The editable [data-flow diagram](design/hope-data-flow.excalidraw) distinguishes
browser-local state, remote metrics, user-triggered transfers and public-client
access. It describes source behavior, not an observation of production traffic.
Open the diagram with the approved Microsoft Excalidraw instance,
<https://aka.ms/excalidraw>.

### Metrics

Historical source: [HopeMetrics at the checkpoint](https://github.com/rnnr4life/TheHopeFramework/blob/9839a10c8668c03775f18c5a740789ea0c4c2e04/js/app.js#L2), lines 2-285, especially defaults (26-32),
bounded histories (47-145), reset/identifier (157-170), sync (173-198),
collection read/aggregation (201-261), and scheduling (272-285).

| Store | Field classes | Implemented limits |
|---|---|---|
| Origin-local `hope-metrics` | `firstVisit`, `totalSessions`, `screenViews`, `screenTime`, `completions`, `markerUsage`, `ageSelections`, `featureUsage`, `monthlyUsage`, `visitedScreens`, `suggestionsFollowed`; events, errors, sessions; `lastGrade`, `lastScreen`, `lastSuggestionEval`, `cachedSuggestion` | Last 500 combined activity events; last 100 errors, messages truncated to 200 characters; last 100 sessions. No elapsed-time expiry for counters, months or preferences |
| Tab-scoped `hope-session` | `{id, start}` | Overwritten at initialization; browser session-storage lifetime |
| Origin-local `hope-visitor-id` | `v_` plus base-36 timestamp and up to six characters derived from `Math.random()` | No application expiry/rotation; not an authentication credential |
| Firestore `/visitors/{id}` | `visitorId`, `firstVisit`, `lastSync`, `totalSessions`, `screenViews`, `screenTime`, `completions`, `markerUsage`, `ageSelections`, `featureUsage`, `monthlyUsage`, `visitedScreens`, `suggestionsFollowed`, `errorCount` | No application deletion schedule or age-based pruning shown; deployment-level TTL is unverified |

Defined counter dimensions:

- Completions: `match`, `detective`, `quest`, `walk`, `trail`, `reflect`,
  `textAnalysis`. No new category was added by this implementation.
- Markers: `motivation`, `belief`, `plans`, `agency`.
- Grade selections: `elementary`, `middle`, `high`.
- Features: `readAloud`, `translate`, `voicePicker`, `sampleStory`, `export`,
  `joinClassroom`, `teacherHub`.
- Months: `YYYY-MM` buckets containing `sessions`, `screenViews`, `completions`.

Defined counters are not proof that every feature has an active tracking call.
Local events have `{type, id, ts}`; errors have `{msg, source, ts}`; sessions
have `{id, start, end, screens, duration}`. Session `screens` initializes empty.
Session IDs increment a local counter, and each page initialization counts a
session rather than using an inactivity timeout.

The sync allowlist excludes detailed events/errors/sessions, recent grade/screen
and suggestion-cache fields. Remote `errorCount` is the retained array length,
not an uncapped lifetime count. The current allowlist does not send classroom
names, author names, story text, written responses or teacher comments.
That is application behavior, **not a rule-enforced schema**.

Automatic merge sync starts after 3 seconds, repeats every 60 seconds and is
attempted on unload. Unload delivery is not guaranteed. The scheduling path has
no consent gate. A persistent pseudonym links longitudinal activity but does
not reliably identify a unique person or physical device: profiles/origins
separate storage, while shared browser profiles share it.

### Classroom, writing and teacher feedback

Source: classroom persistence, publishing, feedback and leave/delete handlers in
[app.js](js/app.js); Trail's name/progress object in [game.js](hope-trail/game.js).

| Origin-local key | Stored classes |
|---|---|
| `hope-classroom` | Classroom `name`, six-character `code`, ISO `created` |
| `hope-student-classroom` | Selected classroom-code string |
| `hope-submissions-{code}` | Array of `{id, type, title, author, content, markers, mode, date}` |
| `hope-feedback-{code}` | Submission-ID map of `{scores, comment, date}` |

These stores have no count or elapsed-time expiry. Classroom codes select local
namespaces; they do not authenticate roles or share work between devices.
Submission IDs use `Date.now()`. Deleting a classroom removes its submissions
and classroom/membership keys but leaves its feedback key. Leaving removes
membership only. Metrics reset is a separate, narrower operation.

Unpublished writing/findings and My HOPE responses live in page state.
Publishing copies writing to the local submissions store. Trail party names and
progress live in the iframe game object. None is in the metrics sync allowlist.
Shared-device cleanup must account for all of these surfaces, not just metrics.

### Other boundaries

- **Translation:** a user action sends the Guided paragraph and selected
  language to MyMemory in HTTPS GET query parameters, not the pasted activity
  story. Provider logging/retention is unverified.
- **Read aloud:** activity/Guided text is passed to the browser speech engine.
  Selected voices are not restricted to local-only voices. Whether processing
  leaves the device depends on browser/voice implementation.
- **Collaborator feedback:** the GitHub prefill URL contains entered title/body,
  page, grade and browser information. Transfer happens when the new GitHub
  page opens, before final issue submission. Issue visibility depends on
  repository settings. This is separate from local teacher feedback.
- **Assets:** Firebase SDK and Google Fonts create external requests; SDK code
  executes in the app page.
- **Outputs:** downloaded metrics JSON is local metrics even when the dashboard
  displays cloud totals. Print/download artifacts are outside remote-erasure
  control once saved or printed.
- **Trail:** parent/iframe messages coordinate visibility and exit, not cloud
  classroom sharing. Source/origin checks protect the parent exit handler.

## Dependencies and alternatives

| Feature | Public-access dependency today |
|---|---|
| Automatic visitor sync | Unauthenticated writes under the current client |
| Cross-visitor dashboard | Unauthenticated collection reads, aggregated in browser |
| Learning, games, personalization | None; operate without cloud metrics |
| Classroom/gallery/teacher feedback | Local storage only, not a remote classroom service |
| Detailed error/event/session panels and JSON export | Local metrics |

The dashboard renders local values first and keeps a local-only fallback when
cloud reads fail. Narrowing rules without changing clients would remove global
reporting and cause explicit sync failures, not justify silently faking success.
Client-supplied metrics are not authoritative proof of people, completion or
learning outcomes. Public writers can fabricate, replace or delete them.

| Proposal, requiring approval | Benefit | Cost/remaining risk |
|---|---|---|
| **Client-only (recommended default for the prototype)** | Stop remote sync/collection reads; retain local learning and personalization; deny legacy raw access | No cross-visitor reporting; shared-browser exposure still needs cleanup controls |
| **Published aggregates only** | Trusted publisher creates coarse approved summaries; browsers read summaries, never raw visitor rows | Collection needs a separately approved mechanism, or no collection; small groups need suppression |
| **Server-side collection/private records** | Validated endpoint or authenticated private documents; trusted aggregation and restricted analysts | Identity, consent, deletion, retention, validation, abuse prevention and operations become explicit responsibilities |

Direct anonymous writes to shared aggregate counters are **not** an integrity
solution. Authentication/App Check alone does not prove a claimed activity
occurred. Trusted publishers bypass client rules and need restricted server IAM.

### Migration sequence

1. Approve purpose, minimal fields, reporting audience and collection basis.
2. Build the chosen versioned replacement in isolation; test access, types,
   limits, deletion and fallback without production data.
3. Ship a client that stops legacy writes/reads and tolerates their denial.
4. Close raw public access on a fixed deadline. If exposure is unacceptable,
   close it earlier and accept temporary loss of global metrics.
5. Treat legacy records as untrusted. Separately approve validation, migration,
   deletion or archival; an old visitor ID does not prove ownership.
6. Enable new collection only after approval. Do not silently upload historical
   local activity after a future opt-in. Avoid double-counting cumulative
   snapshots as if they were incremental events.

### Decisions requiring explicit approval

- Whether any remote collection is needed; consent/default/withdrawal behavior.
- No remote ID, rotating ID or authenticated pseudonym; anonymous auth still
  creates linkable state.
- Actual periods for local history, source records, summaries, logs, backups
  and exports. Count caps are not retention periods.
- Public coarse summaries versus staff-only reporting, minimum group sizes,
  time buckets, suppression and necessity of grade breakdowns.
- Separate controls for browser reset, stopping collection and remote erasure,
  including orphaned classroom feedback.
- Student names/free text, shared-device cleanup and teacher access expectations.
- Separate disclosures for translation, speech providers and GitHub transfers.

No schema, permission, analytics or deployment change is approved by this audit.

## Future emulator tests: proposed, not run

The following is a concrete **candidate policy**, not a change to the checked-in
rules: deny every client access to raw/legacy visitor records; permit individual
gets of published summaries; deny summary listing and all client writes.
Owner approval is required before adopting either the policy or schema.

| Acceptance case | Current repository rules | Candidate |
|---|---|---|
| Unauthenticated get/list raw visitors | Allow | Deny |
| Create with extra fields/wrong types | Allow | Deny |
| Replace/merge/update another visitor | Allow | Deny |
| Delete visitor field/document | Allow | Deny |
| Authenticated client does the same | Allow | Deny |
| Nested visitor/private collection access | Deny | Deny |
| Get published summary | Deny | Allow |
| Get unpublished summary | Deny | Deny |
| List summaries, including filtered listing | Deny | Deny |
| Client creates/updates/deletes summary | Deny | Deny |
| Batch containing a forbidden write | Entire batch denied | Entire batch denied |

Additional app tests for an approved implementation must establish: no
collection before the approved consent condition, withdrawal cancels future
writes, reset scope is accurate, offline/denied access preserves learning, and
historical records are not silently backfilled.

### Emulator-only test example

This example has been **syntax-checked only**, not executed. It requires a future
isolated test setup with Firebase CLI, a Firestore emulator and
`@firebase/rules-unit-testing` / `firebase` dependencies. None was installed
here. It uses a `demo-` project, synthetic fixtures, an exact loopback-host guard,
and no application configuration. Do not point it at a real project.

```js
import assert from 'node:assert/strict';
import {
  initializeTestEnvironment, assertFails, assertSucceeds
} from '@firebase/rules-unit-testing';
import {
  doc, collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
  deleteField, query, where, writeBatch
} from 'firebase/firestore';

assert.equal(process.env.FIRESTORE_EMULATOR_HOST, '127.0.0.1:8080');
const env = await initializeTestEnvironment({
  projectId: 'demo-hope-privacy',
  firestore: {
    host: '127.0.0.1',
    port: 8080,
    rules: `
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /publicMetrics/{period} {
            allow get: if resource.data.published == true;
            allow list, write: if false;
          }
          match /{document=**} {
            allow read, write: if false;
          }
        }
      }`
  }
});

try {
  await env.withSecurityRulesDisabled(async context => {
    const db = context.firestore();
    await setDoc(doc(db, 'visitors', 'synthetic'), { totalSessions: 1 });
    await setDoc(doc(db, 'publicMetrics', 'published'),
      { published: true, sessions: 100 });
    await setDoc(doc(db, 'publicMetrics', 'draft'),
      { published: false, sessions: 100 });
  });
  for (const context of [
    env.unauthenticatedContext(),
    env.authenticatedContext('synthetic-user')
  ]) {
    const db = context.firestore();
    const raw = doc(db, 'visitors', 'synthetic');
    const summary = doc(db, 'publicMetrics', 'published');
    await assertFails(getDoc(raw));
    await assertFails(getDocs(collection(db, 'visitors')));
    await assertFails(setDoc(doc(db, 'visitors', 'new'),
      { unexpected: 'synthetic', totalSessions: 'wrong-type' }));
    await assertFails(setDoc(raw, { totalSessions: 2 }));
    await assertFails(setDoc(raw, { extra: true }, { merge: true }));
    await assertFails(updateDoc(raw, { totalSessions: 3 }));
    await assertFails(updateDoc(raw, { totalSessions: deleteField() }));
    await assertFails(deleteDoc(raw));
    await assertFails(getDoc(doc(db, 'visitors', 'synthetic', 'private', 'x')));
    await assertFails(getDoc(doc(db, 'private', 'synthetic')));
    await assertSucceeds(getDoc(summary));
    await assertFails(getDoc(doc(db, 'publicMetrics', 'draft')));
    await assertFails(getDocs(collection(db, 'publicMetrics')));
    await assertFails(getDocs(query(collection(db, 'publicMetrics'),
      where('published', '==', true))));
    await assertFails(setDoc(summary, { published: true }));
    await assertFails(updateDoc(summary, { sessions: 2 }));
    await assertFails(deleteDoc(summary));
    const batch = writeBatch(db);
    batch.set(raw, { totalSessions: 4 });
    batch.set(doc(db, 'private', 'synthetic'), { value: 'synthetic' });
    await assertFails(batch.commit());
  }
} finally {
  await env.cleanup();
}
```

In that future isolated demo configuration, a representative command is:

```powershell
firebase emulators:exec --project demo-hope-privacy --only firestore "node candidate-policy.test.mjs"
```

An emulator pass would validate the candidate's client authorization only,
not deployed rules, IAM, provider retention, backend validation or consent.
Current offline app tests make **no emulator or production-security claim**.
