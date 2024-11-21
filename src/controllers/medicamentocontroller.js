import Medicamento from '../models/Medicamento.js';

class MedicamentoController {
    static cadastrarMedicamento = async (req, res, next) => {
        const { nome, dosagem, descricao } = req.body;

        try {
            const novoMedicamento = new Medicamento({
                nome,
                dosagem,
                descricao,
            });

            await novoMedicamento.save();
            res.status(201).json({ message: 'Medicamento Cadastrado' });
        } catch (erro) {
            next(erro)
        }
    };

    static listarMedicamentos = async (req, res, next) => {
        try {
            const medicamentos = await Medicamento.find({});
            res.status(200).json(medicamentos);
        } catch (erro) {
            next(erro)
        }
    };

    static removerMedicamento = async (req, res) => {
        const { id } = req.params;

        try {
            await Medicamento.findByIdAndDelete(id);
            res.status(200).json({ message: 'Medicamento Removido com sucesso' });

        } catch (erro) {
            next(erro)
        }
    }
}

export default MedicamentoController;