import pool from '../../connection.js'; 

export const getAllPacientes = async () => {
  try {
    const query = `
      SELECT * FROM paciente;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar pacientes', error);
    throw error;
  }
};
