# 📁 Estrutura Completa do Projeto

```
Projeto-Pizzaria/
│
├── 📄 README.md                    # Documentação principal
├── 📄 INICIO_RAPIDO.md            # Guia início rápido
├── 📄 GUIA_USO.md                 # Manual de uso completo
├── 📄 CREDENCIAIS.md              # Usuários de teste
├── 📄 CHECKLIST.md                # Funcionalidades implementadas
├── 📄 RESUMO.md                   # Resumo visual do projeto
├── 📄 .gitignore                  # Arquivos ignorados pelo Git
├── 🔧 install.bat                 # Script de instalação automática
├── 🚀 start.bat                   # Script para iniciar sistema
│
├── 📂 backend/                    # SERVIDOR NODE.JS
│   ├── 📄 package.json            # Dependências do backend
│   ├── 📄 server.js               # Arquivo principal do servidor
│   ├── 📄 .env                    # Variáveis de ambiente
│   ├── 📄 .gitignore             # Ignore backend
│   │
│   ├── 📂 controllers/            # LÓGICA DE NEGÓCIO
│   │   ├── authController.js     # Autenticação (login, registro, perfil)
│   │   ├── pizzaController.js    # CRUD de pizzas
│   │   └── pedidoController.js   # Gerenciamento de pedidos
│   │
│   ├── 📂 routes/                 # ROTAS DA API
│   │   ├── auth.js               # Rotas de autenticação
│   │   ├── pizzas.js             # Rotas de pizzas
│   │   └── pedidos.js            # Rotas de pedidos
│   │
│   ├── 📂 middleware/             # MIDDLEWARES
│   │   └── auth.js               # Verificação de token e roles
│   │
│   └── 📂 utils/                  # UTILITÁRIOS
│       └── generateHash.js       # Gerar hash de senhas (teste)
│
├── 📂 frontend/                   # APLICAÇÃO REACT
│   ├── 📄 package.json            # Dependências do frontend
│   ├── 📄 .gitignore             # Ignore frontend
│   │
│   ├── 📂 public/                 # ARQUIVOS PÚBLICOS
│   │   └── index.html            # HTML principal
│   │
│   └── 📂 src/                    # CÓDIGO FONTE
│       ├── 📄 index.js            # Entry point React
│       ├── 📄 index.css           # Estilos globais
│       ├── 📄 App.js              # Componente principal + rotas
│       ├── 📄 App.css             # Estilos do App
│       │
│       ├── 📂 components/         # COMPONENTES REUTILIZÁVEIS
│       │   ├── Header.js         # Barra de navegação
│       │   ├── Header.css        # Estilos do header
│       │   ├── PizzaCard.js      # Card de pizza
│       │   └── PizzaModal.js     # Modal criar/editar pizza
│       │
│       ├── 📂 context/            # CONTEXT API
│       │   ├── AuthContext.js    # Estado de autenticação global
│       │   └── CartContext.js    # Estado do carrinho global
│       │
│       ├── 📂 pages/              # PÁGINAS DA APLICAÇÃO
│       │   ├── Home.js           # Página inicial
│       │   ├── Home.css          # Estilos da home
│       │   ├── Login.js          # Página de login
│       │   ├── Register.js       # Página de cadastro
│       │   ├── Auth.css          # Estilos de login/registro
│       │   ├── Cardapio.js       # Lista de pizzas
│       │   ├── Cardapio.css      # Estilos do cardápio
│       │   ├── Sobre.js          # Informações da pizzaria
│       │   ├── Sobre.css         # Estilos sobre
│       │   ├── AdminPedidos.js   # Painel de comandas (admin)
│       │   ├── AdminPedidos.css  # Estilos comandas
│       │   └── AdminPizzas.js    # Gerenciar pizzas (admin)
│       │
│       └── 📂 services/           # SERVIÇOS
│           └── api.js            # Chamadas HTTP (Axios)
│
└── 📊 ESTRUTURA_ARQUIVOS.md      # Este arquivo
```

