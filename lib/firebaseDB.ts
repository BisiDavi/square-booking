import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default function firebaseDB() {
  function initializeDB() {
    const app = initializeApp({
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    });
    const db = getDatabase(app);
    return db;
  }

  function writeData(data: any, dbNode: string) {
    const db = initializeDB();
    return set(ref(db, dbNode), data);
  }

  function readData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  return { initializeDB, writeData, readData };
}
