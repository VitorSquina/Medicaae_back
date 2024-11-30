import pool from '../../connection.js'; // Importa a conexão com o banco

export const addEstoque = async (estoqueData) => {
  const { qtdMedicamento, idMed, id_user } = estoqueData;
  try {
    const query = `
      INSERT INTO estoque (qtdMedicamento, idMed, id_user)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [qtdMedicamento, idMed, id_user];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao adicionar estoque:', error);
    throw error;
  }
};

export const getAllEstoque = async (id_user) => {
  try {
    const query = `
      SELECT * FROM estoque WHERE id_user = $1;
    `;
    const result = await pool.query(query, [id_user]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar estoque:', error);
    throw error;
  }
};

export const getEstoqueByNome = async (nome_medicamento, id_user) => {
  try {
    const query = `
      SELECT m.nome, e.idEstoque, e.qtdMedicamento
      FROM estoque e
      JOIN medicamento m ON e.idMed = m.id_med
      WHERE m.nome ILIKE $1  -- Busca o nome do medicamento (insensível a maiúsculas/minúsculas)
        AND e.id_user = $2;  -- Verifica o id_user na tabela estoque
    `;
    
    const result = await pool.query(query, [`%${nome_medicamento}%`, id_user]);
    return result.rows;  // Retorna todos os resultados encontrados (não apenas o primeiro)
  } catch (error) {
    console.error('Erro ao buscar estoque pelo nome do medicamento:', error);
    throw error;
  }
};


export const updateQuantidade = async (idMed, qtdMedicamento, id_user) => {
  // Validação simples dos parâmetros
  if (!Number.isInteger(qtdMedicamento) || qtdMedicamento <= 0) {
    throw new Error('Quantidade inválida');
  }
  if (!Number.isInteger(idMed) || !Number.isInteger(id_user)) {
    throw new Error('IDs inválidos');
  }

  try {
    const query = `
  UPDATE estoque 
  SET qtdMedicamento = qtdMedicamento + $1
  WHERE idMed = $2 AND id_user = $3 
  RETURNING *;
`;
    const result = await pool.query(query, [qtdMedicamento, idMed, id_user]);
    if (result.rows.length === 0) {
      throw new Error('Estoque não encontrado para os IDs fornecidos');
    }
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar a quantidade do estoque:', error);
    throw error;
  }
};

// export const deleteEstoque = async (id, id_user) => {
//   try {
//     const query = `
//       DELETE FROM estoque WHERE id = $1 AND id_user = $2 RETURNING *;
//     `;
//     const result = await pool.query(query, [id, id_user]);
//     return result.rows[0];
//   } catch (error) {
//     console.error('Erro ao deletar estoque:', error);
//     throw error;
//   }
// };
