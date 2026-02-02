import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { pizzasAPI } from '../services/api';
import './Cardapio.css';

function Cardapio() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    loadPizzas();
  }, []);

  const loadPizzas = async () => {
    try {
      const data = await pizzasAPI.getAll();
      setPizzas(data);
    } catch (error) {
      console.error('Erro ao carregar pizzas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    alert(`${pizza.nome} adicionado ao carrinho!`);
  };

  if (loading) {
    return <div className="loading">Carregando cardápio...</div>;
  }

  return (
    <div className="cardapio-page">
      <div className="container">
        <h1 className="page-title">Nosso Cardápio</h1>
        <p className="page-subtitle">Escolha sua pizza favorita!</p>

        <div className="pizzas-grid">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <img
                src={pizza.imagem}
                alt={pizza.nome}
                className="pizza-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400';
                }}
              />
              <div className="pizza-content">
                <div className="pizza-header">
                  <h3 className="pizza-name">{pizza.nome}</h3>
                  <span className="pizza-size">{pizza.tamanho}</span>
                </div>
                <p className="pizza-description">{pizza.descricao}</p>
                <div className="pizza-footer">
                  <div className="pizza-price">R$ {pizza.preco.toFixed(2)}</div>
                  <button
                    className="btn btn-add"
                    onClick={() => handleAddToCart(pizza)}
                  >
                    🛒 Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
