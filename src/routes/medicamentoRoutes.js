import express from 'express';
import MedicamentoController from '../controllers/medicamentoController.js';

const router = express.Router();

router.post('/', MedicamentoController.adicionarMedicamento);
router.get('/', MedicamentoController.listarMedicamentos);

router.get('/:nome', MedicamentoController.buscarPorNome);
router.put('/:id_med', MedicamentoController.atualizarMedicamento);
router.delete('/:id', MedicamentoController.deletarMedicamento);

export default router;
