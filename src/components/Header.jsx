import React from "react";
import { useNavigate } from "react-router-dom"; 
import Cart from "./Cart";
import LogoutButton from "./LogoutButton"; 
import SlothLogo from "/src/assets/Sloth.jpg";  

const Header = ({ cartCount, onLogout }) => {
  const navigate = useNavigate();  // initialisera navigate hook

  const handleLogoClick = () => {
    navigate("/");  // Navigera till homepage
  };

  return (
    <header>
      <div className="logo" onClick={handleLogoClick}> 
        <img src={SlothLogo} alt="Bookstore Logo" />
      </div>
      <div className="title">Welcome to the Reading Sloth</div>
      <Cart cartCount={cartCount} />
      <LogoutButton onLogout={onLogout} />
    </header>
  );
};

export default Header;
