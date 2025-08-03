import express from "express";
import livros from "./livroRoutes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Página teste");
  });
  app.use(express.json(), livros);
};

export default routes;
