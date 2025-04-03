import React from "react";


const Cart = ({ cartCount }) => {
  return (
    <div className="cart-wrapper">
      <span className="text">Cart</span>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default Cart;