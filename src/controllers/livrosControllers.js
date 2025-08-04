import { autores, livros } from "../models/index.js";

class LivrosControllers {
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = await livros.find({});
      res.status(200).send(buscaLivros);
    } catch (error) {
      next(error);
    }
  };

  static listarLivrosPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        const livroResultado = await livros.find(busca).populate("autor");
        res.status(200).send(livroResultado);
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
        .status(200)
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
