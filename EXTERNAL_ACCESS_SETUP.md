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
