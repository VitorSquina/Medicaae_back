const Cronograma = require('../models/Cronograma.js');

const cadastrarCronogramas = async (req, res) => {
    const { id_paciente, horario, intervalo, duracao, descricao, status } = req.body;
    try {
        const newCronograma = new Cronograma({id_paciente, horario, intervalo, duracao, descricao, status});
        await newCronograma.save()
        res.status(201).json('Cronograma criado com sucesso!', novoCronograma);
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
};

const getCronogramasStatus = async (req, res) => {
    const { status } = req.params;
    try{
        const cronogramas = await Cronograma.findAll({status});
        res.status(200).json(cronogramas);
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
};

module.exports = { cadastrarCronogramas, getCronogramasStatus};