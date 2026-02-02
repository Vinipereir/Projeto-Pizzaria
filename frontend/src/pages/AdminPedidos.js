import React, { useState, useEffect } from 'react';
import { pedidosAPI } from '../services/api';
import './AdminPedidos.css';

function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPedidos();
  }, []);

  const loadPedidos = async () => {
    try {
      const data = await pedidosAPI.getAll();
      setPedidos(data);
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
      alert('Erro ao carregar pedidos');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (pedidoId, novoStatus) => {
    try {
      await pedidosAPI.updateStatus(pedidoId, novoStatus);
      await loadPedidos();
      alert('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pendente: '#ff9800',
      preparando: '#2196f3',
      saiu_para_entrega: '#9c27b0',
      entregue: '#4caf50',
      cancelado: '#f44336'
    };
    return colors[status] || '#666';
  };

  const getStatusText = (status) => {
    const texts = {
      pendente: 'Pendente',
      preparando: 'Preparando',
      saiu_para_entrega: 'Saiu para Entrega',
      entregue: 'Entregue',
      cancelado: 'Cancelado'
    };
    return texts[status] || status;
  };

  if (loading) {
    return <div className="loading">Carregando pedidos...</div>;
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1 className="page-title">📋 Comandas - Pedidos</h1>
        
        {pedidos.length === 0 ? (
          <div className="empty-message">Nenhum pedido no momento</div>
        ) : (
          <div className="pedidos-list">
            {pedidos.map((pedido) => (
              <div key={pedido.id} className="pedido-card">
                <div className="pedido-header">
                  <div>
                    <h3>Pedido #{pedido.id.slice(0, 8)}</h3>
                    <p className="pedido-cliente">👤 {pedido.clienteNome}</p>
                    {pedido.telefone && <p className="pedido-telefone">📞 {pedido.telefone}</p>}
                  </div>
                  <div 
                    className="pedido-status"
                    style={{ background: getStatusColor(pedido.status) }}
                  >
                    {getStatusText(pedido.status)}
                  </div>
                </div>

                <div className="pedido-info">
                  <p><strong>📍 Endereço:</strong> {pedido.endereco}</p>
                  <p><strong>📅 Data:</strong> {new Date(pedido.dataCriacao).toLocaleString('pt-BR')}</p>
                  {pedido.observacoes && (
                    <p><strong>📝 Observações:</strong> {pedido.observacoes}</p>
                  )}
                </div>

                <div className="pedido-itens">
                  <h4>Itens do Pedido:</h4>
                  {pedido.itens.map((item, index) => (
                    <div key={index} className="item-linha">
                      <span>{item.quantidade}x {item.nome}</span>
                      <span>R$ {((item.preco || 0) * item.quantidade).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="pedido-footer">
                  <div className="pedido-total">
                    <strong>Total: R$ {(pedido.total || 0).toFixed(2)}</strong>
                  </div>
                  
                  <select 
                    className="status-select"
                    value={pedido.status}
                    onChange={(e) => handleStatusChange(pedido.id, e.target.value)}
                  >
                    <option value="pendente">Pendente</option>
                    <option value="preparando">Preparando</option>
                    <option value="saiu_para_entrega">Saiu para Entrega</option>
                    <option value="entregue">Entregue</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPedidos;
