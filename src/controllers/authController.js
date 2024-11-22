import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, getUserByEmail, getAllUsers } from '../models/User.js';

class AuthController {
  static register = async (req, res) => {
    const { name, cpf, email, password } = req.body;

    console.log("Dados recebidos do front-end:", req.body);
    try {
      const existingUser = await getUserByEmail(email);
      if (existingUser) return res.status(400).json({ message: 'Usuário já existe' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const cleanCpf = cpf.replace(/\D/g, '');
      const newUser = await createUser({
        name,
        cpf: cleanCpf,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await getUserByEmail(email);
      if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(400).json({ message: 'Senha incorreta' });

      const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
  };

  static getUsers = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro no servidor ao buscar usuários', details: error.message });
    }
  };
}

export default AuthController;
