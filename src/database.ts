import { MongoClient } from "mongodb";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb: MongoClient;

export async function getDatabase(): Promise<MongoClient> {
  if (cachedDb || !MONGODB_URI) {
    return await Promise.resolve(cachedDb);
  } else {
    return await MongoClient.connect(MONGODB_URI)
      .then(db => {
        cachedDb = db;
        console.log(cachedDb)
        return cachedDb;
      });
  }
}
