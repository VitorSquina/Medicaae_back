import mongoose from 'mongoose';

const tratamentoSchema = new mongoose.Schema({
  id_user: {type: String, required: [true, "O id do usuário é obrigatório"]},
  id_medicamento: { type: String, required: [true, "O id do medicamento é obrigatório"] },
  nome_paciente: {type: String, required: [true, "O nome do paciente é obrigatório"] }, 
  dosagem: { type: String, required: [true, "A dosagem é obrigatória"] },
  intervalo: {type: String, required: [true, "O intervalo de tempo é obrigatório" ]},
  dataInicial: {type: String, required: [true, "A data inicial é obrigatória"]},
  dataFinal: {tyoe: String, required: [true, "A data final é obrigatória"]},
  observacao: { type: String },
  status: {type: String, required: [true, "O status é obrigatório"]}
});

const tratamento = mongoose.model("Tratamento", tratamentoSchema);
export default tratamento;
