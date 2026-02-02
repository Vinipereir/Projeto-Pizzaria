const express = require('express');
const router = express.Router();
const {
  getAllPizzas,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../controllers/pizzaController');

// Rotas CRUD
router.get('/', getAllPizzas);
router.get('/:id', getPizzaById);
router.post('/', createPizza);
router.put('/:id', updatePizza);
router.delete('/:id', deletePizza);

module.exports = router;
