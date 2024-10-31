const express = require('express');
const router = express.Router();
const estoqueController =  require('../controllers/estoquecontroller.js');

router.post('/estoque', estoqueController);
router.get('/estoque/:nome', estoqueController);
router.get('/estoque/:indicacao', estoqueController);
router.get('/estoque', estoqueController);
router.get('/estoque/buscar', estoqueController.buscarEstoque);

module.exports = router;