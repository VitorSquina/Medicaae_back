import {createCronograma,getAllCronogramas,getCronogramasByPaciente,updateCronograma, deleteCronograma,
  } from '../models/Cronograma.js';
import { getTratamentoById } from '../models/Tratamento.js';
import { getPacienteById } from '../models/Paciente.js';
  
  class CronogramaController {
    static criarCronograma = async (req, res) => {
      const { id_paciente, horario, intervalo, duracao, descricao, status } = req.body;
      try {
        const novoCronograma = await createCronograma({ id_paciente, horario, intervalo, duracao, descricao, status });
        res.status(201).json({ message: 'Cronograma criado com sucesso!', data: novoCronograma });
      } catch (error) {
        console.error('Erro ao criar cronograma:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    };
  
    static listarCronogramas = async (req, res) => { // OK
      const {id_tratamento, id_user} = req.body
      const tratamento = await getTratamentoById(id_tratamento)
      if(tratamento !== null) {
        const paciente = await getPacienteById(tratamento.id_paciente, id_user)
        if(paciente !== null) {
          try {
            const cronogramas = await getAllCronogramas(id_tratamento);
            res.status(200).json(cronogramas);
          } catch (error) {
            console.error('Erro ao listar cronogramas:', error);
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
          }
        } else {
          res.status(400).json({ error: 'Paciente não encontrado', details: error.message });
        };      
        } else {
          res.status(400).json({ error: 'Tratamento não encontrado', details: error.message });
        }
      }
    
  
    static buscarPorPaciente = async (req, res) => {
      const {id_tratamento, id_user} = req.body
      const tratamento = await getTratamentoById(id_tratamento)
      if(tratamento !== null) {
        const paciente = await getPacienteById(tratamento.id_paciente, id_user),
        if(paciente !== null) {
      try {
        const cronogramas = await getCronogramasByPaciente(paciente.id_paciente);
        res.status(200).json(cronogramas);
      } catch (error) {
        console.error('Erro ao buscar cronogramas:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    } else {
      res.status(400).json({ error: 'Paciente não encontrado', details: error.message });
    };      
    } else {
      res.status(400).json({ error: 'Tratamento não encontrado', details: error.message });
    }
  };
  
    static atualizarCronograma = async (req, res) => {
      const { id } = req.params;
      const updates = req.body;
      try {
        const cronogramaAtualizado = await updateCronograma(id, updates);
        if (!cronogramaAtualizado) return res.status(404).json({ message: 'Cronograma não encontrado' });
  
        res.status(200).json({ message: 'Cronograma atualizado com sucesso!', data: cronogramaAtualizado });
      } catch (error) {
        console.error('Erro ao atualizar cronograma:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    };
  
    static deletarCronograma = async (req, res) => {
      const { id } = req.params;
      try {
        const cronogramaRemovido = await deleteCronograma(id);
        if (!cronogramaRemovido) return res.status(404).json({ message: 'Cronograma não encontrado' });
  
        res.status(200).json({ message: 'Cronograma removido com sucesso!', data: cronogramaRemovido });
      } catch (error) {
        console.error('Erro ao deletar cronograma:', error);
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
      }
    };
  }
  
  export default CronogramaController;
  