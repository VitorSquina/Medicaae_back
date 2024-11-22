import mongoose from "mongoose";

const CronogramaSchema = new mongoose.Schema({
    id_tratamento: {type: String, required: [true, "O id do tratamento é obrigatório"]},
    id_user: {type: String, required: [true, "O id do usuário é obrigatório"]},
    id_paciente: {type: String, required: [true, "O id do paciente é obrigatório"]},
    horario: {type: String, required: [true, "O horário de ingestão é obrigatório"]},
    dia: {type: String, required: [true, "O dia da ingestão é obrigatório"]},
    descricao: {type: String},
    status: {type: String, required: [true, "O status é obrigatório"]},
})

const Cronograma = mongoose.model("cronograma", CronogramaSchema);
export default Cronograma;