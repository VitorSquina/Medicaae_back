import express from 'express';
import PacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.post('/', PacienteController.adicionarPaciente);
router.get('/', PacienteController.listarPacientes);

router.get('/:id_paciente', PacienteController.buscarPorNome);
router.put('/:id_paciente', PacienteController.atualizarPaciente);
router.delete('/:id_paciente', PacienteController.deletarPaciente);

export default router;
