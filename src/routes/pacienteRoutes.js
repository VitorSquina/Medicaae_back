import express from 'express';
import PacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.post('/', PacienteController.adicionarPaciente);
router.get('/', PacienteController.listarPacientes);

router.get('/nome', PacienteController.getByName);
router.put('/:id_paciente', PacienteController.atualizarPaciente);

export default router;
