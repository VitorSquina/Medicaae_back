import { Mongoose } from "mongoose";

const CronogramaSchema = new Mongoose.Schema({
    id: {String, required: true, unique: true},
    id_paciente: {String, required: true},
    horario: {String, required: true},
    intervalo: {String, required: true},
    duracao: {String, required: true},
    descricao: {String},
    status: "Em Andamento",
})

module.exports = mongoose.model('Cronograma', CronogramaSchema);