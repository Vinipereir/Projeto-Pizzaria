const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

async function testAPI() {
  console.log('🍕 TESTANDO API DA PIZZARIA\n');
  
  try {
    // 1. Testar rota de pizzas
    console.log('1️⃣ Testando GET /api/pizzas...');
    const pizzasResponse = await axios.get(`${API_URL}/pizzas`);
    console.log('✅ Pizzas carregadas:', pizzasResponse.data.length, 'pizzas encontradas\n');
    
    // 2. Testar login de admin
    console.log('2️⃣ Testando POST /api/auth/login (Admin)...');
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'admin@pizzaria.com',
      senha: 'admin123'
    });
    console.log('✅ Login bem-sucedido!');
    console.log('Token:', loginResponse.data.token.substring(0, 20) + '...');
    console.log('Usuário:', loginResponse.data.user.nome);
    console.log('É admin:', loginResponse.data.user.isAdmin, '\n');
    
    const adminToken = loginResponse.data.token;
    
    // 3. Testar perfil com token
    console.log('3️⃣ Testando GET /api/auth/profile (Com token)...');
    const profileResponse = await axios.get(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    console.log('✅ Perfil carregado:', profileResponse.data.nome, '\n');
    
    // 4. Testar criação de pedido (sem autenticação)
    console.log('4️⃣ Testando POST /api/pedidos/guest (Sem autenticação)...');
    const pedidoResponse = await axios.post(`${API_URL}/pedidos/guest`, {
      nomeCliente: 'Cliente Teste',
      telefone: '11999999999',
      endereco: 'Rua Teste, 123',
      itens: [
        { pizzaId: 1, quantidade: 2 }
      ],
      observacoes: 'Pedido de teste'
    });
    console.log('✅ Pedido criado! ID:', pedidoResponse.data.pedido.id, '\n');
    
    // 5. Listar pedidos (precisa ser admin)
    console.log('5️⃣ Testando GET /api/pedidos (Admin)...');
    const pedidosResponse = await axios.get(`${API_URL}/pedidos`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    console.log('✅ Pedidos listados:', pedidosResponse.data.length, 'pedidos encontrados\n');
    
    console.log('🎉 TODOS OS TESTES PASSARAM! API funcionando corretamente!\n');
    
  } catch (error) {
    console.error('❌ ERRO NO TESTE:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Mensagem:', error.response.data.message || error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

testAPI();
