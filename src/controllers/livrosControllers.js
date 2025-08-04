import { autores, livros } from "../models/index.js";

class LivrosControllers {
  static listarLivros = async (req, res) => {
    try {
      const buscaLivros = await livros.find({});
      res.status(200).send(buscaLivros);
    } catch (error) {
      console.log("Erro ao tentar listar os livros", error);
    }
  };

  static listarLivrosPorFiltro = async (req, res) => {
    try {
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        const livroResultado = await livros.find(busca).populate("autor");
        res.status(200).send(livroResultado);
      }
    } catch (error) {
      res.status(200).json({ message: `Eror, ${error}` });
    }
  };

  static cadastrarLivro = async (req, res) => {
    const novoLivro = new livros(req.body);
    const resultado = await novoLivro.save(novoLivro);
    res
      .status(200)
      .json({ message: "Livro cadastrado com sucesso", livro: resultado });
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {
        $set: req.body,
      });

      res.status(200).json({
        message: "Dados atualizados com sucesso",
      });
    } catch (error) {
      res.status(500).send("Erro", error);
    }
  };

  static deletarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);

      res.status(200).json({
        message: "Livro excluido com sucesso",
      });
    } catch (error) {
      res.status(500).send("Erro", error);
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
