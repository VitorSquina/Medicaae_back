import mongoose from 'mongoose';

const medicamentoSchema = new mongoose.Schema({
    nome: {type: String, required: true },
    dosagem: {type: String},
    descricao: {type: String},
})


const medicamento = mongoose.model("medicamento", medicamentoSchema);
export default medicamento;