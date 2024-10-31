const express = require('express');
const router = express.Router();
const tratamentoController = require('../controllers/tratamentocontroller.js');

router.post('/tratamento', tratamentoController);
router.get('/tratamento/:id', tratamentoController);



module.exports = router;