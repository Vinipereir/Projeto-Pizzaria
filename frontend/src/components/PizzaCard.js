import React from 'react';

function PizzaCard({ pizza, onEdit, onDelete }) {
  return (
    <div className="pizza-card">
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
        <div className="pizza-price">
          R$ {pizza.preco.toFixed(2)}
        </div>
        <div className="pizza-actions">
          <button className="btn btn-edit" onClick={() => onEdit(pizza)}>
            ✏️ Editar
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(pizza.id)}>
            🗑️ Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
