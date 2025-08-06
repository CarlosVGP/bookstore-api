import { livros, autores } from "../models/index.js";

import Services from "./Services.js";

class LivrosServices extends Services {
  constructor() {
    super(livros);
  }

  async listarPorFiltro(reqQuery) {
    let busca = await this.#processaBusca(reqQuery);
    const { limite = 5, pagina = 1 } = reqQuery;

    if (busca !== null) {
      const registrosResultantes = await this.model
        .find(busca)
        .populate("autor")
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
      return registrosResultantes;
    }
    return [];
  }

  async #processaBusca(params) {
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
}

export default LivrosServices;
