import React, { useState, useEffect } from 'react';
import { pizzasAPI } from '../services/api';
import PizzaCard from '../components/PizzaCard';
import PizzaModal from '../components/PizzaModal';

function AdminPizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    loadPizzas();
  }, []);

  const loadPizzas = async () => {
    try {
      setLoading(true);
      const data = await pizzasAPI.getAll();
      setPizzas(data);
    } catch (error) {
      console.error('Erro ao carregar pizzas:', error);
      alert('Erro ao carregar pizzas');
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setSelectedPizza(null);
    setShowModal(true);
  };

  const handleEdit = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar esta pizza?')) {
      try {
        await pizzasAPI.delete(id);
        await loadPizzas();
        alert('Pizza deletada com sucesso!');
      } catch (error) {
        console.error('Erro ao deletar pizza:', error);
        alert('Erro ao deletar pizza');
      }
    }
  };

  const handleSave = async (pizzaData) => {
    try {
      if (selectedPizza) {
        await pizzasAPI.update(selectedPizza.id, pizzaData);
      } else {
        await pizzasAPI.create(pizzaData);
      }
      setShowModal(false);
      await loadPizzas();
      alert('Pizza salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar pizza:', error);
      alert('Erro ao salvar pizza');
    }
  };

  if (loading) {
    return <div className="loading">Carregando pizzas...</div>;
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1 className="page-title">🍕 Gerenciar Pizzas</h1>

        <button className="add-button" onClick={handleAddNew}>
          ➕ Adicionar Nova Pizza
        </button>

        {pizzas.length === 0 ? (
          <div className="empty-state">
            <h2>Nenhuma pizza cadastrada</h2>
            <p>Clique no botão acima para adicionar sua primeira pizza!</p>
          </div>
        ) : (
          <div className="pizzas-grid">
            {pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                pizza={pizza}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {showModal && (
          <PizzaModal
            pizza={selectedPizza}
            onClose={() => setShowModal(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}

export default AdminPizzas;
