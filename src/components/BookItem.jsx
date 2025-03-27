import React from "react";

const BookItem = ({ book, onAddToCart }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
      <p>{book.desc}</p>
      <button onClick={() => onAddToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookItem;
