# 🔑 CREDENCIAIS DE ACESSO

## 👨‍💼 Administrador

```
Email: admin@pizzaria.com
Senha: admin123
```

**Permissões:**

- ✅ Visualizar todas as comandas/pedidos
- ✅ Atualizar status dos pedidos
- ✅ Adicionar, editar e deletar pizzas
- ✅ Ver informações de todos os clientes

---

## 👤 Cliente de Teste

```
Email: joao@email.com
Senha: 123456
```

**Permissões:**

- ✅ Fazer pedidos
- ✅ Ver histórico de pedidos
- ✅ Editar perfil próprio
- ✅ Ver cardápio

---

## 🌐 Acesso sem Login (Visitante)

Você também pode:

- ✅ Navegar pelo site
- ✅ Ver o cardápio
- ✅ Fazer pedidos sem cadastro
- ❌ Não terá histórico de pedidos

---

## 🚀 URLs de Acesso

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Status:** http://localhost:5000 (GET para testar)

---

## 📝 Como Criar Nova Conta

1. Acesse: http://localhost:3000/register
2. Preencha o formulário
3. Nova conta será criada automaticamente com role "cliente"

**OBS:** Para criar um novo admin, você precisa editar manualmente o arquivo `backend/controllers/authController.js` e mudar o role de 'cliente' para 'admin' após o registro.

---

## 🔒 Segurança

- Senhas são criptografadas com Bcrypt (10 rounds)
- JWT Token válido por 7 dias
- Token armazenado em localStorage
- Rotas protegidas por middleware

---

**⚠️ IMPORTANTE: Este é um sistema de demonstração. Não use essas senhas em produção!**
