# 🚀 INICIAR O PROJETO - PASSOS RÁPIDOS

## ⚡ Início Rápido (Recomendado)

### 1️⃣ Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```bash
install.bat
```

Aguarde a instalação de todas as dependências (pode levar alguns minutos).

### 2️⃣ Iniciar o Sistema

Após a instalação, execute:

```bash
start.bat
```

Isso abrirá automaticamente 2 terminais:

- Um para o Backend (porta 5000)
- Um para o Frontend (porta 3000)

### 3️⃣ Acessar o Sistema

O navegador abrirá automaticamente em:

```
http://localhost:3000
```

---

## 🔑 Credenciais de Acesso

### Admin:

- Email: `admin@pizzaria.com`
- Senha: `admin123`

### Cliente:

- Email: `joao@email.com`
- Senha: `123456`

---

## 📋 Passo a Passo Manual (Alternativa)

Se preferir fazer manualmente:

### Backend:

```bash
cd backend
npm install
npm start
```

### Frontend (em outro terminal):

```bash
cd frontend
npm install
npm start
```

---

## 🎯 O Que Testar

### 1. Como Visitante (sem login):

1. Acesse a Home
2. Vá em "Cardápio"
3. Adicione pizzas ao carrinho
4. Finalize pedido informando seus dados

### 2. Como Cliente:

1. Faça login com joao@email.com / 123456
2. Navegue pelo cardápio
3. Faça um pedido
4. Veja "Meus Pedidos"
5. Edite seu perfil

### 3. Como Admin:

1. Faça login com admin@pizzaria.com / admin123
2. Clique em "Admin" no menu
3. Veja as comandas/pedidos
4. Atualize o status dos pedidos
5. Vá em "Gerenciar Pizzas"
6. Adicione, edite ou delete pizzas

---

## 📚 Documentação Completa

Leia os arquivos:

- `README.md` - Documentação técnica
- `GUIA_USO.md` - Como usar o sistema
- `CREDENCIAIS.md` - Usuários de teste
- `CHECKLIST.md` - Funcionalidades implementadas

---

## ⚠️ Problemas Comuns

### "npm não é reconhecido"

- Instale o Node.js em: https://nodejs.org

### "Porta já em uso"

- Backend usa porta 5000
- Frontend usa porta 3000
- Feche outros programas usando essas portas

### "Erro ao conectar com API"

- Certifique-se que o backend está rodando
- Verifique se está em http://localhost:5000

---

## 🎨 Recursos Visuais

O sistema possui:

- 🎨 Design moderno com gradientes roxo/azul
- ✨ Animações suaves
- 📱 Totalmente responsivo
- 🌈 Cores vibrantes e atrativas
- 🖼️ Imagens das pizzas

---

## 💡 Dicas

1. Abra o console do navegador (F12) para ver logs
2. Use o modo visitante para testar pedidos sem cadastro
3. Experimente todas as funcionalidades do admin
4. Teste em diferentes tamanhos de tela (mobile/desktop)

---

## 📞 Estrutura de Pastas

```
Projeto-Pizzaria/
├── backend/                 # Servidor Node.js
│   ├── controllers/         # Lógica de negócio
│   ├── routes/             # Rotas da API
│   ├── middleware/         # Autenticação/Autorização
│   └── server.js           # Arquivo principal
│
├── frontend/               # Aplicação React
│   ├── public/            # Arquivos estáticos
│   └── src/
│       ├── components/    # Componentes reutilizáveis
│       ├── context/       # Context API
│       ├── pages/         # Páginas da aplicação
│       └── services/      # Chamadas API
│
├── install.bat            # Script de instalação
├── start.bat             # Script para iniciar
└── README.md             # Documentação

```

---

## ✅ Checklist de Verificação

Antes de começar, verifique:

- [ ] Node.js instalado (v14 ou superior)
- [ ] npm funcionando
- [ ] Portas 3000 e 5000 livres
- [ ] Terminal com permissões adequadas

---

## 🎉 Pronto para Começar!

Execute `install.bat` e depois `start.bat` na raiz do projeto!

**Bom desenvolvimento! 🍕**
