import express from "express";
import LivrosControllers from "../controllers/livrosControllers.js";

const livrosControllers = new LivrosControllers();
const router = express.Router();

router
  .get("/livros", livrosControllers.buscaTodos)
  .get("/livros/busca", livrosControllers.buscaPorFiltro)
  .get("/livros/:id", livrosControllers.buscaPorId)
  .post("/livros", livrosControllers.cadastrar)
  .put("/livros/:id", livrosControllers.atualizar)
  .delete("/livros/:id", livrosControllers.deletar);

export default router;
