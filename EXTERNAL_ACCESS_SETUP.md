# External Access + Permission Setup (Firebase)

This app now includes deployable Firebase config in:
- `firebase.json`
- `firestore.rules`
- `firestore.indexes.json`

## 1) Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

## 2) Initialize/Select the Firebase project

```bash
firebase use --add
```

Choose project: `hope-framework-metrics`.

## 3) Deploy Firestore permissions + Hosting

```bash
firebase deploy --only firestore:rules,firestore:indexes,hosting
```

## 4) Confirm Firestore rules

The app expects public read/write for collection `visitors` only (for aggregate metrics):
- Allowed: `/visitors/{visitorId}` read/write
- Blocked: everything else

## 5) If external domain still fails

In Google Cloud Console and Firebase Console, verify:
- Firestore API is enabled.
- Any API key HTTP referrer restrictions include your deployed domain.
- If using Firebase Auth elsewhere, add your deployed domain under Authorized domains.

## Notes

- Running from `file://` is treated as local preview and Firebase sync may be unavailable.
- For external use, open via deployed `https://` URL.
- Classrooms, submissions, and teacher feedback are stored only in the current
  browser. Classroom codes do not share work across devices; Firebase currently
  syncs metrics only.
- If the Firebase SDK cannot load, learning activities remain available with
  local metrics. Failed metrics writes are logged to the browser console and
  exposed through `HopeMetrics.getLastFirebaseError()`.
- The public `visitors` rules are prototype-only: anyone can read or alter these
  metrics. Review access controls and data retention before a classroom pilot.

## Local checks

From the project folder:

```powershell
node --test tests\app.test.cjs
node --check js\app.js
node --check hope-trail\game.js
```

The regression tests use Node's built-in test runner, local storage fixtures,
controlled timers, and a mocked Firestore client. They require no packages and
do not contact Firebase. They cover gallery filtering, matching-game answer and
restart races, grade changes after loading text, text escaping, and metrics
write failures and SDK availability. Browser and live deployment checks are
separate.

The text-escaping helper was benchmarked in Chromium with 20,000 short paragraph
strings containing ampersands, angle brackets, quotes, nonbreaking spaces, and
Unicode, over nine paired rounds in the same page. Before/after medians were
17.0 ms and 9.5 ms, with identical output checksums. Output equivalence was also
checked against DOM serialization across all UTF-16 code units. This is a
helper-throughput measurement, not an end-to-end page-load improvement.
