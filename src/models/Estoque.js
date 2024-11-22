import mongoose from "mongoose";

const EstoqueSchema = new mongoose.Schema({
    id_user: {type: String, required: [true, "O id do usuário é obrigatório"]},
    id_medicamento: { type: String, required: [true, "O id do medicamento é obrigatório"]},
    quantidade: { type: Number, required: [true, "A quantidade é obrigatória" ] },
    dosagem: { type: String, required: [true, "A dosagem é obrigatória"] },
    observacao: { type: String }
});

const Estoque = mongoose.model("Estoque", EstoqueSchema);
export default Estoque;