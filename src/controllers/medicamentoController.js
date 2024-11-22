import { addMedicamento, getAllMedicamentos, getMedicamentoByNome, updateMedicamento, deleteMedicamento } from '../models/Medicamento.js';

class MedicamentoController {
  static adicionarMedicamento = async (req, res) => {
    const { nome, dosagem, descricao } = req.body;
    try {
      const novoMedicamento = await addMedicamento({ nome, dosagem, descricao });
      res.status(201).json({ message: 'Medicamento adicionado com sucesso!', data: novoMedicamento });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static listarMedicamentos = async (req, res) => {
    try {
      const medicamentos = await getAllMedicamentos();
      res.status(200).json(medicamentos);
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static buscarPorNome = async (req, res) => {
    const { nome } = req.params;
    try {
      const medicamento = await getMedicamentoByNome(nome);
      if (!medicamento) return res.status(404).json({ message: 'Medicamento não encontrado' });

      res.status(200).json(medicamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static atualizarMedicamento = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
      const medicamentoAtualizado = await updateMedicamento(id, updates);
      if (!medicamentoAtualizado) return res.status(404).json({ message: 'Medicamento não encontrado' });

      res.status(200).json({ message: 'Medicamento atualizado com sucesso!', data: medicamentoAtualizado });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static deletarMedicamento = async (req, res) => {
    const { id } = req.params;
    try {
      const medicamentoRemovido = await deleteMedicamento(id);
      if (!medicamentoRemovido) return res.status(404).json({ message: 'Medicamento não encontrado' });

      res.status(200).json({ message: 'Medicamento removido com sucesso!', data: medicamentoRemovido });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };
}

export default MedicamentoController;
