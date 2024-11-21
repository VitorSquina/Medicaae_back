import Cronograma from '../models/Cronograma.js';

class CronogramaController {
    static cadastrarCronograma = async (req, res, next) => {
        let cronograma = new Cronograma(req.body);
        try {
            const newCronograma = await cronograma.save();
            res.status(201).json(newCronograma.toJSON());
        } catch (erro) {
            next(erro)
        }
    };

    static getCronogramasStatus = async (req, res, next) => {
        const id_user = req.params.id_user;
        const status = req.params.status;
        try {
            const cronogramas = await Cronograma.findAll({ "status": status, "id_user": id_user });
            res.status(200).json(cronogramas);
        } catch (erro) {
            next(erro)
        }
    }
};

export default CronogramaController;