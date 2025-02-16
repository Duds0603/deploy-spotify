import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com endpoits 'artists' e 'songs' ");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("Artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("Songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, '../front-end/dist')))

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`O servidor está escutando na porta ${PORT}`);
});
