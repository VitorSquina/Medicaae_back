import express from 'express';
const router = express.Router();
import cronogramaController from '../controllers/cronogramaController.js';

router.post('/', cronogramaController.criarCronograma);
router.get('/all', cronogramaController.listarCronogramas);
router.get('/status', cronogramaController.getCronogramaStatus);
router.patch('/alterar', cronogramaController.alterarStatusCronogramaController);

export default router;