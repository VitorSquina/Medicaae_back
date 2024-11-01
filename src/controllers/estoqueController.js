import Estoque from '../models/Estoque.js';

class EstoqueController {
    static cadastrarEstoque = async (req, res) => {
        let estoque = new Estoque(req.body);
        
        try {
            const newEstoque = await estoque.save();
            
            res.status(201).json(newEstoque.toJSON());
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };

    static getEstoque = async (req, res) => {
        try {
            const estoque = await Estoque.find();
            if(estoque !== null){
            res.status(200).send(estoque);
        } else {
            res.status(404).json("Não foi possivel cadastrar novo estoque");
        }
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    }

    static getEstoquebyName = async (req, res) => {
        const medicamento = req.query.nome_medicamento;
        try {
            const estoque = await Estoque.find({ "nome_medicamento": medicamento });
            if (estoque.length === 0) {
                return res.status(404).json({ message: 'Medicamento não encontrado' });
            }
            res.status(200).json(estoque);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', details: error.message });
        }
    };
    
};

export default EstoqueController;