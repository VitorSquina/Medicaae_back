import express from 'express';
const router = express.Router();
import pacienteController from '../controllers/pacienteController.js';

router.get('/', pacienteController.getAllPacientes);

export default router;