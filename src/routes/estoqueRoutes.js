import express from 'express';
const router = express.Router();
import estoqueController from '../controllers/estoqueController.js';

router.post('/cadastrar', estoqueController.cadastrarEstoque);
router.patch('/update', estoqueController.atualizarEstoque)
router.get('/', estoqueController.getEstoquebyName);
router.get('/all/:id_user', estoqueController.getEstoque);

export default router;