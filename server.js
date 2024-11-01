import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js'; 
import tratamentoRoutes from './src/routes/tratamentoRoutes.js';
import estoqueRoutes from './src/routes/estoqueRoutes.js';  
import medicamentoRoutes from './src/routes/medicamentoRoutes.js'; 
import cronogramaRoutes from './src/routes/cronogramaRoutes.js'; 

const app = express();

app.use(cors());

app.use(json());

app.use('/auth', authRoutes);  

app.use('/medicamentos', medicamentoRoutes);

app.use('/tratamento', tratamentoRoutes);

app.use('/estoque', estoqueRoutes);

app.use('/cronograma', cronogramaRoutes);

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
