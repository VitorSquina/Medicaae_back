import express from "express";
const router = express.Router();
import tratamentoController from '../controllers/tratamentocontroller.js';

router.post('/tratamento', tratamentoController.cadastrarTratamento);
router.get('/tratamento/status', tratamentoController.getTratamentoStatus);

export default router;