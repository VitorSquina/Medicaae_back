import express from "express";
const router = express.Router();
import tratamentoController from '../controllers/tratamentocontroller.js';

router.post('/tratamento', tratamentoController.cadastrarTratamento);
router.get('/tratamento/:id', tratamentoController.getTratamentoStatus);

export default router;