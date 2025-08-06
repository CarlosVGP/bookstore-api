class Services {
  constructor(ModelName) {
    this.model = ModelName;
  }
  async listarTodosRegistros(paginacaoParams = { limite: 5, pagina: 1 }) {
    const { limite, pagina } = paginacaoParams;
    const buscaRegistro = await this.model
      .find({})
      .skip((pagina - 1) * limite)
      .limit(limite)
      .populate("autor")
      .exec();

    return buscaRegistro;
  }

  async listarRegistroPorId(id) {
    const registro = await this.model.findById(id);
    return registro;
  }

  async adicionarRegistro(reqBody) {
    const novoRegistro = new this.model(reqBody);
    const resultado = await novoRegistro.save(novoRegistro);
    return resultado;
  }

  async atualizarRegistro(id, dadosAtualizados) {
    const registro = await this.model.findByIdAndUpdate(id, {
      $set: dadosAtualizados,
    });
    if (!registro) {
      return null;
    }
    return registro;
  }

  async deletarRegistro(id) {
    return await this.model.findByIdAndDelete(id);
  }
}
export default Services;
