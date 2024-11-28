import { addEstoque, getEstoqueByNome, getAllEstoque } from '../models/Estoque.js';

const estoqueController = {
  cadastrarEstoque: async (req, res) => {
    const { qtdMedicamento, idMed } = req.body;
    try {
      const novoEstoque = await addEstoque({ qtdMedicamento, idMed });
      res.status(201).json({ message: 'Item adicionado ao estoque com sucesso!', data: novoEstoque });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar item ao estoque', details: error.message });
    }
  },

  getEstoquebyName: async (req, res) => {
    const { nome } = req.params;
    try {
      const estoque = await getEstoqueByNome(nome);
      if (!estoque) return res.status(404).json({ message: 'Item não encontrado' });

      res.status(200).json(estoque);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar estoque', details: error.message });
    }
  },

  getEstoque: async (req, res) => {
    try {
      const estoque = await getAllEstoque();
      res.status(200).json(estoque);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar estoque', details: error.message });
    }
  },
};

export default estoqueController;
