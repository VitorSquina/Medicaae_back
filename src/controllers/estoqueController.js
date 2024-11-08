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
    
    static adicionarEmEstoqueExistente = async (req, res) => {
        try {
            const { nome_medicamento, dosagem, quantidade } = req.body;
            
            // Procura o estoque existente com base no nome e na dosagem
            const estoqueExistente = await Estoque.findOne({ nome_medicamento, dosagem });
            
            if (estoqueExistente) {
                // Se o estoque existe, adiciona a quantidade
                estoqueExistente.quantidade += Number(quantidade);
                await estoqueExistente.save(); // Salva o documento completo
                
                return res.status(200).json({ message: "Estoque atualizado com sucesso.", estoque: estoqueExistente });
            } else {
                // Se não existe, cria um novo registro
                const novoEstoque = new Estoque(req.body);
                await novoEstoque.save();
                
                return res.status(201).json({ message: "Novo estoque adicionado com sucesso.", estoque: novoEstoque });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao adicionar ao estoque", error });
        }
    };
    

    static getEstoque = async (req, res) => {
        try {
            const estoque = await Estoque.find();
            if(estoque !== null){
            res.status(200).send(estoque);
        } else {
            res.status(404).json("Não foi possivel listar  os estoques");
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