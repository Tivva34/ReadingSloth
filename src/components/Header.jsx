import React from "react";
import Cart from "./Cart";
import SlothLogo from "../assets/Sloth.jpg";
import LogoutButton from "./LogoutButton"; 

const Header = ({ cartCount, onLogout }) => {
  return (
    <header>
      <div className="logo">
        <img src={SlothLogo} alt="Bookstore Logo" />
      </div>
      <div className="title">Welcome to the Reading Sloth</div>
      <Cart cartCount={cartCount} />
      <LogoutButton onLogout={onLogout} /> {}
    </header>
  );
};

export default Header;
