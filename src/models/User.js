import pool from '../../connection.js'; // Conexão com PostgreSQL

export const createUser = async (userData) => {
  const { name, cpf, email, password } = userData;
  try {
    const query = `
      INSERT INTO users (name, cpf, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, cpf, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const getUserByCPF = async (cpf) => {
  try {
    const query = `
      SELECT * FROM users WHERE cpf = $1;
    `;
    const result = await pool.query(query, [cpf]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário pelo CPF:', error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const query = `
      SELECT * FROM users WHERE email = $1;
    `;
    const result = await pool.query(query, [email]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário pelo email:', error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const query = `
      SELECT * FROM users;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
};
