# Local metrics and Firebase permissions

## Current mode

Metrics are **browser-only**. The app does not load Firebase SDKs, create a
remote visitor ID, sync metrics, or fetch cross-visitor records. Local learning,
personalization, the metrics dashboard and JSON export remain available.
The dashboard describes a browser profile, not a count of individual people.

[firestore.rules](firestore.rules) denies all client reads and writes, including
legacy visitor records. Server/Admin access is governed separately by IAM.
The owner approved publication on 2026-11-17. The deny-all client rules were
compiled and released successfully with
`firebase deploy --only firestore:rules --project hope-framework-metrics --non-interactive`.
No records were read or deleted. Publishing the static site to GitHub Pages
does not deploy Firestore rules; that separate rules deployment was intentional.

## Browser storage and reset

Classrooms, submissions and teacher feedback remain in the current browser.
Classroom codes do not authenticate users or share work between devices.
Shared profiles share storage; profiles and origins can hold separate data.

**Clear browser metrics** asks for confirmation, then removes usage metrics,
the session key and any legacy visitor ID. It resets in-memory timing so old
screen time does not leak into new counters. It leaves classroom work, saved
exports and legacy cloud records unchanged. New interactions begin fresh local
counters; the next page load starts a new session.

There is no new remote-erasure endpoint. Any legacy cloud retention, archival
or deletion requires a separately approved privileged operator workflow.
An old visitor ID is not proof of ownership. Do not put Admin credentials in
the app or reopen public access to implement deletion.

## Local preview and dependency-free checks

Use the existing project preview if it is running. Otherwise, from this folder:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. No frontend package installation or Firebase login
is needed. Browser speech/translation, fonts and external resource links still
have their separate network/provider considerations.

```powershell
node --test
node --check js\resources.js
node --check js\app.js
node --check hope-trail\game.js
git diff --check
```

The normal suite uses Node's built-in runner and no npm packages. It covers
activity initialization/history, pacing, all-grade game regressions, Guided
speech lifecycle, Trail keyboard/lifecycle, resources, local-only tracking and
confirmed browser-only reset. It does not start an emulator or contact Firebase.

## Isolated Firestore rule tests

Only this separate developer test folder needs npm dependencies. Prerequisites:
Java 21+ and Firebase CLI on PATH. The verified run used Node 26.13.0,
Firebase CLI 15.20.0 and Java 21.0.13; none is a frontend dependency.

```powershell
npm --prefix tests\firestore ci
npm --prefix tests\firestore test
```

The private [test package](tests/firestore/package.json) and lockfile pin its
dependencies. Its [emulator configuration](tests/firestore/firebase.json) binds
Firestore/hub/logging to loopback ports 39867-39869; the emulator also uses its
default websocket port 9150. Tests require the exact emulator host and use only
the `demo-hope-privacy` project, synthetic data and fake authentication.
Do not substitute a real project or production host.

The emulator starts with a closed bootstrap policy because Firebase CLI forbids
rule paths outside the test project directory. The [tests](tests/firestore/rules.mjs)
then explicitly load the actual root [rules](firestore.rules), so bootstrap
rules are not a proxy for the policy under test.

Three cases cover unauthenticated, authenticated and client-admin-claim contexts:
raw get/list/filtered queries, invalid/create/replace/merge/update, field/document
deletion, nested/private/published-summary reads and atomic batches all deny.
Privileged fixture seeding is emulator-only. Client rules do not test server IAM.

## Deployment and legacy data: separate approval required

1. Verify the approved Firebase project/account and operator permissions.
2. Deploy the deny-all rules before or with the browser-only client. Legacy
   cached clients will lose global metrics; learning already has local fallback.
3. Publish the static client only after separate commit/push/deployment approval.
4. Verify the deployed policy separately. Local emulator results do not prove
   production permissions changed.
5. Approve a retention/deletion plan for legacy cloud data. Denying access is
   not deletion, and no production records were inspected or erased here.

Do not restore the former public visitor exception. Any future remote reporting
needs a reviewed data contract, consent/access/retention decisions and tests.

## Related reviews

- [Privacy audit, approved follow-up and migration decisions](PRIVACY_REVIEW.md).
- [Validation evidence and remaining approval/manual checks](VALIDATION_REPORT.md).
- [Resource contributor guide](RESOURCE_GUIDE.md).

The text-escaping helper's earlier Chromium benchmark used 20,000 short strings
over nine paired rounds: before/after medians 17.0 ms and 9.5 ms, identical
checksums, and DOM-serialization equivalence across UTF-16 code units.
That is helper throughput, not an end-to-end page-load improvement.
