import React, { useState } from "react";

const LoginForm = ({ onLogin, switchToRegister }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();// Förhindra att sidan laddas om vid formulärskick
        onLogin(username, password);// Skicka användarnamn och lösenord till 'onLogin' funktion
    };

    return (
        <div className="form-container"> 
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Uppdatera state när användaren skriver
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}// Uppdatera state när användaren skrive
                />
                <button type="submit">Login</button> 
            </form>
            <p>Don't have an account? <button onClick={switchToRegister}>Register here</button></p>
        </div>
    );
};

export default LoginForm;