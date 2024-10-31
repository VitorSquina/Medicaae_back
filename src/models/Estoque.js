import { Mongoose } from "mongoose";

 const EstoqueSchema = new Mongoose.Schema({
    nome_medicamento: {String, required: true},
    quantidade: { Number, required: true},
    dosagem: {String, required: true},
    observacao: {String}
 })

 module.exports = mongoose.model('Estoque', EstoqueSchema);