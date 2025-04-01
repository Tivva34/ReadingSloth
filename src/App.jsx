import React, { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import "./index.css";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((prevCount) => Math.max(prevCount - 1, 0)); // Förhindra negativa värden
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <BookList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
