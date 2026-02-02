const { v4: uuidv4 } = require('uuid');

// Simulando banco de dados de pedidos
let pedidos = [];

// Criar novo pedido
const createPedido = (req, res) => {
  try {
    const { itens, endereco, observacoes } = req.body;
    
    if (!itens || itens.length === 0) {
      return res.status(400).json({ message: 'O pedido deve conter ao menos um item' });
    }

    // Calcular total
    const total = itens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);

    const novoPedido = {
      id: uuidv4(),
      clienteId: req.user?.id || 'guest',
      clienteNome: req.user?.nome || 'Cliente sem cadastro',
      itens,
      total,
      endereco: endereco || '',
      observacoes: observacoes || '',
      status: 'pendente',
      dataCriacao: new Date().toISOString()
    };

    pedidos.push(novoPedido);

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      pedido: novoPedido
    });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }
};

// Listar pedidos do cliente
const getMeusPedidos = (req, res) => {
  const meusPedidos = pedidos.filter(p => p.clienteId === req.user.id);
  res.json(meusPedidos);
};

// Listar todos os pedidos (Admin)
const getAllPedidos = (req, res) => {
  res.json(pedidos);
};

// Obter pedido por ID
const getPedidoById = (req, res) => {
  const pedido = pedidos.find(p => p.id === req.params.id);
  
  if (!pedido) {
    return res.status(404).json({ message: 'Pedido não encontrado' });
  }

  // Verificar se o usuário pode ver este pedido
  if (req.user.role !== 'admin' && pedido.clienteId !== req.user.id) {
    return res.status(403).json({ message: 'Acesso negado' });
  }

  res.json(pedido);
};

// Atualizar status do pedido (Admin)
const updateStatusPedido = (req, res) => {
  const { status } = req.body;
  const pedidoIndex = pedidos.findIndex(p => p.id === req.params.id);

  if (pedidoIndex === -1) {
    return res.status(404).json({ message: 'Pedido não encontrado' });
  }

  const statusValidos = ['pendente', 'preparando', 'saiu_para_entrega', 'entregue', 'cancelado'];
  if (!statusValidos.includes(status)) {
    return res.status(400).json({ message: 'Status inválido' });
  }

  pedidos[pedidoIndex].status = status;
  pedidos[pedidoIndex].dataAtualizacao = new Date().toISOString();

  res.json({
    message: 'Status atualizado com sucesso',
    pedido: pedidos[pedidoIndex]
  });
};

// Criar pedido sem autenticação
const createPedidoGuest = (req, res) => {
  try {
    const { itens, nomeCliente, telefone, endereco, observacoes } = req.body;
    
    if (!itens || itens.length === 0) {
      return res.status(400).json({ message: 'O pedido deve conter ao menos um item' });
    }

    if (!nomeCliente || !telefone || !endereco) {
      return res.status(400).json({ message: 'Nome, telefone e endereço são obrigatórios' });
    }

    // Calcular total
    const total = itens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);

    const novoPedido = {
      id: uuidv4(),
      clienteId: 'guest',
      clienteNome: nomeCliente,
      telefone,
      itens,
      total,
      endereco,
      observacoes: observacoes || '',
      status: 'pendente',
      dataCriacao: new Date().toISOString()
    };

    pedidos.push(novoPedido);

    res.status(201).json({
      message: 'Pedido criado com sucesso',
      pedido: novoPedido
    });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }
};

module.exports = {
  createPedido,
  getMeusPedidos,
  getAllPedidos,
  getPedidoById,
  updateStatusPedido,
  createPedidoGuest
};
