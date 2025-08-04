import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import tratadorDeErros from "./middlewares/tratadorDeErros.js";
import tratador404 from "./middlewares/tratador404.js";

const app = express();

//Conexão com banco de dados
db.on("error", () =>
  console.log("Erro ao tentar realizar conexão com o banco de dados")
);
db.once("open", () =>
  console.log("Conexão com banco de dados realizada com sucesso!")
);

//Rotas da aplicação
routes(app);

//Middlewares para tratamento de erros da API
app.use(tratador404);
app.use(tratadorDeErros);

export default app;
