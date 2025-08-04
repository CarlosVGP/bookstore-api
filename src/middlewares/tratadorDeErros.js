import mongoose from "mongoose";
import ErroRequisicao from "../erros/ErroRequisicao.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import ErroBase from "../erros/ErroBase.js";

// eslint-disable-next-line no-unused-vars
function tratadorDeErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new ErroRequisicao().enviarResposta(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(error).enviarResposta(res);
  } else if (error instanceof ErroBase) {
    error.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}
export default tratadorDeErros;
