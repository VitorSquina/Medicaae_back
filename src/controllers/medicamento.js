import  pool from "../../connection.js";

const medicamentoList = async (req, res) => {
    try{
    const listaDeMedicamentos = await pool.query('select * from medicamento');
    res.status(200).json(listaDeMedicamentos.rows);
    } catch (error) {
        console.error("Erro ao buscar medicamentos: ", error);
        res.status(500).send("Erro no servidor");
    }
}

export default medicamentoList
