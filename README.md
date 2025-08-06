# API Livraria (Bookstore API)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

API RESTful desenvolvida para gerenciar uma coleção de livros e seus respectivos autores. Este projeto foi criado como parte de um estudo prático sobre a arquitetura MVC com camada de Serviços e as operações de um CRUD (Create, Read, Update, Delete) em Node.js.

## ✨ Funcionalidades

- ✅ **CRUD Completo:** Operações de criação, leitura, atualização e exclusão para Livros e Autores.
- ✅ **Busca Dinâmica:** Sistema de filtros para pesquisar livros por título, editora ou autor.
- ✅ **Paginação:** As listagens de resultados são paginadas para otimizar o desempenho.
- ✅ **Validações:** Validação dos dados de entrada para garantir a integridade das informações no banco de dados.
- ✅ **Tratamento de Erros:** Middlewares para tratamento de erros centralizado, incluindo erros 404 e erros de sistema.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução do JavaScript no servidor.
- **Express.js:** Framework para a construção da API.
- **MongoDB:** Banco de dados NoSQL utilizado para armazenar os dados.
- **Mongoose:** ODM para modelagem dos objetos do MongoDB.
- **Nodemon:** Monitora alterações nos arquivos e reinicia o servidor automaticamente durante o desenvolvimento.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar a API em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Uma instância do **MongoDB** ativa (localmente ou em um serviço como o MongoDB Atlas).

### Instalação

1. Clone o repositório:

   ```bash
   git clone [https://github.com/CarlosVGP/bookstore-api.git](https://github.com/SEU_USUARIO/bookstore-api.git)
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd bookstore-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Configuração

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as seguintes variáveis de ambiente, substituindo pelos seus valores:
   ```env
   PORT=3000
   DB_CONNECTION_STRING=sua_string_de_conexao_com_o_mongodb
   ```

### Execução

- Para iniciar o servidor em **modo de desenvolvimento** (com reinicialização automática):

  ```bash
  npm run dev
  ```

- Para iniciar o servidor em **modo de produção**:
  ```bash
  npm start
  ```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Livros

| Método   | Endpoint        | Descrição                                        |
| :------- | :-------------- | :----------------------------------------------- |
| `GET`    | `/livros`       | Lista todos os livros (com paginação).           |
| `GET`    | `/livros/busca` | Busca livros por filtros (ex: `?titulo=Senhor`). |
| `GET`    | `/livros/:id`   | Obtém um livro específico pelo seu ID.           |
| `POST`   | `/livros`       | Cadastra um novo livro.                          |
| `PUT`    | `/livros/:id`   | Atualiza os dados de um livro existente.         |
| `DELETE` | `/livros/:id`   | Exclui um livro.                                 |

### Autores

| Método   | Endpoint       | Descrição                                |
| :------- | :------------- | :--------------------------------------- |
| `GET`    | `/autores`     | Lista todos os autores.                  |
| `GET`    | `/autores/:id` | Obtém um autor específico pelo seu ID.   |
| `POST`   | `/autores`     | Cadastra um novo autor.                  |
| `PUT`    | `/autores/:id` | Atualiza os dados de um autor existente. |
| `DELETE` | `/autores/:id` | Exclui um autor.                         |

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Desenvolvido por [Carlos Gabriel](https://github.com/CarlosVGP)

## Agradecimentos

Este projeto foi inicialmente desenvolvido durante os cursos da plataforma [Alura](https://www.alura.com.br), e foi posteriormente refatorado com uma arquitetura aprimorada como parte do meu desenvolvimento profissional.
