import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Kommer hålla användardata
  const [activeUser, setActiveUser] = useState(null); // Kommer hålla den aktiva användaren

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setActiveUser(user);
    } else {
      alert("Ogiltiga inloggningsuppgifter");
    }
  };

  const handleLogout = () => {
    setActiveUser(null);
  };

  return (
    <UserContext.Provider value={{ activeUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
