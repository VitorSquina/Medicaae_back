import pool from '../../connection.js';

export const createTratamento = async (tratamentoData) => { 
  const { id_paciente, id_medicamento, nome_paciente, dosagem, intervalo, data_inicial, duracao, data_final, observacao, status } = tratamentoData; 
  try { 
    const query = `INSERT INTO tratamento (id_paciente, id_medicamento, nome_paciente, dosagem, intervalo,
     data_inicial, duracao, data_final, observacao, status) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`; 
    const values = [id_paciente, id_medicamento, nome_paciente, dosagem, intervalo, data_inicial, duracao, data_final, observacao, status]; 
    const result = await pool.query(query, values); 
    return result.rows[0]; 
  } catch (error) { 
    console.error('Erro ao criar tratamento:', error); 
    throw error; 
  } 
};

export const getTratamentosByStatus = async (status, id_user) => {
  try {
    const query = `
      SELECT t.* 
      FROM tratamento t
      JOIN paciente p ON t.id_paciente = p.idPaciente
      WHERE t.status = $1 AND p.id_user = $2
    `;
    
    const result = await pool.query(query, [status, id_user]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar tratamentos pelo status e id_user:', error);
    throw error;
  }
};

export const getAllTratamento = async ( id_user) => {
  try {
    const query = `
      SELECT t.* 
      FROM tratamento t
      JOIN paciente p ON t.id_paciente = p.idPaciente
      WHERE p.id_user = $1
    `;
    
    const result = await pool.query(query, [id_user]);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar tratamentos', error);
    throw error;
  }
};

export const updateTratamento = async (id_tratamento, nome, medicamentoNome, dosagem, status, observacao) => {
  try {
    const medicamentoQuery = `
     SELECT id_med
     FROM medicamento 
     WHERE nome = $1;`;
    const medicamentoResult = await pool.query(medicamentoQuery, [medicamentoNome]);
    const id_medicamento = medicamentoResult.rows[0].id_med;
    if (medicamentoResult.rows.length === 0) {
      throw new Error('Medicamento não encontrado.');
    } else {
  
    const query = `
    UPDATE tratamento
     SET id_medicamento = $1, dosagem = $2, status = $3, observacao = $4, nome_paciente = $6 
     WHERE id_tratamento = $5 
     RETURNING *;`;
    const values = [id_medicamento,dosagem,status,observacao,id_tratamento, nome];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
  } catch (error) {
    console.error('Erro ao atualizar tratamento:', error);
    throw error;
  }
};
