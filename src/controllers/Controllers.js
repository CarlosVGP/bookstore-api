import NaoEncontrado from "../erros/NaoEncontrado.js";

class Controllers {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async buscaTodos(req, res, next) {
    try {
      const listaDeRegistro = await this.entidadeService.listarTodosRegistros(
        req.query
      );
      return res.status(200).json({ Registros: listaDeRegistro });
    } catch (error) {
      next(error);
    }
  }
  async buscaPorId(req, res, next) {
    try {
      const registroEncontrado = await this.entidadeService.listarRegistroPorId(
        req.params.id
      );
      if (!registroEncontrado) {
        return next(new NaoEncontrado("Registro não encontrado."));
      }
      return res.status(200).json({ Registro: registroEncontrado });
    } catch (error) {
      next(error);
    }
  }
  async cadastrar(req, res, next) {
    try {
      const novoRegistro = await this.entidadeService.adicionarRegistro(
        req.body
      );
      return res.status(201).json({ NovoRegistro: novoRegistro });
    } catch (error) {
      next(error);
    }
  }
  async atualizar(req, res, next) {
    try {
      await this.entidadeService.atualizarRegistro(req.params.id, req.body);
      return res.status(200).json({ message: "Dados atualizados com sucesso" });
    } catch (error) {
      next(error);
    }
  }
  async deletar(req, res, next) {
    try {
      await this.entidadeService.deletarRegistro(req.params.id);
      return res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default Controllers;
