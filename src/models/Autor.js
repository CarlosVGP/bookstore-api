import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    __id: { type: mongoose.Types.ObjectId },
    nome: {
      type: String,
      required: [
        true,
        "É necessario o fornecimento do nome para realizar o cadastro de um(a) novo(a) autor(a)",
      ],
    },
    nacionalidade: {
      type: String,
      required: [
        true,
        "É necessario fornecer a nacionalidade do(a) autor(a) que está sendo cadastrado",
      ],
    },
  },
  { versionKey: false }
);

const autores = mongoose.model("autores", autorSchema);

export default { autores, autorSchema };
