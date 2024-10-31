const Estoque = require('../models/Estoque.js');

const cadastrarEstoque = async (req, res) => {
    const { nome_medicamento, quantidade, dosagem, observacao } = req.body;
    try {
        const newEstoque = new Cronograma({ nome_medicamento, quantidade, dosagem, observacao });
        await newEstoque.save()
        res.status(201).json('Estoque de medicamento criado com sucesso!', novoCronograma);
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
};

const getEstoque = async (req, res) => {
    try {
        const estoque = await Cronograma.findAll();
        res.status(200).json(estoque);
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }

    const getEstoque = async (req, res) => {
        const { nome_medicamento } = req.params;
        try {
            const estoque = await Cronograma.findAll(nome_medicamento);
            res.status(200).json(estoque);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    }
};

module.exports = { cadastrarEstoque, getEstoque };