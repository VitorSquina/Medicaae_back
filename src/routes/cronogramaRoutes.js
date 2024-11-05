import express from 'express';
const router = express.Router();
import cronogramaController from '../controllers/cronogramaController.js';

router.get('/cronograma/:status', cronogramaController.getCronogramasStatus);
router.post('/cronograma', cronogramaController.cadastrarCronograma);

export default router;