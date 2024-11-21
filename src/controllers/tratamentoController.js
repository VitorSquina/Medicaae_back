import Tratamento from '../models/Tratamento.js';

class TratamentoController {
    static cadastrarTratamento = async (req, res) => {
        let tratamento = new Tratamento(req.body);
        try {
            const newTratamento = new Tratamento(tratamento);
            await newTratamento.save();
            res.status(201).json(newTratamento);
        } catch (error) {
            next(erro)
        }
    };

    static getTratamentoStatus = async(req, res) => {
        const id_user = req.query.id_user;
        const  status  = req.query.status;
        try {
            const tratamentos = await Tratamento.find({"id_user": id_user, "status": status});
            res.status(200).send(tratamentos);
        } catch (error) {
            next(erro)
        }
    };
}

export default TratamentoController;
