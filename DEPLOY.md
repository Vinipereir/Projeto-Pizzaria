# Deploy do Projeto Pizzaria

## 🚀 Frontend (Vercel)

### Passo a Passo:

1. **Criar conta na Vercel**: https://vercel.com

2. **Instalar Vercel CLI** (opcional):

   ```bash
   npm install -g vercel
   ```

3. **Deploy via Interface Web**:
   - Faça login na Vercel
   - Clique em "Add New Project"
   - Conecte seu repositório GitHub (faça push do código antes)
   - Selecione a pasta `frontend` como root directory
   - Configure a variável de ambiente:
     - `REACT_APP_API_URL` = `https://seu-backend.onrender.com/api`
   - Clique em "Deploy"

4. **Deploy via CLI** (alternativa):
   ```bash
   cd frontend
   vercel
   ```

### Configuração na Vercel:

- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

---

## 🖥️ Backend (Render)

### Passo a Passo:

1. **Criar conta no Render**: https://render.com

2. **Criar Web Service**:
   - Faça login no Render
   - Clique em "New +" → "Web Service"
   - Conecte seu repositório GitHub
   - Configure:
     - **Name**: pizzaria-backend
     - **Root Directory**: `backend`
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **Variáveis de Ambiente no Render**:

   ```
   PORT=5000
   JWT_SECRET=seu_secret_super_seguro_123456
   NODE_ENV=production
   ```

4. **Copiar a URL do backend**:
   - Exemplo: `https://pizzaria-backend-xyz.onrender.com`

5. **Atualizar Frontend na Vercel**:
   - Vá em Settings → Environment Variables
   - Adicione: `REACT_APP_API_URL` = `https://pizzaria-backend-xyz.onrender.com/api`
   - Faça redeploy do frontend

---

## 📝 Checklist Final

Frontend (Vercel):

- [ ] Código no GitHub
- [ ] Projeto criado na Vercel
- [ ] Variável `REACT_APP_API_URL` configurada
- [ ] Deploy realizado com sucesso

Backend (Render):

- [ ] Código no GitHub
- [ ] Web Service criado no Render
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] URL do backend copiada

Integração:

- [ ] URL do backend adicionada no frontend
- [ ] Frontend redeployado
- [ ] Teste de login funcionando
- [ ] Teste de cadastro funcionando
- [ ] Teste de listagem de pizzas funcionando

---

## ⚠️ Limitações do Plano Gratuito

**Render Free**:

- Backend "dorme" após 15 min de inatividade
- Primeira requisição após sleep demora ~30-60s
- 750 horas/mês (suficiente para 1 projeto)

**Vercel Free**:

- 100 GB bandwidth/mês
- Deploy ilimitados
- Sem sleep (sempre ativo)

---

## 🔄 Alternativas

Se quiser tudo em um lugar:

- **Railway**: Frontend + Backend (free tier com limitações)
- **Cyclic**: Backend + Frontend estático
- **Netlify**: Similar à Vercel, também aceita functions

---

## 🆘 Problemas Comuns

### CORS Error:

No `backend/server.js`, certifique-se:

```javascript
app.use(
  cors({
    origin: "https://seu-frontend.vercel.app",
    credentials: true,
  }),
);
```

### API não responde:

- Verifique se a URL no `.env` está correta
- Aguarde 30-60s na primeira requisição (Render wake up)
- Veja os logs no Render Dashboard
