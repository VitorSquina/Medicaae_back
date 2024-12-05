import pool from '../../connection.js';

export const createCronograma = async (cronogramaData) => {
  const { id_paciente, id_tratamento, horario, descricao, status } = cronogramaData;

  try {
    const query = `
      INSERT INTO cronograma (id_paciente, id_tratamento, horario, descricao, status)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [id_paciente, id_tratamento, horario, descricao, status];
    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar cronograma:', error);
    throw error;
  }
};

export const getAllCronogramas = async (id_user) => {
  try {
    const query = `
      SELECT c.* 
      FROM cronograma c
      JOIN paciente p ON c.id_paciente = p.idPaciente
      WHERE p.id_user = $1
    `;
    
    const result = await pool.query(query, [id_user]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar cronograma', error);
    throw error;
  }
};

export const getCronogramasByStatus = async (status, id_user) => {
  try {
    const query = `
      SELECT c.* 
      FROM cronograma c
      JOIN paciente p ON c.id_paciente = p.idPaciente
      WHERE c.status = $1 AND p.id_user = $2
    `;
    
    const result = await pool.query(query, [status, id_user]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar cronogramas pelo status e id_user:', error);
    throw error;
  }
};

export const alterarStatusCronograma = async (status, id) => {
  try {
    // Log para depuração
    console.log('Atualizando o status:', status, 'para o cronograma com ID:', id);

    const query = `
      UPDATE cronograma
      SET status = $1
      WHERE id = $2
      RETURNING *;
    `;
    
    // Executa a query para atualizar o status
    const result = await pool.query(query, [status, id]);

    console.log('Resultado da query:', result.rows);  // Log de resposta

    if (result.rows.length === 0) {
      console.warn('Nenhum cronograma encontrado com o ID fornecido.');
    }

    return result.rows;
  } catch (error) {
    console.error('Erro ao alterar o status do cronograma:', error);
    throw error;
  }
};