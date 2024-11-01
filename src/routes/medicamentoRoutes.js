import express from 'express';
const router = express.Router();
import medicamentoController from '../controllers/medicamentocontroller.js';

router.post('/cadastrar', medicamentoController.cadastrarMedicamento);

router.get('/listar', medicamentoController.listarMedicamentos);

router.delete('/remover/:id', medicamentoController.removerMedicamento);

export default router;