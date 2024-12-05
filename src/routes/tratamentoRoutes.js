import express from "express";
const router = express.Router();
import tratamentoController from '../controllers/tratamentoController.js';

router.post('/', tratamentoController.cadastrarTratamento);
router.get('/status', tratamentoController.getTratamentoStatus);
router.get('/all', tratamentoController.getAllTratamentos);
router.patch('/update/:id_tratamento', tratamentoController.updateTratamento);
router.patch('/alterar', tratamentoController.alterarStatustratamentoController);

export default router;