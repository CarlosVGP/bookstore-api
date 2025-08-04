import { autores, livros } from "../models/index.js";
// import NaoEncontrado from "../erros/NaoEncontrado.js"
import mongoose from "mongoose";

class LivrosControllers {
  static listarLivros = async (req, res, next) => {
    try {
      const { limite = 5, pagina = 1 } = req.query;

      const buscaLivros = await livros
        .find({})
        .skip((pagina - 1) * limite)
        .limit(limite)
        .populate("autor")
        .exec();
      res.status(200).send(buscaLivros);
    } catch (error) {
      next(error);
    }
  };

  static listarLivrosPorFiltro = async (req, res, next) => {
    try {
      const { limite = 5, pagina = 1 } = req.query;
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        const livrosResultado = await livros
          .find(busca)
          .populate("autor")
          .skip((pagina - 1) * limite)
          .limit(limite)
          .exec();
        res.status(200).send(livrosResultado);
        if (!mongoose.Types.ObjectId.isValid(busca._id)) {
          // new.NaoEncontrado().enviar;
        }
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const novoLivro = new livros(req.body);
      const resultado = await novoLivro.save(novoLivro);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso", livro: resultado });
    } catch (error) {
      next(error);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {
        $set: req.body,
      });

      res.status(200).json({
        message: "Dados atualizados com sucesso",
      });
    } catch (error) {
      next(error);
    }
  };

  static deletarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);

      res.status(200).json({
        message: "Livro excluido com sucesso",
      });
    } catch (error) {
      next(error);
    }
  };
}

async function processaBusca(params) {
  const { editora, titulo, minPaginas, maxPaginas, autor } = params;
  let busca = {};

  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if (autor) {
    const autorEncontrado = await autores.findOne({ nome: autor });
    if (autorEncontrado !== null) {
      busca.autor = autorEncontrado._id;
    } else {
      busca = null;
    }
  }
  return busca;
}
export default LivrosControllers;
