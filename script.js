import "dotenv/config"; //sempre na primeira linha
import app from "./src/app.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta http://localhost:${PORT}`);
});
