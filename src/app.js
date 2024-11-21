import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import { mongoose } from "mongoose";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);

app.use((erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos." })
} else {
    res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
}
});
export default app;