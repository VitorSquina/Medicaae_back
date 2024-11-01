import mongoose from "mongoose";

const CronogramaSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    id_paciente: {type: String, required: true},
    horario: {type: String, required: true},
    intervalo: {type: String, required: true},
    duracao: {type: String, required: true},
    descricao: {type: String},
    status: {type: String},
})

const cronograma = mongoose.model("cronograma", CronogramaSchema);
export default cronograma;