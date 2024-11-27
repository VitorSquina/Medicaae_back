import express from 'express';
const router = express.Router();
import estoqueController from '../controllers/estoqueController.js';

router.post('/estoque/cadastrar', estoqueController.cadastrarEstoque);
router.get('/estoque/:nome', estoqueController.getEstoquebyName);
router.get('/estoque', estoqueController.getEstoque);

export default router;