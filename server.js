const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/auth/routes/authRoutes'); 
const medicamentoRoutes = require('./src/cadastro/routes/medicamentoRoutes'); 


const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);  

app.use('/medicamentos', medicamentoRoutes);

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
