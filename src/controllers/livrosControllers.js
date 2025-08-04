import { livros } from "../models/index.js";

class LivrosControllers {
  static listarLivros = async (req, res) => {
    try {
      const buscaLivros = await livros.find({});
      res.status(200).send(buscaLivros);
    } catch (error) {
      console.log("Erro ao tentar listar os livros", error);
    }
  };

  // static listarLivrosPorId = async (req, res) => {};
  // static listarLivrosPorEditora = async (req, res) => {};
  // static listarLivrosPorAutor = async (req, res) => {};
  static listarLivrosPorFiltro = async (req, res) => {
    try {
      const { editora, titulo } = req.query;

      const busca = {};

      if (editora) busca.editora = editora;
      if (titulo) busca.titulo = titulo;

      const livroResultado = await livros.find(busca);

      res.status(200).send(livroResultado);
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

export default LivrosControllers;
