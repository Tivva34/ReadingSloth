import React from "react";


const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <span className="text">Cart</span>
      <div className="cartCount">{cartCount}</div>
    </div>
  );
};

export default Cart;