import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao {
  constructor(error) {
    const mensagemErro = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`Foram encontrados os sequintes erros: ${mensagemErro}`);
  }
}

export default ErroValidacao;
