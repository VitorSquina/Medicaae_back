import Tratamento from '../models/Tratamento.js';

class TratamentoController {
    static cadastrarTratamento = async (req, res) => {
        let tratamento = new Tratamento(req.body);
        try {
            const newTratamento = new Tratamento(tratamento);
            await newTratamento.save();
            res.status(201).json(newTratamento);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };

    static getTratamentoStatus = async(req, res) => {
        const  status  = req.query.status;
        try {
            const tratamentos = await Tratamento.find({"status": status});
            res.status(200).send(tratamentos);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };
}

export default TratamentoController;
