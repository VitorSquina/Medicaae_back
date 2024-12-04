import pool from '../../connection.js';

export const createPaciente = async (cronogramaData) => {
    const { id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta } = cronogramaData;
    try {
      const query = `
        INSERT INTO paciente (id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `;
      const values = [id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao cadastrar pacientes:', error);
      throw error;
    }
  };

  export const getAllPacientes = async (id_user) => {
    try {
      const query = `
        SELECT * FROM paciente WHERE id_user = $1;
      `;
      const result = await pool.query(query, [id_user]);
      return result.rows;
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
      throw error;
    }
  };

  export const getPacienteById = async (id_paciente, id_user) => {
    try {
      const query = `
        SELECT * FROM paciente WHERE id_paciente = $1 AND id_user = $2;
      `;
      const result = await pool.query(query, [id_paciente, id_user]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao buscar paciente:', error);
      throw error;
    }
  };

  export const buscarPorNome = async (nomePaciente,id_user) => {
    try {
      const query = `
      SELECT * FROM paciente WHERE nomePaciente = $1 AND id_user = $2 
    `;
    const result = await pool.query(query, [nomePaciente, id_user]);
    return result.rows[0];
    } catch (error) {
      console.error('Erro ao buscar paciente:', error);
      throw error;
    }
  };

  export const updatePaciente = async (idPaciente, updates) => {
    const { id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta} = updates;
    try {
        const query = `
            UPDATE paciente
            SET nomePaciente = $2, idadePaciente = $3, genero = $4, numContato = $5, cpf = $6, alergia = $7, statusAlta = $8
            WHERE idPaciente = $9 AND id_user = $1
            RETURNING *;
        `;
        
        const values = [id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta, idPaciente];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao atualizar paciente:', error);
        throw error;
    }
};

export const deletePaciente = async (id_paciente) => {
    try {
      const query = `
        DELETE FROM paciente WHERE idPaciente = $1 RETURNING *;
      `;
      const result = await pool.query(query, [id_paciente]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao remover medicamento:', error);
      throw error;
    }
  };
