import mongoose from "mongoose";

const CronogramaSchema = new mongoose.Schema({
    id_tratamento: {type: String, required: true},
    id_user: {type: String, required: true},
    id_paciente: {type: String, required: true},
    horario: {type: String, required: true},
    dia: {type: String, required: true},
    descricao: {type: String},
    status: {type: String, required: true},
})

const Cronograma = mongoose.model("cronograma", CronogramaSchema);
export default Cronograma;