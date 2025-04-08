import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importera useNavigate för navigation

const BookItem = ({ book, onAddToCart, onRemoveFromCart }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Initiera navigate hooken

  const increaseCount = (e) => {
    e.stopPropagation(); // Förhindra att klickhändelsen triggar navigation
    setCount(count + 1);
    onAddToCart(book); // Anropa föräldrafunktionen för att uppdatera kundvagnen
  };

  const decreaseCount = (e) => {
    e.stopPropagation(); // Förhindra att klickhändelsen triggar navigation
    if (count > 0) {
      setCount(count - 1);
      onRemoveFromCart(book); // Anropa föräldrafunktionen för att uppdatera kundvagnen
    }
  };

  const handleItemClick = () => {
    navigate(`/book/${book.id}`); // Navigera till bokens sida när itemet klickas
  };

  return (
    <div className="book-card" onClick={handleItemClick}> 
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
      <p>{book.about}</p>

      <div className="cart-buttons">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

export default BookItem;
