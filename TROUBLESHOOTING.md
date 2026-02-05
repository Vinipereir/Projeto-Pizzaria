# Configuração de Variáveis de Ambiente

## 🔧 Vercel (Frontend)

Vá em: Settings → Environment Variables

Adicione:

```
REACT_APP_API_URL=https://projeto-pizzaria-bha7.onrender.com/api
```

**IMPORTANTE**: Depois de adicionar, clique em "Redeploy" para aplicar!

## 🔧 Render (Backend)

Vá em: Environment

Atualize:

```
FRONTEND_URL=https://projeto-pizzaria-gules-three.vercel.app
NODE_ENV=production
JWT_SECRET=seu_secret_super_seguro_123456
PORT=5000
```

---

## 🔍 Como Testar

### 1. Testar Backend

Abra no navegador do celular:

```
https://projeto-pizzaria-bha7.onrender.com/
```

Deve aparecer: `{"message":"API Pizzaria - Sistema funcionando!"}`

Se demorar 30-60s, é normal (backend "acordando").

### 2. Testar Frontend

```
https://projeto-pizzaria-gules-three.vercel.app/login
```

### 3. Abrir Console do Navegador (Mobile)

**Android Chrome:**

1. Conecte o celular no PC via USB
2. No PC, abra: `chrome://inspect`
3. Clique em "Inspect" no seu dispositivo
4. Vá para a aba "Console"

**iOS Safari:**

1. Ative "Web Inspector" em: Ajustes → Safari → Avançado
2. No Mac, abra Safari → Develop → [seu iPhone]
3. Veja o console

Você verá logs tipo:

```
API URL configurada: https://...
Requisição: POST https://.../api/auth/login
```

---

## ❌ Erros Comuns e Soluções

### Erro: "Network Error" ou "Erro de conexão"

**Causa**: Backend não está respondendo ou URL errada
**Solução**:

- Verifique se a variável `REACT_APP_API_URL` está correta na Vercel
- Teste o backend diretamente no navegador
- Aguarde 30s e tente novamente (Render free tier "dorme")

### Erro: "CORS"

**Causa**: Backend não está aceitando requisições do frontend
**Solução**:

- Certifique-se que a variável `FRONTEND_URL` no Render está correta
- Faça um novo deploy do backend após atualizar

### Erro: "401 Unauthorized"

**Causa**: Credenciais incorretas
**Solução**: Verifique email e senha

### Erro: "timeout"

**Causa**: Backend demorou mais de 30s
**Solução**: Aumente o timeout ou aguarde o backend acordar na primeira vez

---

## 📝 Checklist de Deploy

Backend (Render):

- [ ] Código atualizado no GitHub
- [ ] Deploy realizado com sucesso
- [ ] Variável `FRONTEND_URL` configurada
- [ ] Teste manual: `https://projeto-pizzaria-bha7.onrender.com/` funciona

Frontend (Vercel):

- [ ] Código atualizado no GitHub
- [ ] Variável `REACT_APP_API_URL` configurada
- [ ] Redeploy realizado
- [ ] Teste manual: Login funciona no desktop
- [ ] Teste manual: Login funciona no mobile
