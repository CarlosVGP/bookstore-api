import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => value != "",
  message: ({ path }) => `É necessario preencher o campo ${path}`,
});
