import React, { useState } from "react";

const RegisterForm = ({ onRegister, switchToLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // Förhindra att sidan laddas om vid formulärskick
        onRegister(username, password);  // Skicka användarnamn och lösenord till 'onRegister' funktion
    };

    return (
        <div className="login-page"> {}
            <div className="form-container"> 
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <button onClick={switchToLogin}>Login here</button></p>
            </div>
        </div>
    );
};

export default RegisterForm;
