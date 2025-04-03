import React, { useState } from "react";
import usersData from "./data/users";  
import LoginForm from "./components/LoginForm";  
import RegisterForm from "./components/RegisterForm"; 
import BookList from "./components/BookList";  
import Header from "./components/Header";  
import "./index.css";  

const App = () => {
    const [users, setUsers] = useState(usersData);  // State för användardata
    const [activeUser, setActiveUser] = useState(null);  // State för att hålla koll på inloggad användare
    const [showRegister, setShowRegister] = useState(false);  // State för att visa registreringsformulär
    const [cartCount, setCartCount] = useState(0);  // State för att hålla koll på kundvagnens räknare

    // Funktion för inloggning
    const handleLogin = (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);  // Hitta användare med matching användarnamn och lösenord
        if (user) {
            setActiveUser(user);  // Sätt den aktiva användaren om inloggningen lyckades
        } else {
            alert("Invalid credentials");  // Visa varning om inloggningen misslyckas
        }
    };

    // Funktion för registrering
    const handleRegister = (username, password) => {
        if (users.some(u => u.username === username)) {  // Kontrollera om användarnamnet redan finns
            alert("Username already taken");  // Visa varning om användarnamnet redan är upptaget
            return;
        }
        const newUser = { username, password };  // Skapa ett nytt användarobjekt
        setUsers([...users, newUser]);  // Lägg till den nya användaren i användardata
        alert("Registration successful! Please log in.");  // Visa bekräftelsemeddelande
        setShowRegister(false);  // Stäng registreringsformuläret
    };

    // Funktion för att logga ut användaren
    const handleLogout = () => {
        setActiveUser(null);  // Återställ aktiv användare
        setCartCount(0);  // Återställ kundvagnens räknare vid utloggning
    };

    // Funktion för att lägga till i kundvagnen
    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);  // Öka räknaren med 1
    };

    // Funktion för att ta bort från kundvagnen
    const handleRemoveFromCart = () => {
        setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));  // Minska räknaren, men inte under 0
    };

    return (
        <div className="app">
            {activeUser ? (
                // Om en användare är inloggad, visa Header och BookList-komponenter
                <>
                    <Header cartCount={cartCount} onLogout={handleLogout} />
                    <BookList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
                </>
            ) : showRegister ? (
                // Om användaren vill registrera sig, visa RegisterForm
                <RegisterForm onRegister={handleRegister} switchToLogin={() => setShowRegister(false)} />
            ) : (
                // Om ingen användare är inloggad, visa LoginForm
                <div className="login-page">
                    <LoginForm onLogin={handleLogin} switchToRegister={() => setShowRegister(true)} />
                </div>
            )}
        </div>
    );
};

export default App;
