import NaoEncontrado from "../erros/NaoEncontrado.js";

function tratador404(req, res, next) {
  const erro404 = new NaoEncontrado().enviarResposta(res);
  next(erro404);
}
export default tratador404;
