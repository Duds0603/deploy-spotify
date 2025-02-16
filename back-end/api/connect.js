import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Eduardo:Ehd%23060307@cluster0.5vfo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection("Songs").find({}).toArray();

// console.log(songCollection);
