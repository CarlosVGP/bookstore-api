import express from "express";
import AutoresControllers from "../controllers/autoresControllers.js";

const autoresControllers = new AutoresControllers();
const router = express.Router();

router
  .get("/autores", autoresControllers.buscaTodos)
  .get("/autores/busca", autoresControllers.buscaPorFiltro)
  .get("/autores/:id", autoresControllers.buscaPorId)
  .post("/autores", autoresControllers.cadastrar)
  .put("/autores/:id", autoresControllers.atualizar)
  .delete("/autores/:id", autoresControllers.deletar);

export default router;
