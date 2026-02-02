# 📖 Guia de Uso - Sistema de Pizzaria

## 🎯 Visão Geral

O sistema possui três tipos de acesso:

1. **Visitante** - Pode navegar e fazer pedidos sem login
2. **Cliente** - Usuário cadastrado com histórico de pedidos
3. **Administrador** - Acesso ao painel de gerenciamento

## 🏠 Navegação Principal

### Header (Barra Superior)

- **Logo** - Volta para home
- **Home** - Página inicial
- **Cardápio** - Lista de pizzas disponíveis
- **Sobre Nós** - Informações da pizzaria
- **🛒 Carrinho** - Visualizar itens selecionados
- **Perfil/Entrar** - Botão de login ou perfil do usuário

## 👤 Para Clientes

### 1. Criar Conta

1. Clique em "Entrar" no header
2. Clique em "Cadastre-se"
3. Preencha: Nome, Email, Senha, Telefone, Endereço
4. Clique em "Cadastrar"
5. Você será redirecionado para o cardápio

### 2. Fazer Login

1. Clique em "Entrar"
2. Digite email e senha
3. Clique em "Entrar"

**Usuário de teste:**

- Email: joao@email.com
- Senha: 123456

### 3. Fazer um Pedido

#### Opção A - Com Login:

1. Faça login
2. Vá em "Cardápio"
3. Clique em "🛒 Adicionar" nas pizzas desejadas
4. Clique no ícone do carrinho no header
5. Revise seu pedido
6. Clique em "Finalizar Pedido"
7. Seus dados serão preenchidos automaticamente

#### Opção B - Sem Login:

1. Vá em "Cardápio"
2. Clique em "🛒 Adicionar" nas pizzas desejadas
3. Clique no ícone do carrinho
4. Preencha: Nome, Telefone, Endereço
5. Clique em "Finalizar Pedido"

### 4. Acompanhar Pedidos

1. Faça login
2. Clique no seu nome (header)
3. Selecione "Meus Pedidos"
4. Veja o status de cada pedido:
   - 🟠 Pendente
   - 🔵 Preparando
   - 🟣 Saiu para Entrega
   - 🟢 Entregue
   - 🔴 Cancelado

### 5. Editar Perfil

1. Faça login
2. Clique no seu nome (header)
3. Selecione "Meu Perfil"
4. Atualize suas informações
5. Clique em "Salvar"

## 👨‍💼 Para Administradores

### 1. Acessar Painel Admin

**Login Admin:**

- Email: admin@pizzaria.com
- Senha: admin123

Após login, você verá a opção "Admin" no header.

### 2. Gerenciar Pedidos (Comandas)

1. Faça login como admin
2. Clique em "Admin" no header
3. Visualize todos os pedidos em tempo real
4. Para cada pedido você pode:
   - Ver dados do cliente
   - Ver itens do pedido
   - Ver endereço de entrega
   - **Atualizar status** usando o dropdown

**Status disponíveis:**

- Pendente → Preparando → Saiu para Entrega → Entregue
- Cancelado (a qualquer momento)

### 3. Gerenciar Pizzas

1. No header, clique no seu nome
2. Selecione "Gerenciar Pizzas"

**Adicionar Pizza:**

1. Clique em "➕ Adicionar Nova Pizza"
2. Preencha:
   - Nome da Pizza\*
   - Descrição
   - Preço\* (em reais)
   - Tamanho (Pequena, Média, Grande, Família)
   - URL da Imagem
3. Clique em "💾 Salvar"

**Editar Pizza:**

1. Clique em "✏️ Editar" no card da pizza
2. Modifique os campos desejados
3. Clique em "💾 Salvar"

**Deletar Pizza:**

1. Clique em "🗑️ Deletar" no card da pizza
2. Confirme a exclusão

## 📄 Página Sobre Nós

Contém informações importantes:

- 🍕 História da pizzaria
- 📍 Endereço completo
- 📞 Telefones de contato
- 🕐 Horários de funcionamento
- 💳 Formas de pagamento
- 🚚 Informações de entrega

## 🛒 Carrinho de Compras

### Funcionalidades:

- Ver todos os itens adicionados
- Alterar quantidade de cada item
- Remover itens
- Ver subtotal e total
- Finalizar pedido

### Badges:

- O número no ícone 🛒 mostra quantos itens há no carrinho

## 🔒 Segurança

### Autenticação:

- Senhas criptografadas com Bcrypt
- Tokens JWT com validade de 7 dias
- Rotas protegidas por middleware

### Roles:

- Cliente: Pode fazer pedidos e ver seus próprios pedidos
- Admin: Acesso total (comandas + gerenciar pizzas)

## 💡 Dicas

1. **Sem cadastro**: Você pode pedir sem criar conta
2. **Com cadastro**: Histórico de pedidos e dados salvos
3. **Admin**: Fique de olho nas comandas em tempo real
4. **Imagens**: Use URLs do Unsplash para fotos bonitas de pizzas
5. **Mobile**: O sistema é totalmente responsivo

## ⚙️ Funcionalidades Técnicas

### Context API:

- **AuthContext**: Gerencia autenticação e usuário
- **CartContext**: Gerencia carrinho de compras

### Rotas Protegidas:

- `/admin/*` - Apenas administradores
- `/perfil` - Apenas usuários autenticados
- `/meus-pedidos` - Apenas usuários autenticados

### Persistência:

- Token JWT salvo no localStorage
- Dados do usuário salvos no localStorage
- Carrinho mantido enquanto a sessão está ativa

## 🆘 Solução de Problemas

### Erro ao fazer login:

- Verifique email e senha
- Use os usuários de teste fornecidos

### Erro ao carregar pizzas:

- Certifique-se que o backend está rodando (porta 5000)
- Verifique o console do navegador

### Pedido não aparece:

- Clientes veem apenas seus pedidos
- Admins veem todos os pedidos

### Não consigo acessar o Admin:

- Apenas contas com role "admin" podem acessar
- Use: admin@pizzaria.com / admin123

## 📱 Responsividade

O sistema se adapta para:

- 📱 Mobile (até 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (acima de 1024px)

---

**Desenvolvido com ❤️ e 🍕**
