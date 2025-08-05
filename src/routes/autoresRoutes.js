import express from "express";
import AutoresControllers from "../controllers/autoresControllers.js";

const router = express.Router();

router
  .get("/autores", AutoresControllers.listarAutores)
  .put("/autores/:id", AutoresControllers.listarAutoresPorId)
  .get("/autores/busca", AutoresControllers.listarAutoresPorFiltro)
  .post("/autores", AutoresControllers.cadastrarAutor)
  .put("/autores/:id", AutoresControllers.atualizarAutor)
  .delete("/autores/:id", AutoresControllers.deletarAutor);

export default router;
