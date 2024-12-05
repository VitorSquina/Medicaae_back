import {
  createCronograma, getAllCronogramas, getCronogramasByStatus, alterarStatusCronograma } from '../models/Cronograma.js';

class CronogramaController {
  static criarCronograma = async (req, res) => {
    const { id_paciente, horario, intervalo, duracao, descricao, status, id_tratamento } = req.body;
    try {
      const novoCronograma = await createCronograma({ id_paciente, id_tratamento, horario, intervalo, duracao, descricao, status
       });
      res.status(201).json({ message: 'Cronograma criado com sucesso!', data: novoCronograma });
    } catch (error) {
      console.error('Erro ao criar cronograma:', error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static listarCronogramas = async (req, res) => {
    const { id_user } = req.body
    try {
      const cronogramas = await getAllCronogramas(id_user);
      res.status(200).json(cronogramas);
    } catch (error) {
      console.error('Erro ao listar cronogramas:', error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }

  static getCronogramaStatus = async (req, res) => {
    const { status, id_user } = req.body;
      try {
        const tratamentos = await getCronogramasByStatus(status, id_user);
        res.status(200).json(tratamentos);
      } catch (error) {
        console.error('Erro ao buscar tratamentos pelo status:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    }
    
    static alterarStatusCronogramaController = async (req, res) => {
      const { id, newStatus } = req.body;  // Recebe os parâmetros da requisição
      
      try {
        // Chama a função para alterar o status
        const tratamentos = await alterarStatusCronograma(newStatus, id);
        res.status(200).json(tratamentos);  // Retorna os dados atualizados
      } catch (error) {
        console.error('Erro ao buscar tratamentos pelo status:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    };
  }

export default CronogramaController;
