import pool from '../../connection.js'; // Importa a conexão com o banco

// Função para adicionar um novo medicamento
export const addMedicamento = async (medicamentoData) => {
  const { nome, dosagem, descricao } = medicamentoData;
  try {
    const query = `
      INSERT INTO medicamento (nome, dosagem, descricao)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [nome, dosagem, descricao];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao adicionar medicamento:', error);
    throw error;
  }
};

// Função para buscar todos os medicamentos
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

// Função para buscar um medicamento pelo nome
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

// Função para atualizar um medicamento
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

// Função para remover um medicamento
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
