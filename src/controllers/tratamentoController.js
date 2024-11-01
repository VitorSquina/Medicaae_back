import Tratamento from '../models/Tratamento.js';

class TratamentoController {
    static cadastrarTratamento = async (req, res) => {
        const { nome_paciente, medicamento, dosagem, observacao, status = "Em andamento" } = req.body;
        try {
            const newTratamento = new Tratamento({ nome_paciente, medicamento, dosagem, observacao, status });
            await newTratamento.save();
            res.status(201).json({ message: 'Tratamento criado com sucesso!', data: newTratamento });
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };

    static getTratamentoStatus = async(req, res) => {
        const { status } = req.params;
        try {
            const tratamentos = await Tratamento.find({ status });
            res.status(200).json(tratamentos);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };
}

export default TratamentoController;
