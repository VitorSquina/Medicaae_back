import express from 'express';
const router = express.Router();
import cronogramaController from '../controllers/cronogramaController.js';

router.post('/cronograma', cronogramaController);
router.get('/cronograma/:status', cronogramaController);

export default router;