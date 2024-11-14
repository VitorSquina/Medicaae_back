import Estoque from '../models/Estoque.js';
import mongoose from "mongoose";

class EstoqueController {
    static cadastrarEstoque = async (req, res) => {
        //salva o body do tipo Estoque em uma variável
        let estoque = new Estoque(req.body);
        try {
            //procura por um estoque existente no banco
            const estoqueEncontrado = await Estoque.findOne({ nome_medicamento: estoque.nome_medicamento, dosagem: estoque.dosagem });            //se o estoque for diferente de nulo não é possível cadastrar
            if (estoqueEncontrado) {
                res.status(400).json({ message: 'Estoque já cadastrado, apenas atualize ele.' });
            } else {
                const newEstoque = await estoque.save(); //cadastra novo estoque
                res.status(201).json(newEstoque); //retorna o cadastro realizado 
            }
        } catch (erro) {
            if (erro instanceof mongoose.Error.CastError) {
                res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos." })
            } else {
                res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
            }
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
        } catch (erro) {
            if (erro instanceof mongoose.Error.CastError) {
                res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos." })
            } else {
                res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
            }
        }
    };


    static getEstoque = async (req, res) => {
        try {
            //pega todos os registros de estoque
            const estoque = await Estoque.find();
            if (estoque !== null) {
                //se for diferente de null ele retorna o estoque
                res.status(200).send(estoque);
            } else {
                res.status(404).json("Não foi possivel listar  os estoques");
            }
        } catch (erro) {
            if(erro instanceof mongoose.Error.CastError){
                res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos."})
            } else {
            res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
        }
        }
    }

    static getEstoquebyName = async (req, res) => {
        //pega uma query com o nome do medicamento
        const medicamento = req.query.nome_medicamento;
        try {
            if(medicamento != null){
            //procura um estoque com o nome do medicamento fornecido na query
            const estoque = await Estoque.find({ "nome_medicamento": medicamento });
            } else {
                return res.status(400).json({ message: 'O nome do medicamento é obrigatório' });
            }
            if (estoque != null) {
                //se for diferente de nulo retorna um estoque
                res.status(200).json(estoque);
            } else {
                return res.status(404).json({ message: 'Medicamento não encontrado' });
            }
        } catch (erro) {
            if(erro instanceof mongoose.Error.CastError){
                res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos."})
            } else {
            res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
        }
        }
    };

};

export default EstoqueController;