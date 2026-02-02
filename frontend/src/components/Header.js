import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">🍕 Pizzaria Delícia</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cardapio" className="nav-link">Cardápio</Link>
          <Link to="/sobre" className="nav-link">Sobre Nós</Link>
          {isAdmin() && <Link to="/admin" className="nav-link">Admin</Link>}
        </nav>

        <div className="user-section">
          <button className="cart-button" onClick={() => navigate('/carrinho')}>
            🛒
            {getItemCount() > 0 && (
              <span className="cart-badge">{getItemCount()}</span>
            )}
          </button>

          {isAuthenticated() ? (
            <div className="user-menu">
              <button 
                className="user-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                👤 {user?.nome}
              </button>
              {showDropdown && (
                <div className="dropdown">
                  <Link 
                    to="/perfil" 
                    className="dropdown-item"
                    onClick={() => setShowDropdown(false)}
                  >
                    Meu Perfil
                  </Link>
                  <Link 
                    to="/meus-pedidos" 
                    className="dropdown-item"
                    onClick={() => setShowDropdown(false)}
                  >
                    Meus Pedidos
                  </Link>
                  {isAdmin() && (
                    <Link 
                      to="/admin/pizzas" 
                      className="dropdown-item"
                      onClick={() => setShowDropdown(false)}
                    >
                      Gerenciar Pizzas
                    </Link>
                  )}
                  <button className="dropdown-item" onClick={handleLogout}>
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="btn-primary" onClick={() => navigate('/login')}>
              Entrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
