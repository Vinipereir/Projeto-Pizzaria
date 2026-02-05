import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  const { isAdmin, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  
  return isAdmin() ? children : <Navigate to="/login" />;
}

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cardapio" 
          element={
            <ProtectedRoute>
              <Cardapio />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/sobre" 
          element={
            <ProtectedRoute>
              <Sobre />
            </ProtectedRoute>
          } 
        />
        
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Layout />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
