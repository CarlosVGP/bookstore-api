import { autores } from "../models/index.js";

class AutoresControllers {
  static listarAutores = async (req, res, next) => {
    try {
      const buscaAutores = await autores.find({});
      res.status(200).send(buscaAutores);
    } catch (error) {
      next(error);
    }
  };

  static listarAutoresPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      const autorResultado = await autores.find(busca);

      res.status(200).send(autorResultado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      const novoAutor = new autores(req.body);
      const resultado = await novoAutor.save(novoAutor);
      res
        .status(200)
        .json({ message: "Autor cadastrado com sucesso", autor: resultado });
    } catch (error) {
      next(error);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });

      res.status(200).json({
        message: "Dados atualizados com sucesso",
      });
    } catch (error) {
      next(error);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);

      res.status(200).json({
        message: "Autor excluido com sucesso",
      });
    } catch (error) {
      next(error);
    }
  };
}

async function processaBusca(params) {
  const { nome, nacionalidade } = params;
  const busca = {};

  if (nome) busca.nome = { $regex: nome, $options: "i" };
  if (nacionalidade)
    busca.nacionalidade = { $regex: nacionalidade, $options: "i" };

  return busca;
}
export default AutoresControllers;
