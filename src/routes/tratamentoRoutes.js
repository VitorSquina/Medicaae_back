import express from "express";
const router = express.Router();
import tratamentoController from '../controllers/tratamentoController.js';

router.post('/tratamento/cadastrar', tratamentoController.cadastrarTratamento);
router.get('/tratamento/:id', tratamentoController.getTratamentoStatus);

export default router;