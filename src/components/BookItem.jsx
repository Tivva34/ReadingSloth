import React, { useState } from "react";

const BookItem = ({ book, onAddToCart, onRemoveFromCart }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    onAddToCart(book);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemoveFromCart(book);
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
      <p>{book.desc}</p>

      <div className="cart-buttons">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
};

export default BookItem;
