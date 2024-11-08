import mongoose from 'mongoose';

const tratamentoSchema = new mongoose.Schema({
  id_user: {type: String, required: true},
  nome_paciente: {type: String, required: true }, 
  medicamento: { type: String, required: true },
  dosagem: { type: String, required: true },
  observacao: { type: String },
  status: {type: String, required: true}
});

const tratamento = mongoose.model("Tratamento", tratamentoSchema);
export default tratamento;
