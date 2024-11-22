import { mongoose } from "mongoose";

export default function manipuladorDeErros
    (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados forncecidos estão incorretos." })
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const mensagensErro = Object.values(erro.errors)
        .map(erro => erro.message) //reescrever as mensagens do object em um message.error
        .join(";");
        res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` })
    }else {
        res.status(500).json({ erro: 'Erro interno no servidor', details: erro.message });
    }
}
