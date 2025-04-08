import React, { useState, useEffect } from "react";
import BookItem from "./BookItem"; 

const BookList = ({ onAddToCart, onRemoveFromCart }) => {
  const [books, setBooks] = useState([]); // State för att spara books
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://santosnr6.github.io/Data/books.json");  // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);  // Set books till data från API
      } catch (error) {
        setError(error.message);  // Set error om API call failar
      } finally {
        setLoading(false);  // Stäng av loading när API call är färdigt
      }
    };

    fetchBooks();  // Fetcha böcker när component mountar
  }, []);  // kör bara 1 gång

  if (loading) {
    return <div>Loading books...</div>;  // Displaya loading message medans api fetchar
  }

  if (error) {
    return <div>Error: {error}</div>;  // Displaya error message om api call failar
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default BookList;
