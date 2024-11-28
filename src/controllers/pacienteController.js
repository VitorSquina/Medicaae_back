import { getAllPacientes } from '../models/Paciente.js';

const pacienteController = {
 
  getAllPacientes: async (req, res) => {
    try {
      const pacientes = await getAllPacientes();
      res.status(200).json(pacientes); 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar pacientes', details: error.message });
    }
  },
};

export default pacienteController;
