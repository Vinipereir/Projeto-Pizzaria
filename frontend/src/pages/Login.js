import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Tentando fazer login...');
      await login(formData);
      console.log('Login bem-sucedido!');
      navigate('/home');
    } catch (err) {
      console.error('Erro no login:', err);
      
      let errorMessage = 'Erro ao fazer login';
      
      if (!err.response) {
        errorMessage = 'Erro de conexão. Aguarde 30s e tente novamente (backend iniciando).';
      } else if (err.response.status === 401) {
        errorMessage = 'Email ou senha incorretos';
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-logo">
        <h1 className="pizzaria-logo">🍕 Pizzaria Delícia</h1>
      </div>
      <div className="auth-container">
        <h2>Entrar</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="auth-switch">
          Não tem uma conta?
          <Link to="/register">Cadastre-se</Link>
        </div>

        <div className="auth-switch">
          <Link to="/cardapio">Pedir sem cadastro</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
