import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <h1>Bem-vindo à Pizzaria Delícia!</h1>
        <p>As melhores pizzas da cidade, feitas com amor e ingredientes frescos</p>
        <div className="hero-buttons">
          <button className="btn btn-large" onClick={() => navigate('/cardapio')}>
            Ver Cardápio
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/sobre')}>
            Saiba Mais
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🍕</div>
          <h3>Pizzas Artesanais</h3>
          <p>Receitas tradicionais e ingredientes selecionados para o melhor sabor</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Entrega Rápida</h3>
          <p>Seu pedido chega quentinho em até 40 minutos</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Pagamento Fácil</h3>
          <p>Aceitamos todas as formas de pagamento</p>
        </div>
      </section>

      <section className="popular-section">
        <h2 className="section-title">Por que escolher a Pizzaria Delícia?</h2>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Qualidade Garantida</h3>
            <p>Mais de 10 anos servindo as melhores pizzas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Chefs Experientes</h3>
            <p>Equipe treinada e apaixonada por gastronomia</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>Ingredientes Frescos</h3>
            <p>Tudo preparado diariamente com produtos selecionados</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
