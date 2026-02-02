import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza, quantidade = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === pizza.id);
      if (existing) {
        return prev.map(item =>
          item.id === pizza.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...prev, { ...pizza, quantidade }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCartItems(prev => prev.filter(item => item.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, quantidade) => {
    if (quantidade <= 0) {
      removeFromCart(pizzaId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === pizzaId ? { ...item, quantidade } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantidade, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
