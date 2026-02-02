const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

// Simulando banco de dados de usuários
let users = [
  {
    id: '1',
    nome: 'Admin',
    email: 'admin@pizzaria.com',
    senha: '$2a$10$LZPAxqPIyy/ty23cklAsWeh/5VmPkBBClH7sVyTzvXaXDe3H/OJhS', // senha: admin123
    telefone: '(11) 99999-9999',
    role: 'admin'
  },
  {
    id: '2',
    nome: 'João Silva',
    email: 'joao@email.com',
    senha: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // senha: 123456
    telefone: '(11) 98888-8888',
    endereco: 'Rua das Flores, 123',
    role: 'cliente'
  }
];

// Registro de novo usuário
const register = async (req, res) => {
  try {
    const { nome, email, senha, telefone, endereco } = req.body;

    // Validações
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });
    }

    // Verificar se email já existe
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criar novo usuário
    const newUser = {
      id: uuidv4(),
      nome,
      email,
      senha: hashedPassword,
      telefone: telefone || '',
      endereco: endereco || '',
      role: 'cliente'
    };

    users.push(newUser);

    // Gerar token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso',
      token,
      user: {
        id: newUser.id,
        nome: newUser.nome,
        email: newUser.email,
        telefone: newUser.telefone,
        endereco: newUser.endereco,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Buscar usuário
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(senha, user.senha);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    // Gerar token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        endereco: user.endereco,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

// Obter perfil do usuário
const getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json({
    id: user.id,
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
    endereco: user.endereco,
    role: user.role
  });
};

// Atualizar perfil
const updateProfile = (req, res) => {
  const { nome, telefone, endereco } = req.body;
  const userIndex = users.findIndex(u => u.id === req.user.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  users[userIndex] = {
    ...users[userIndex],
    nome: nome || users[userIndex].nome,
    telefone: telefone || users[userIndex].telefone,
    endereco: endereco || users[userIndex].endereco
  };

  res.json({
    message: 'Perfil atualizado com sucesso',
    user: {
      id: users[userIndex].id,
      nome: users[userIndex].nome,
      email: users[userIndex].email,
      telefone: users[userIndex].telefone,
      endereco: users[userIndex].endereco,
      role: users[userIndex].role
    }
  });
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile
};
