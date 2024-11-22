import pool from '../../connection.js'; // Importa a conexão com o banco

export const addEstoque = async (estoqueData) => {
  const { nome_medicamento, quantidade, dosagem, observacao } = estoqueData;
  try {
    const query = `
      INSERT INTO estoque (nome_medicamento, quantidade, dosagem, observacao)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [nome_medicamento, quantidade, dosagem, observacao];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao adicionar estoque:', error);
    throw error;
  }
};

export const getAllEstoque = async () => {
  try {
    const query = `
      SELECT * FROM estoque;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar estoque:', error);
    throw error;
  }
};

export const getEstoqueByNome = async (nome_medicamento) => {
  try {
    const query = `
      SELECT * FROM estoque WHERE nome_medicamento = $1;
    `;
    const result = await pool.query(query, [nome_medicamento]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar estoque pelo nome do medicamento:', error);
    throw error;
  }
};

export const updateQuantidade = async (id, quantidade) => {
  try {
    const query = `
      UPDATE estoque SET quantidade = $1 WHERE id = $2 RETURNING *;
    `;
    const result = await pool.query(query, [quantidade, id]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar a quantidade do estoque:', error);
    throw error;
  }
};

export const deleteEstoque = async (id) => {
  try {
    const query = `
      DELETE FROM estoque WHERE id = $1 RETURNING *;
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao deletar estoque:', error);
    throw error;
  }
};
