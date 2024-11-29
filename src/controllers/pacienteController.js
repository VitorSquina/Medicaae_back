import { createPaciente, getAllPacientes, getPacienteById, updatePaciente, deletePaciente } from '../models/Paciente.js';

class PacienteController {
  static adicionarPaciente = async (req, res) => {
    const { id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta } = req.body;
    try {
      const novoPaciente = await createPaciente({ id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta });
      res.status(201).json({ message: 'Paciente adicionado com sucesso!', data: novoPaciente });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static listarPacientes = async (req, res) => {
    const {id_user} = req.body
    try {
      const Pacientes = await getAllPacientes(id_user);
      res.status(200).json(Pacientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static buscarPorNome = async (req, res) => {
    const { id_paciente } = req.params;
    try {
      const Paciente = await getPacienteById(id_paciente);
      if (!Paciente) return res.status(404).json({ message: 'Paciente não encontrado' });
      res.status(200).json(Paciente);
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static atualizarPaciente = async (req, res) => {
    const { id_paciente } = req.params;
    const updates = req.body;
    try {
      const PacienteAtualizado = await updatePaciente(id_paciente, updates);
      if (!PacienteAtualizado) return res.status(404).json({ message: 'Paciente não encontrado' });

      res.status(200).json({ message: 'Paciente atualizado com sucesso!', data: PacienteAtualizado });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static deletarPaciente = async (req, res) => {
    const { id_paciente } = req.params;
    try {
      const PacienteRemovido = await deletePaciente(id_paciente);
      if (!PacienteRemovido) return res.status(404).json({ message: 'Paciente não encontrado' });

      res.status(200).json({ message: 'Paciente removido com sucesso!', data: PacienteRemovido });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };
}

export default PacienteController;
