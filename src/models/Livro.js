import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  __id: { type: mongoose.Types.ObjectId },
  titulo: {
    type: String,
    required: [true, "É obrigatorio fornecer um titulo ao cadastrar um livro"],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "É obrigatorio fornecer o nome do ao cadastrar um livro"],
  },
  editora: {
    type: String,
    required: [
      true,
      "É obrigatorio fornecer o nome da editora ao cadastrar um livro",
    ],
    enum: {
      values: [
        [
          "Companhia das Letras",
          "Grupo Editorial Record",
          "Rocco",
          "Intrínseca",
          "Editora Sextante",
        ],
      ],
      message:
        "Editora fornecida '{VALUE}' não está entre as concideradas validas",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 15 && value <= 10000;
      },
    },
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
