// Simulando um banco de dados em memória
let pizzas = [
  {
    id: 1,
    nome: 'Margherita',
    descricao: 'Molho de tomate, mussarela, manjericão e azeite',
    preco: 35.90,
    tamanho: 'Média',
    imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
  },
  {
    id: 2,
    nome: 'Calabresa',
    descricao: 'Molho de tomate, mussarela, calabresa e cebola',
    preco: 38.90,
    tamanho: 'Média',
    imagem: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
  },
  {
    id: 3,
    nome: 'Portuguesa',
    descricao: 'Presunto, mussarela, ovos, cebola, azeitonas e orégano',
    preco: 42.90,
    tamanho: 'Média',
    imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
  }
];

let nextId = 4;

// GET - Listar todas as pizzas
const getAllPizzas = (req, res) => {
  res.json(pizzas);
};

// GET - Buscar pizza por ID
const getPizzaById = (req, res) => {
  const id = parseInt(req.params.id);
  const pizza = pizzas.find(p => p.id === id);
  
  if (!pizza) {
    return res.status(404).json({ message: 'Pizza não encontrada' });
  }
  
  res.json(pizza);
};

// POST - Criar nova pizza
const createPizza = (req, res) => {
  const { nome, descricao, preco, tamanho, imagem } = req.body;
  
  if (!nome || !preco) {
    return res.status(400).json({ message: 'Nome e preço são obrigatórios' });
  }
  
  const novaPizza = {
    id: nextId++,
    nome,
    descricao: descricao || '',
    preco: parseFloat(preco),
    tamanho: tamanho || 'Média',
    imagem: imagem || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400'
  };
  
  pizzas.push(novaPizza);
  res.status(201).json(novaPizza);
};

// PUT - Atualizar pizza
const updatePizza = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, descricao, preco, tamanho, imagem } = req.body;
  
  const index = pizzas.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Pizza não encontrada' });
  }
  
  pizzas[index] = {
    id,
    nome: nome || pizzas[index].nome,
    descricao: descricao !== undefined ? descricao : pizzas[index].descricao,
    preco: preco !== undefined ? parseFloat(preco) : pizzas[index].preco,
    tamanho: tamanho || pizzas[index].tamanho,
    imagem: imagem || pizzas[index].imagem
  };
  
  res.json(pizzas[index]);
};

// DELETE - Deletar pizza
const deletePizza = (req, res) => {
  const id = parseInt(req.params.id);
  const index = pizzas.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Pizza não encontrada' });
  }
  
  pizzas.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllPizzas,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
};
