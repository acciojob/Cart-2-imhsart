import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const {state} = useContext(CartContext)
  let totalItems = state.cart.reduce((s,val) => s+val.quantity,0)
  return (
    <div className="navbar">
      <div>🛒 Cart</div>
      <div id="nav-cart-item-count">Items: {totalItems}</div>
    </div>
  )
}

export default Navbar