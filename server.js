import cors from 'cors';
import express, { json } from 'express';
import authRoutes from './src/routes/authRoutes.js'; 
import tratamentoRoutes from './src/routes/tratamentoRoutes.js';
import estoqueRoutes from './src/routes/estoqueRoutes.js';  
import cronogramaRoutes from './src/routes/cronogramaRoutes.js'; 
import medicamentoRoutes from './src/routes/medicamentoRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);  

app.use('/medicamento', medicamentoRoutes);

app.use('/tratamento', tratamentoRoutes);

app.use('/estoque', estoqueRoutes);

app.use('/cronograma', cronogramaRoutes);


app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});
  
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
