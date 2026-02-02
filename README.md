# 🍕 Sistema de Pizzaria

Sistema completo de gerenciamento de pizzaria com front-end em React e back-end em Node.js com autenticação, sistema de pedidos e painel administrativo.

## 📚 Documentação

- 🚀 **[INICIO_RAPIDO.md](INICIO_RAPIDO.md)** - Comece aqui! Passos para instalar e rodar
- 📖 **[GUIA_USO.md](GUIA_USO.md)** - Manual completo de uso do sistema
- 🔑 **[CREDENCIAIS.md](CREDENCIAIS.md)** - Usuários e senhas de teste
- ✅ **[CHECKLIST.md](CHECKLIST.md)** - Todas as funcionalidades implementadas

## 📋 Funcionalidades

### Para Clientes:

- ✅ Navegação sem login (modo visitante)
- 🔐 Sistema de login e cadastro
- 🍕 Visualizar cardápio completo
- 🛒 Adicionar pizzas ao carrinho
- 📦 Fazer pedidos (com ou sem login)
- 📋 Ver histórico de pedidos
- 👤 Gerenciar perfil

### Para Administradores:

- 🎯 Painel de comandas com todos os pedidos
- 📊 Atualizar status dos pedidos em tempo real
- 🍕 CRUD completo de pizzas
- 👥 Visualizar dados dos clientes

### Geral:

- 🎨 Design moderno e responsivo
- 📱 Interface mobile-friendly
- 🔒 Sistema de autenticação JWT
- 💳 Informações da pizzaria (endereço, telefone, horários)

## 🚀 Tecnologias Utilizadas

### Back-end

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- Bcrypt.js (criptografia de senhas)
- CORS
- UUID (geração de IDs únicos)

### Front-end

- React 18
- React Router DOM v6
- Context API (gerenciamento de estado)
- Axios
- CSS3 com animações
- Google Fonts (Poppins)

## 📦 Instalação

### 1. Instalar dependências do Back-end

```bash
cd backend
npm install
```

### 2. Instalar dependências do Front-end

```bash
cd frontend
npm install
```

## ▶️ Como Executar

### 1. Iniciar o Back-end

Em um terminal, execute:

```bash
cd backend
npm start
```

O servidor estará rodando em: `http://localhost:5000`

Para modo de desenvolvimento com auto-reload:

```bash
npm run dev
```

### 2. Iniciar o Front-end

Em outro terminal, execute:

```bash
cd frontend
npm start
```

A aplicação abrirá automaticamente em: `http://localhost:3000`

## 👥 Usuários de Teste

### Administrador:

- **Email:** admin@pizzaria.com
- **Senha:** admin123

### Cliente:

- **Email:** joao@email.com
- **Senha:** 123456

## 📡 Endpoints da API

### Autenticação

- **POST** `/api/auth/register` - Registrar novo usuário
- **POST** `/api/auth/login` - Fazer login
- **GET** `/api/auth/profile` - Obter perfil (requer autenticação)
- **PUT** `/api/auth/profile` - Atualizar perfil (requer autenticação)

### Pizzas

- **GET** `/api/pizzas` - Lista todas as pizzas
- **GET** `/api/pizzas/:id` - Busca uma pizza específica
- **POST** `/api/pizzas` - Cria uma nova pizza
- **PUT** `/api/pizzas/:id` - Atualiza uma pizza existente
- **DELETE** `/api/pizzas/:id` - Deleta uma pizza

### Pedidos

- **POST** `/api/pedidos/guest` - Criar pedido sem login (público)
- **POST** `/api/pedidos` - Criar pedido (requer autenticação)
- **GET** `/api/pedidos/meus-pedidos` - Listar pedidos do usuário (requer autenticação)
- **GET** `/api/pedidos` - Listar todos os pedidos (apenas admin)
- **GET** `/api/pedidos/:id` - Buscar pedido específico (requer autenticação)
- **PATCH** `/api/pedidos/:id/status` - Atualizar status do pedido (apenas admin)

### Exemplo de corpo da requisição (POST/PUT):

```json
{
  "nome": "Margherita",
  "descricao": "Molho de tomate, mussarela, manjericão e azeite",
  "preco": 35.9,
  "tamanho": "Média",
  "imagem": "https://exemplo.com/pizza.jpg"
}
```

## 🎨 Recursos de Design

- Gradientes modernos e vibrantes
- Animações suaves
- Cards com efeito hover
- Modal para criação/edição
- Scrollbar personalizada
- Layout responsivo (Grid CSS)
- Tipografia elegante (Poppins)

## 📝 Estrutura do Projeto

```
Projeto-Pizzaria/
├── backend/
│   ├── controllers/
│   │   └── pizzaController.js
│   ├── routes/
│   │   └── pizzas.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── PizzaCard.js
    │   │   └── PizzaModal.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## 🔧 Configuração

### Variáveis de Ambiente (Backend)

Crie um arquivo `.env` na pasta `backend`:

```env
PORT=5000
NODE_ENV=development
```

### API URL (Frontend)

A URL da API está configurada em `frontend/src/services/api.js`:

```javascript
const API_URL = "http://localhost:5000/api/pizzas";
```

## 💡 Dicas de Uso

1. **Adicionar Pizza**: Clique no botão "Adicionar Nova Pizza" e preencha o formulário
2. **Editar Pizza**: Clique no botão "Editar" no card da pizza
3. **Deletar Pizza**: Clique no botão "Deletar" (pedirá confirmação)
4. **Imagens**: Use URLs válidas para as imagens. Caso não especifique, uma imagem padrão será usada

## 🎯 Próximas Melhorias

- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação de usuários
- [ ] Sistema de pedidos
- [ ] Upload de imagens
- [ ] Categorias de pizzas
- [ ] Sistema de avaliações

## 👨‍💻 Desenvolvimento

Para executar em modo de desenvolvimento:

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm start
```

## 📄 Licença

Este projeto está sob a licença ISC.

---

Desenvolvido com ❤️ e 🍕
