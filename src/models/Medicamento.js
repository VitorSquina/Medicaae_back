import pool from '../../connection.js'; 

export const addMedicamento = async (medicamentoData) => {
  const { nome, dose, descricao, tipo } = medicamentoData;
  try {
    const query = `
      INSERT INTO medicamento (nome, dose, descricao, tipo)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [nome, dose, descricao, tipo];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao adicionar medicamento:', error);
    throw error;
  }
};

export const getAllMedicamentos = async () => {
  try {
    const query = `
      SELECT * FROM medicamento;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    throw error;
  }
};

export const getMedicamentoByNome = async (nome) => {
  try {
    const query = `
      SELECT * FROM medicamento WHERE nome = $1;
    `;
    const result = await pool.query(query, [nome]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar medicamento pelo nome:', error);
    throw error;
  }
};

export const updateMedicamento = async (id, updates) => {
  const { nome, dosagem, descricao } = updates;
  try {
    const query = `
      UPDATE medicamento
      SET nome = $1, dosagem = $2, descricao = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [nome, dosagem, descricao, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar medicamento:', error);
    throw error;
  }
};

export const deleteMedicamento = async (id) => {
  try {
    const query = `
      DELETE FROM medicamento WHERE id = $1 RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao remover medicamento:', error);
    throw error;
  }
};
