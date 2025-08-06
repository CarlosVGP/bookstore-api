import Controllers from "./Controllers.js";
import AutoresServices from "../services/AutoresServices.js";

const autoresServices = new AutoresServices();
class AutoresControllers extends Controllers {
  constructor() {
    super(autoresServices);
  }

  async buscaPorFiltro(req, res, next) {
    try {
      const registrosEncontrados = await this.entidadeService.listarPorFiltro(
        req.query,
        req.query
      );
      return res.status(200).json({ Registros: registrosEncontrados });
    } catch (error) {
      next(error);
    }
  }
}
export default AutoresControllers;
