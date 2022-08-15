import { initializeApp } from "firebase/app";

export default async function useDB() {
  const firebaseConfig = {
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  };

  async function initializeDB() {
    const app = initializeApp(firebaseConfig);
    const { getDatabase, ref, set, onValue } = await import(
      "firebase/database"
    );
    const db = getDatabase(app);
    return { db, ref, set, onValue };
  }

  async function writeData(data: any, dbNode: string) {
    const { db, ref, set } = await initializeDB();
    set(ref(db, dbNode), data);
  }

  async function readData(dbNode: string) {
    const { db, ref, onValue } = await initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  return { initializeDB, writeData, readData };
}
