import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Använd useNavigate här

const BookPage = () => {
  const { id } = useParams();  // Extrahera ID från URL
  const [book, setBook] = useState(null);  // State för att lagra bokdetaljer
  const navigate = useNavigate();  // För att navigera programatiskt

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://santosnr6.github.io/Data/books.json");  // Ersätt med din API-URL
        if (!response.ok) {
          throw new Error("Misslyckades med att hämta böcker");
        }
        const books = await response.json();
        const foundBook = books.find((book) => book.id === parseInt(id)); // Hitta boken baserat på ID
        setBook(foundBook);  // Sätt den hittade boken som state
      } catch (error) {
        console.error(error);  // Hantera fel på ett bra sätt
      }
    };

    fetchBooks();  // Anropa fetch-funktionen när komponenten monteras
  }, [id]);  // Dependency på id säkerställer att fetch körs varje gång bok-ID ändras

  if (!book) {
    return <div>Loading...</div>;  // Visa laddningsmeddelande tills boken hittas
  }

  return (
    <div className="book-page">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.about}</p>
      <button onClick={() => navigate("/")}>Tillbaka till boklistan</button>  {}
    </div>
  );
};

export default BookPage;
