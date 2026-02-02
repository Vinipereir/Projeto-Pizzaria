const express = require('express');
const router = express.Router();
const {
  createPedido,
  getMeusPedidos,
  getAllPedidos,
  getPedidoById,
  updateStatusPedido,
  createPedidoGuest
} = require('../controllers/pedidoController');
const { auth, isAdmin } = require('../middleware/auth');

// Rota pública - criar pedido sem login
router.post('/guest', createPedidoGuest);

// Rotas protegidas - cliente
router.post('/', auth, createPedido);
router.get('/meus-pedidos', auth, getMeusPedidos);
router.get('/:id', auth, getPedidoById);

// Rotas admin
router.get('/', auth, isAdmin, getAllPedidos);
router.patch('/:id/status', auth, isAdmin, updateStatusPedido);

module.exports = router;
