import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();

//Conexão com banco de dados
db.on("error", () =>
  console.log("Erro ao tentar realizar conexão com o banco de dados")
);
db.once("open", () =>
  console.log("Conexão com banco de dados realizada com sucesso!")
);

routes(app);

//Middlewares
// app.use((error, req, res, next) => {
//   res.status(200).send("Middleware acessado");
//   //manipulaErros();
// });

export default app;
