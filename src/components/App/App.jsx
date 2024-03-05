import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NavBar from "../NavBar/NavBar";
import CartPage from "../../pages/CartPage";
import ConfirmationPage from "../../pages/ConfirmationPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((currentCartItems) => {
      const itemIndex = currentCartItems.findIndex(
        (item) => item.id === productToAdd.id
      );
      if (itemIndex > -1) {
        const newCart = [...currentCartItems];
        newCart[itemIndex].quantity = (newCart[itemIndex].quantity || 0) + 1;
        return newCart;
      } else {
        return [...currentCartItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== productId);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<SearchPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
