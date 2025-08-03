import express from "express";
import db from "./config/dbConnect.js";

const app = express();
app.use(express.json());

db.on("error", (e) =>
  console.log("Erro ao tentar realizar conexão com o banco de dados\n", e)
);
db.once("open", () =>
  console.log("Conexão com banco de dados realizada com sucesso!")
);

app.get("/", (req, res) => {
  res.status(200).send("Some text");
});

export default app;
