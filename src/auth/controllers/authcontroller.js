const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Função de registro
const register = async (req, res) => {
  const { name, cpf, email, password } = req.body;

  console.log("Dados recebidos do front-end:", req.body);
  try {
    // Verificar se o usuário já existe (baseado no email)
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Usuário já existe' });

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const cleanCpf = cpf.replace(/\D/g, '');
    const newUser = new User({ name, cpf: cleanCpf, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor', details: error.message });
  }
};

// Função de login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Senha incorreta' });

    // Gerar token JWT criptografia
    const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor wdsfwefewqf', details: error.menssage });
  }
};

// Função para buscar todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name cpf email');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor ao buscar usuários', details: error.message });
  }
};

// Exportar as funções
module.exports = {
  register,
  login,
  getUsers
};
