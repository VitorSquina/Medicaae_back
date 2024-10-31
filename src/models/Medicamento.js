const mongoose = require('mongoose');

const medicamentoSchema = new mongoose.Schema({
    nome: {type: String, required: true },
    dosagem: {type: String},
    descricao: {type: String},
})

module.exports = mongoose.model('Medicamento', medicamentoSchema);
