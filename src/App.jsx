import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import usersData from "./data/users";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import BookList from "./components/BookList";
import BookPage from "./components/BookPage";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [activeUser, setActiveUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Kontrollera om det finns en aktiv användare i localStorage när sidan laddas
  useEffect(() => {
    const savedUser = localStorage.getItem("activeUser");
    if (savedUser) {
      setActiveUser(JSON.parse(savedUser));
    }

    // Ladda varukorgens antal från localStorage
    const savedCartCount = localStorage.getItem("cartCount");
    if (savedCartCount) {
      setCartCount(Number(savedCartCount));
    }
  }, []);

  // Spara aktiv användare till localStorage varje gång den ändras
  useEffect(() => {
    if (activeUser) {
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
  }, [activeUser]);

  // Hantera inloggningsåtgärden
  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setActiveUser(user);
    } else {
      alert("Ogiltiga inloggningsuppgifter");
    }
  };

  // Hantera utloggningsåtgärden
  const handleLogout = () => {
    setActiveUser(null);
    setCartCount(0); // Återställ varukorgens antal vid utloggning
    localStorage.removeItem("activeUser"); // Ta bort aktiv användare från localStorage
  };

  // Hantera att lägga till varor i varukorgen
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  // Hantera att ta bort varor från varukorgen
  const handleRemoveFromCart = () => {
    setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Hantera användarregistrering
  const handleRegister = (username, password) => {
    // Kontrollera om användarnamnet redan finns
    if (users.some(u => u.username === username)) {
      alert("Användarnamnet är redan taget");
      return;
    }

    // Skapa en ny användare och lägg till den i användarlistan
    const newUser = { username, password };
    setUsers([...users, newUser]);
    alert("Registreringen var lyckad! Vänligen logga in.");
    setShowRegister(false); // Byt till inloggningsformulär efter registrering
  };

  // Spara varukorgens antal i localStorage vid omladdning av sidan
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount); // Spara varukorgens antal till localStorage
  }, [cartCount]);

  return (
    <Router>
      <div className="app">
        {activeUser ? (
          <>
            <Header cartCount={cartCount} onLogout={handleLogout} />
            <Routes>
              <Route
                path="/"
                element={<BookList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />}
              />
              <Route path="/book/:id" element={<BookPage />} />
            </Routes>
          </>
        ) : showRegister ? (
          <RegisterForm onRegister={handleRegister} switchToLogin={() => setShowRegister(false)} />
        ) : (
          <div className="login-page">
            <LoginForm onLogin={handleLogin} switchToRegister={() => setShowRegister(true)} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
