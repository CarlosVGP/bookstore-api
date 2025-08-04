import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    __id: { type: mongoose.Types.ObjectId },
    titulo: {
      type: String,
      required: [
        true,
        "É obrigatorio fornecer um titulo ao cadastrar um novo livro",
      ],
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [
        true,
        "É obrigatorio fornecer o nome do(a) autor(a) ao cadastrar um novo livro",
      ],
    },
    editora: {
      type: String,
      required: [
        true,
        "É obrigatorio fornecer o nome da editora ao cadastrar um novo livro",
      ],
      enum: {
        values: [
          "Companhia das Letras",
          "Grupo Editorial Record",
          "Rocco",
          "Intrinseca",
          "Editora Sextante",
        ],
        message:
          "Editora fornecida '{VALUE}' não está entre as consideradas validas",
      },
    },
    numeroPaginas: {
      type: Number,
      required: [
        true,
        "É necessario fornecer a quantidade de páginas que o livro possui",
      ],
      validate: {
        validator: (value) => {
          return value >= 15 && value <= 10000;
        },
        message:
          "O numero de páginas deve estar entre 15 e 10.000 Valor fornecido '{VALUE}'",
      },
    },
  },
  { versionKey: false }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
