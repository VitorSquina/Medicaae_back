import express from "express";
const router = express.Router();
import tratamentoController from '../controllers/tratamentoController.js';

router.post('/', tratamentoController.cadastrarTratamento);
router.get('/:id', tratamentoController.getTratamentoStatus);

export default router;