import pool from "../../connection";

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

  export const getAllPacientes = async () => {
    try {
      const query = `
        SELECT * FROM paciente;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
      throw error;
    }
  };

  export const getPacienteById = async (id_paciente) => {
    try {
      const query = `
        SELECT * FROM paciente WHERE id_paciente = $1;
      `;
      const result = await pool.query(query, [id_paciente]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao buscar paciente:', error);
      throw error;
    }
  };

  export const updatePaciente = async (id_paciente, updates) => {
    const { id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta, idtratamento } = updates;
    try {
        const query = `
            UPDATE paciente
            SET id_user = $1, nomePaciente = $2, idadePaciente = $3, genero = $4, numContato = $5, cpf = $6, alergia = $7, statusAlta = $8, idtratamento = $9
            WHERE idPaciente = $10
            RETURNING *;
        `;
        
        const values = [id_user, nomePaciente, idadePaciente, genero, numContato, cpf, alergia, statusAlta, idtratamento, id_paciente];

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
        DELETE FROM paciente WHERE id_paciente = $1 RETURNING *;
      `;
      const result = await pool.query(query, [id_paciente]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao remover medicamento:', error);
      throw error;
    }
  };