import { autores } from "../models/index.js";

import Services from "./Services.js";

class AutoresServices extends Services {
  constructor() {
    super(autores);
  }

  async listarPorFiltro(reqQuery) {
    let busca = await this.#processaBusca(reqQuery);
    const { limite = 5, pagina = 1 } = reqQuery;

    if (busca !== null) {
      const registrosResultantes = await this.model
        .find(busca)
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
      return registrosResultantes;
    }
    return [];
  }

  async #processaBusca(params) {
    const { nome, nacionalidade } = params;
    let busca = {};

    if (nome) busca.nome = { $regex: nome, $options: "i" };
    if (nacionalidade)
      busca.nacionalidade = { $regex: nacionalidade, $options: "i" };

    return busca;
  }
}

export default AutoresServices;
