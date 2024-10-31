const express = require('express');
const router = express.Router();
const cronogramaController =  require('../controllers/cronogramaController.js');

router.post('/cronograma', cronogramaController);
router.get('/cronograma/:status', cronogramaController);

module.exports = router;