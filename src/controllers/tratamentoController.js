import { createTratamento, getTratamentosByStatus, getAllTratamento, updateTratamento} from '../models/Tratamento.js';

class TratamentoController {

  static cadastrarTratamento = async (req, res) => { 
    const { nome_paciente, id_medicamento, dosagem, intervalo, data_inicial, duracao, data_final, observacao, status = "Em andamento" } = req.body; 
    try { 
      const newTratamento = await createTratamento({ id_paciente: req.body.id_paciente, id_medicamento, nome_paciente, dosagem, intervalo, data_inicial, duracao, data_final, observacao, status }); 
      res.status(201).json({ message: 'Tratamento criado com sucesso!', data: newTratamento }); 
    } catch (error) { 
      console.error('Erro ao criar tratamento:', error); 
      res.status(500).json({ error: 'Erro no servidor', details: error.message }); 
    } 
  };

  static getTratamentoStatus = async (req, res) => {
    const { status, id_user } = req.body;
      try {
        const tratamentos = await getTratamentosByStatus(status, id_user);
        res.status(200).json(tratamentos);
      } catch (error) {
        console.error('Erro ao buscar tratamentos pelo status:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    }

  static getAllTratamentos = async (req, res) => {
    const { id_user } = req.body;
      try {
        const tratamentos = await getAllTratamento(id_user);
        res.status(200).json(tratamentos);
      } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    };

  static updateTratamento = async (req, res) => {
      const { id_tratamento } = req.params;
      const { medicamento, dosagem, status, data_inicial, data_final, observacao } = req.body;
      try{
        const tratamentos = await updateTratamento(id_tratamento, medicamento, dosagem, status, data_inicial, data_final, observacao)
        res.status(200).json(tratamentos);
      }catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
  }
}



export default TratamentoController;
