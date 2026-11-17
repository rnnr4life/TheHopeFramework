import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { before, after, test } from 'node:test';
import { initializeTestEnvironment, assertFails } from '@firebase/rules-unit-testing';
import {
    doc, collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
    deleteField, query, where, writeBatch
} from 'firebase/firestore';

assert.equal(process.env.FIRESTORE_EMULATOR_HOST, '127.0.0.1:39867',
    'Run through the isolated demo emulator; production hosts are forbidden.');

let environment;
before(async () => {
    environment = await initializeTestEnvironment({
        projectId: 'demo-hope-privacy',
        firestore: {
            host: '127.0.0.1',
            port: 39867,
            rules: await readFile(new URL('../../firestore.rules', import.meta.url), 'utf8')
        }
    });
    await environment.withSecurityRulesDisabled(async context => {
        const db = context.firestore();
        await setDoc(doc(db, 'visitors', 'synthetic'), { totalSessions: 1 });
        await setDoc(doc(db, 'visitors', 'synthetic', 'private', 'x'), { value: 1 });
        await setDoc(doc(db, 'publicMetrics', 'synthetic'), { published: true });
        await setDoc(doc(db, 'private', 'synthetic'), { value: 1 });
    });
});

after(async () => {
    if (environment) await environment.cleanup();
});

for (const kind of ['unauthenticated', 'authenticated', 'client-admin-claim']) {
    test(`${kind} clients cannot read or change raw metrics or other documents`, async () => {
        const context = kind === 'unauthenticated' ? environment.unauthenticatedContext()
            : environment.authenticatedContext('synthetic-user', { admin: kind === 'client-admin-claim' });
        const db = context.firestore();
        const raw = doc(db, 'visitors', 'synthetic');
        await assertFails(getDoc(raw));
        await assertFails(getDocs(collection(db, 'visitors')));
        await assertFails(getDocs(query(collection(db, 'visitors'), where('totalSessions', '==', 1))));
        await assertFails(setDoc(doc(db, 'visitors', 'new'), { unexpected: true, totalSessions: 'invalid' }));
        await assertFails(setDoc(raw, { totalSessions: 2 }));
        await assertFails(setDoc(raw, { extra: true }, { merge: true }));
        await assertFails(updateDoc(raw, { totalSessions: 3 }));
        await assertFails(updateDoc(raw, { totalSessions: deleteField() }));
        await assertFails(deleteDoc(raw));
        await assertFails(getDoc(doc(db, 'visitors', 'synthetic', 'private', 'x')));
        await assertFails(setDoc(doc(db, 'visitors', 'synthetic', 'private', 'x'), { value: 2 }));
        await assertFails(getDoc(doc(db, 'publicMetrics', 'synthetic')));
        await assertFails(getDoc(doc(db, 'private', 'synthetic')));
        const batch = writeBatch(db);
        batch.set(raw, { totalSessions: 4 });
        batch.delete(doc(db, 'private', 'synthetic'));
        await assertFails(batch.commit());
    });
}
