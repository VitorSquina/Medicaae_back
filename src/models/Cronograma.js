import mongoose from "mongoose";

const CronogramaSchema = new mongoose.Schema({
    id_tratamento: {type: String, required: true},
    id_user: {type: String, required: true},
    id_paciente: {type: String, required: true},
    horario: {type: String, required: true},
    intervalo: {type: String, required: true},
    duracao: {type: String, required: true},
    descricao: {type: String},
    status: {type: String},
})

const Cronograma = mongoose.model("cronograma", CronogramaSchema);
export default Cronograma;