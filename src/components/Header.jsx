import React from "react";
import Cart from "./Cart";
import SlothLogo from '../assets/Sloth.jpg'; 


const Header = ({ cartCount }) => {
  return (
    <header>
      <div className="logo">
        <img src={SlothLogo} alt="Bookstore Logo" />
      </div>
      <div className="title">Welcome to the Reading Sloth</div>
      <Cart cartCount={cartCount} />
    </header>
  );
};

export default Header;
