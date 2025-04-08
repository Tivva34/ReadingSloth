// RoutesWrapper.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import BookPage from "./BookPage";

const RoutesWrapper = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<BookList onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />}
      />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  );
};

export default RoutesWrapper;
