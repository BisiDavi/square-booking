import { MongoClient } from "mongodb";

export async function DBClient() {
  const url = `${process.env.NEXT_PUBLIC_MONGODB_URL}`;
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected successfully to server");
    return client;
  } catch (e) {
    console.error("db-error", e);
  }
}
  