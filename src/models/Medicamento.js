import mongoose from 'mongoose';

const medicamentoSchema = new mongoose.Schema({
    id_user: {type: String, required: [true, "O id do usuario é obrigatório"]},
    nome: {type: String, required: [true, "O nome do medicamento é obrigatório"] },
    dosagem: {type: String, required: [true, "A dosagem do medicamento é obrigatória"]},
    descricao: {type: String},
})


const medicamento = mongoose.model("medicamento", medicamentoSchema);
export default medicamento;