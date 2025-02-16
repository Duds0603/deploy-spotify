import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com endpoits 'artists' e 'songs' ");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("Artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("Songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`O servidor está escutando na porta ${PORT}`);
});
