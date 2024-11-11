import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/emailRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', emailRoutes);

app.get("api/hello", (req, res) => {
    res.json({ message: "Olá do backend Vercel!" });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});