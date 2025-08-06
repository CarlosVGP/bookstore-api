import express from "express";
import LivrosControllers from "../controllers/livrosControllers.js";

const livrosControllers = new LivrosControllers();
const router = express.Router();

router
  .get("/livros", (req, res, next) =>
    livrosControllers.buscaTodos(req, res, next)
  )
  .get("/livros/busca", (req, res, next) =>
    livrosControllers.buscaPorFiltro(req, res, next)
  )
  .get("/livros/:id", (req, res, next) =>
    livrosControllers.buscaPorId(req, res, next)
  )
  .post("/livros", (req, res, next) =>
    livrosControllers.cadastrar(req, res, next)
  )
  .put("/livros/:id", (req, res, next) =>
    livrosControllers.atualizar(req, res, next)
  )
  .delete("/livros/:id", (req, res, next) =>
    livrosControllers.deletar(req, res, next)
  );

export default router;
