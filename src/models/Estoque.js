import mongoose from "mongoose";

const EstoqueSchema = new mongoose.Schema({
    nome_medicamento: { type: String, required: true },
    quantidade: { type: Number, required: true },
    dosagem: { type: String, required: true },
    observacao: { type: String }
});

const Estoque = mongoose.model("Estoque", EstoqueSchema);
export default Estoque;