## 📊 Estatísticas

### Backend

```
Total de arquivos:  11
Controllers:        3
Routes:             3
Middleware:         1
Utils:              1
Config:             3
```

### Frontend

```
Total de arquivos:  20+
Páginas:            10
Componentes:        4
Context:            2
Services:           1
Styles (CSS):       7
```

### Documentação

```
Total de arquivos:  7
Guias:              4
Configs:            3
```

## 🎯 Arquivos Principais

### Backend - server.js

```javascript
// Ponto de entrada do servidor
// Configura Express, CORS, rotas
// Porta: 5000
```

### Frontend - App.js

```javascript
// Componente raiz React
// Configura Router, Context Providers
// Define todas as rotas
```

### Frontend - api.js

```javascript
// Centraliza todas as chamadas HTTP
// Configura Axios e interceptors
// Gerencia tokens JWT
```

## 🔧 Arquivos de Configuração

### Backend

- `package.json` - Dependências Node.js
- `.env` - Variáveis de ambiente (JWT_SECRET, PORT)
- `.gitignore` - Ignora node_modules, .env

### Frontend

- `package.json` - Dependências React
- `.gitignore` - Ignora node_modules, build

## 🚀 Scripts

### install.bat

```batch
# Instala dependências do backend
# Instala dependências do frontend
# Windows batch script
```

### start.bat

```batch
# Abre terminal do backend (npm start)
# Abre terminal do frontend (npm start)
# Windows batch script
```

## 📝 Fluxo de Arquivos

### Requisição típica:

```
1. Usuário acessa frontend (index.html)
   └─> Carrega App.js
       └─> Carrega Router
           └─> Renderiza página (ex: Cardapio.js)
               └─> Chama api.js
                   └─> HTTP Request para backend

2. Backend recebe requisição (server.js)
   └─> Passa por middleware (auth.js)
       └─> Direciona para rota (routes/pizzas.js)
           └─> Executa controller (pizzaController.js)
               └─> Retorna resposta JSON

3. Frontend recebe resposta
   └─> Atualiza estado (useState/Context)
       └─> Re-renderiza componente
           └─> Usuário vê resultado
```

## 🎨 Arquivos de Estilo

```
CSS Global:
├── index.css          # Reset, body, scrollbar
└── App.css            # Container, pizzas-grid, modal

CSS por Página:
├── Home.css           # Hero, features
├── Auth.css           # Login, registro
├── Cardapio.css       # Grid de pizzas
├── Sobre.css          # Seções info
└── AdminPedidos.css   # Comandas

CSS Componentes:
└── Header.css         # Navegação, menu, dropdown
```

## 📦 Dependências Principais

### Backend (package.json)

```json
{
  "express": "Servidor web",
  "cors": "Cross-origin",
  "jsonwebtoken": "Autenticação",
  "bcryptjs": "Criptografia",
  "uuid": "IDs únicos",
  "dotenv": "Env vars"
}
```

### Frontend (package.json)

```json
{
  "react": "UI Library",
  "react-router-dom": "Rotas SPA",
  "axios": "HTTP Client",
  "react-scripts": "Build tools"
}
```

## 🔍 Localizando Funcionalidades

### Quer modificar...

**Login?**

- Frontend: `src/pages/Login.js`
- Backend: `controllers/authController.js`

**Cardápio?**

- Frontend: `src/pages/Cardapio.js`
- Backend: `controllers/pizzaController.js`

**Pedidos?**

- Frontend: `src/pages/AdminPedidos.js`
- Backend: `controllers/pedidoController.js`

**Header/Navegação?**

- Frontend: `src/components/Header.js`

**Estilos globais?**

- Frontend: `src/index.css` ou `src/App.css`

**Autenticação?**

- Frontend: `src/context/AuthContext.js`
- Backend: `middleware/auth.js`

---

**Total de arquivos no projeto: 45+**
**Linhas de código total: ~3500**
