import express from "express";
import LivrosControllers from "../controllers/livrosControllers.js";

const router = express.Router();

router
  .get("/livros", LivrosControllers.listarLivros)
  .get("/livros/busca", LivrosControllers.listarLivrosPorFiltro)
  .post("/livros", LivrosControllers.cadastrarLivro)
  .put("/livros/:id", LivrosControllers.atualizarLivro)
  .delete("/livros/:id", LivrosControllers.deletarLivro);

export default router;
