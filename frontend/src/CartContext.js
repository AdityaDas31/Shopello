import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [shippingInfo, setShippingInfo] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.name === product.name && item.size === product.size
      );
  
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      }
  
      return [...prevCart, product];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const updateShippingInfo = (info) => {
    setShippingInfo(info);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,shippingInfo,updateShippingInfo }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

