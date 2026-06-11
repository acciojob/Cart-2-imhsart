import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const {state} = useContext(CartContext)
  let totalItems = state.cart.reduce((s,val) => s+val.quantity,0)
  return (
    <nav className="navbar">
      <div>🛒 Cart</div>
      <div>Items: <span id="nav-cart-item-count">{totalItems}</span></div>
    </nav>
  )
}

export default Navbar