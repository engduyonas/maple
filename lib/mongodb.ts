import { MongoClient, Db } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const globalWithMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function createClient(uri: string): Promise<MongoClient> {
  const client = new MongoClient(uri);
  attachDatabasePool(client);
  return client.connect();
}

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo._mongoClientPromise) {
      globalWithMongo._mongoClientPromise = createClient(uri);
    }
    return globalWithMongo._mongoClientPromise;
  }

  return createClient(uri);
}

export function isMongoConfigured(): boolean {
  return Boolean(process.env.MONGODB_URI);
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db();
}
