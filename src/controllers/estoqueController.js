import { addEstoque, getEstoqueByNome, getAllEstoque, updateQuantidade } from '../models/Estoque.js';

const estoqueController = {
  cadastrarEstoque: async (req, res) => {
    const { qtdEstoque, idMed, id_user } = req.body;
    try {
      const novoEstoque = await addEstoque({ qtdMedicamento, idMed, id_user });
      res.status(201).json({ message: 'Item adicionado ao estoque com sucesso!', data: novoEstoque });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar item ao estoque', details: error.message });
    }
  },

  getEstoquebyName: async (req, res) => {
    const { nome, id_user } = req.body;
    try {
      const estoque = await getEstoqueByNome(nome, id_user);
  
      // Verifique se o estoque foi encontrado (não apenas se o array está vazio)
      if (estoque.length === 0) {
        return res.status(404).json({ message: 'Item não encontrado' });
      }
  
      res.status(200).json(estoque);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar estoque', details: error.message });
    }
  },

  getEstoque: async (req, res) => {
    try {
      const { id_user } = req.params
      const estoque = await getAllEstoque(id_user);
      res.status(200).json(estoque);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar estoque', details: error.message });
    }
  },

  atualizarEstoque: async (req, res) => {
    const { qtdMedicamento, idMed, id_user } = req.body; 
    try {
      if (!qtdMedicamento || !idMed || !id_user) {
        return res.status(400).json({ message: 'Parâmetros inválidos. Verifique qtdMedicamento, idMed e id_user.' });
      }
      const EstoqueAtualizado = await updateQuantidade(idMed, qtdMedicamento, id_user);
      if (!EstoqueAtualizado) {
        return res.status(404).json({ message: 'Estoque não encontrado' });
      }
      res.status(200).json({ message: 'Estoque atualizado com sucesso!', data: EstoqueAtualizado });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  }
};

export default estoqueController;
