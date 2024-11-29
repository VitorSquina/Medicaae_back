import pool from '../../connection.js';

export const createTratamento = async (tratamentoData) => {
  const { nome_paciente, medicamento, dosagem, observacao, status } = tratamentoData;
  try {
    const query = `
      INSERT INTO tratamentos (nome_paciente, medicamento, dosagem, observacao, status) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [nome_paciente, medicamento, dosagem, observacao, status];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar tratamento:', error);
    throw error;
  }
};

export const getTratamentosByStatus = async (status, id_paciente) => {
  try {
    const query = `
      SELECT * FROM tratamentos WHERE status = $1 AND id_paciente = $2;
    `;
    const result = await pool.query(query, [status, id_paciente]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar tratamentos pelo status:', error);
    throw error;
  }
};

export const getTratamentoById = async (id_tratamento) => {
  try {
    const query = `
      SELECT * FROM medicamento WHERE id_tratamento = $1;
    `;
    const result = await pool.query(query, [id_tratamento]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    throw error;
  }
};