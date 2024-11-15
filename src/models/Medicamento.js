import mongoose from 'mongoose';

const medicamentoSchema = new mongoose.Schema({
    id_user: {type: String, required: true},
    nome: {type: String, required: true },
    dosagem: {type: String, required: true},
    descricao: {type: String},
})


const medicamento = mongoose.model("medicamento", medicamentoSchema);
export default medicamento;