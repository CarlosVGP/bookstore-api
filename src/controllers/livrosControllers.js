import Controllers from "./Controllers.js";
import LivrosServices from "../services/LivrosServices.js";

const livrosServices = new LivrosServices();
class LivrosControllers extends Controllers {
  constructor() {
    super(livrosServices);
  }
  buscaPorFiltro = async (req, res, next) => {
    try {
      const registrosEncontrados = await this.entidadeService.listarPorFiltro(
        req.query
      );
      return res.status(200).json({ Registros: registrosEncontrados });
    } catch (error) {
      next(error);
    }
  };
}
export default LivrosControllers;
