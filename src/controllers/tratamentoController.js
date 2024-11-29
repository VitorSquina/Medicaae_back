import { getPacienteById } from '../models/Paciente.js';
import { createTratamento, getTratamentosByStatus } from '../models/Tratamento.js';

class TratamentoController {

    static cadastrarTratamento = async (req, res) => {
    const { nome_paciente, medicamento, dosagem, observacao, status = "Em andamento" } = req.body;
    try {
      const newTratamento = await createTratamento({ nome_paciente, medicamento, dosagem, observacao, status });
      res.status(201).json({ message: 'Tratamento criado com sucesso!', data: newTratamento });
    } catch (error) {
      console.error('Erro ao criar tratamento:', error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static getTratamentoStatus = async (req, res) => {
    const { status } = req.params;
    const {id_paciente, id_user} = req.body;
    const pacienteExiste = await getPacienteById(id_paciente, id_user)
    if(pacienteExiste){
      try {
        const tratamentos = await getTratamentosByStatus(status, id_paciente);
        res.status(200).json(tratamentos);
      } catch (error) {
        console.error('Erro ao buscar tratamentos pelo status:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    } else {
      res.status(400).json({ error: 'Paciente não encontrado', details: error.message });
    };
    }
}

export default TratamentoController;
