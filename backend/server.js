const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares - CORS configurado para produção e desenvolvimento
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL // URL do frontend na Vercel
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
const pizzasRoutes = require('./routes/pizzas');
const authRoutes = require('./routes/auth');
const pedidosRoutes = require('./routes/pedidos');

app.use('/api/pizzas', pizzasRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/pedidos', pedidosRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API Pizzaria - Sistema funcionando!' });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
