import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao {
  constructor(erro) {
    const mensagemErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; \n");
    super(`Foram encontrados os sequintes erros: ${mensagemErro}`);
  }
}

export default ErroValidacao;
