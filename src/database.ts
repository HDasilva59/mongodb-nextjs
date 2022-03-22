import { MongoClient } from "mongodb";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb: MongoClient;

export function getDatabase(): Promise<MongoClient> {
  if (cachedDb || !MONGODB_URI) {
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(MONGODB_URI)
      .then(db => {
        cachedDb = db;
        return cachedDb;
      });
  }
}
