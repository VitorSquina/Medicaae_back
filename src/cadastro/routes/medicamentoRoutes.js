const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamentocontroller');

router.post('/cadastrar', medicamentoController.cadastrarMedicamento);

router.get('/listar', medicamentoController.listarMedicamentos);

router.delete('/remover/:id', medicamentoController.removerMedicamento);

module.exports = router;