import React, { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import "./index.css";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <BookList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
