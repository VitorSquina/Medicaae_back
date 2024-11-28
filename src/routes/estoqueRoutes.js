import express from 'express';
const router = express.Router();
import estoqueController from '../controllers/estoqueController.js';

router.post('/cadastrar', estoqueController.cadastrarEstoque);
router.get('/:nome', estoqueController.getEstoquebyName);
router.get('/', estoqueController.getEstoque);

export default router;