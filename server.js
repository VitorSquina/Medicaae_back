const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const authRoutes = require('./src/routes/auth.js'); // Importa as rotas de autenticação
const app = express();

app.use(cors());

// Middleware para ler JSON
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);  // Define o prefixo de rota como /auth

// Conectar ao MongoDB Atlas
mongoose.connect('mongodb+srv://vitor122703:dorminhoco@cluster0.sweuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado!'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
