import React, { useState } from "react";
import booksData from "../assets/books.json"; 
import BookItem from "./BookItem";

const BookList = ({ onAddToCart }) => {
  const [books, setBooks] = useState(booksData);  // använd importerad data direkt

  return (
    <div className="book-list">
      {books.map((book, index) => (
        // använd book.id som key eller fallback till index om id saknas
        <BookItem key={book.id || index} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default BookList;
