import pool from '../../connection.js';

export const createCronograma = async (cronogramaData) => {
  const { id_paciente, horario, intervalo, duracao, descricao, status } = cronogramaData;
  try {
    const query = `
      INSERT INTO cronograma (id_paciente, horario, intervalo, duracao, descricao, status)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [id_paciente, horario, intervalo, duracao, descricao, status];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar cronograma:', error);
    throw error;
  }
};

export const getAllCronogramas = async (id_tratamento) => {
  try {
    const query = `
      SELECT * FROM cronograma WHERE id_tratamento = $1;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar cronogramas:', error);
    throw error;
  }
};

export const getCronogramasByPaciente = async (id_paciente) => {
  try {
    const query = `
      SELECT * FROM cronograma WHERE id_paciente = $1;
    `;
    const result = await pool.query(query, [id_paciente]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar cronogramas pelo paciente:', error);
    throw error;
  }
};

export const updateCronograma = async (id, updates) => {
  const { horario, intervalo, duracao, descricao, status } = updates;
  try {
    const query = `
      UPDATE cronograma
      SET horario = $1, intervalo = $2, duracao = $3, descricao = $4, status = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [horario, intervalo, duracao, descricao, status, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar cronograma:', error);
    throw error;
  }
};

export const deleteCronograma = async (id) => {
  try {
    const query = `
      DELETE FROM cronograma WHERE id = $1 RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao remover cronograma:', error);
    throw error;
  }
};
