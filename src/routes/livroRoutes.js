import express from "express";
import LivrosControllers from "../controllers/livrosControllers.js";

const router = express.Router();

router
  .post("/livros", LivrosControllers.cadastrarLivro)
  .get("/livros", LivrosControllers.listarLivros)
  .get("/livros/busca", LivrosControllers.listarLivrosPorFiltro)
  .put("/livros/:id", LivrosControllers.atualizarLivro)
  .delete("/livros/:id", LivrosControllers.deletarLivro);

export default router;
