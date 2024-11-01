import express from 'express';
const router = express.Router();
import estoqueController from '../controllers/estoqueController.js';

router.get('/estoque/all', estoqueController.getEstoque);
router.get('/estoque/busca', estoqueController.getEstoquebyName);
router.post('/estoque', estoqueController.cadastrarEstoque);

export default router;