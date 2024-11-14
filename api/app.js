import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', emailRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});