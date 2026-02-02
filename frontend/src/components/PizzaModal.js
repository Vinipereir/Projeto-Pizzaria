import React, { useState, useEffect } from 'react';

function PizzaModal({ pizza, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    tamanho: 'Média',
    imagem: ''
  });

  useEffect(() => {
    if (pizza) {
      setFormData({
        nome: pizza.nome,
        descricao: pizza.descricao,
        preco: pizza.preco,
        tamanho: pizza.tamanho,
        imagem: pizza.imagem
      });
    }
  }, [pizza]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{pizza ? '✏️ Editar Pizza' : '➕ Nova Pizza'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome da Pizza *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Ex: Margherita"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva os ingredientes..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço (R$) *</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tamanho">Tamanho</label>
            <select
              id="tamanho"
              name="tamanho"
              value={formData.tamanho}
              onChange={handleChange}
            >
              <option value="Pequena">Pequena</option>
              <option value="Média">Média</option>
              <option value="Grande">Grande</option>
              <option value="Família">Família</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imagem">URL da Imagem</label>
            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formData.imagem}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn btn-submit">
              💾 Salvar
            </button>
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              ❌ Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PizzaModal;
