const Medicamento = require('../models/Medicamento');

const cadastrarMedicamento = async (req, res) => {
    const {nome, dosagem, descricao} = req.body;

    try{
        const novoMedicamento = new Medicamento({
            nome,
            dosagem,
            descricao,
        });
        
        await novoMedicamento.save();
        res.status(201).json({message: 'Medicamento Cadastrado'});     
    }catch (error) {
        res.status(500).json({message: 'Erro ao cadastrar', details: error.message});
    }
};

const listarMedicamentos = async(req, res) => {
    try{
        const medicamentos = await Medicamento.find({});
        res.status(200).json(medicamentos);
    } catch (error) {
        res.status(500).json({message: 'Erro ao listar Medicamentos', details:error.message});
    }
};

const removerMedicamento = async (req,res) => {
    const {id} = req.params;

    try{
        await Medicamento.findByIdAndDelete(id);
        res.status(200).json({message: 'Medicamento Removido com sucesso'});

    }catch (error){
        res.status(500).json({error: 'Erro ao remover medicamento', details:error.message})
    }
}

module.exports = {
    cadastrarMedicamento,
    listarMedicamentos,
    removerMedicamento
};