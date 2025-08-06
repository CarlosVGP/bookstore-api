import express from "express";
import AutoresControllers from "../controllers/autoresControllers.js";

const autoresControllers = new AutoresControllers();
const router = express.Router();

router
  .get("/autores", (req, res, next) =>
    autoresControllers.buscaTodos(req, res, next)
  )
  .get("/autores/busca", (req, res, next) =>
    autoresControllers.buscaPorFiltro(req, res, next)
  )
  .get("/autores/:id", (req, res, next) =>
    autoresControllers.buscaPorId(req, res, next)
  )
  .post("/autores", (req, res, next) =>
    autoresControllers.cadastrar(req, res, next)
  )
  .put("/autores/:id", (req, res, next) =>
    autoresControllers.atualizar(req, res, next)
  )
  .delete("/autores/:id", (req, res, next) =>
    autoresControllers.deletar(req, res, next)
  );

export default router;
