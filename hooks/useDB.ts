import { initializeApp } from "firebase/app";

export default async function useDB() {
  const firebaseConfig = {
    databaseURL:process.env.NEXT_PUBLIC_FIREBASE_DB_URL
  };

  async function initializeDB() {
    const app = initializeApp(firebaseConfig);
    const db = await import("firebase/database");
    const database = db.getDatabase(app);
    return database;
  }
  return { initializeDB };
}
