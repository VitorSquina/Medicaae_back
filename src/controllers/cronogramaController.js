import Cronograma from '../models/Cronograma.js';

class CronogramaController {
    static cadastrarCronograma = async (req, res) => {
        let cronograma = new Cronograma(req.body);
        try {
            const newCronograma = await cronograma.save();
            
            res.status(201).json(newCronograma.toJSON());
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };

    static getCronogramasStatus = async (req, res) => {
        const { status } = req.params;
        try {
            const cronogramas = await Cronograma.findAll({ status });
            res.status(200).json(cronogramas);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    }
};

export default CronogramaController;