import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cardapio from './pages/Cardapio';
import Sobre from './pages/Sobre';
import AdminPedidos from './pages/AdminPedidos';
import AdminPizzas from './pages/AdminPizzas';
import './App.css';

// Componente para proteger rotas de admin
function AdminRoute({ children }) {
  const { isAdmin, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  
  return isAdmin() ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/sobre" element={<Sobre />} />
              
              {/* Rotas Admin */}
              <Route 
                path="/admin" 
                element={
                  <AdminRoute>
                    <AdminPedidos />
                  </AdminRoute>
                } 
              />
              <Route 
                path="/admin/pizzas" 
                element={
                  <AdminRoute>
                    <AdminPizzas />
                  </AdminRoute>
                } 
              />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
