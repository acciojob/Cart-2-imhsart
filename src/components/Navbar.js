import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const {state} = useContext(CartContext)
  let totalItems = state.cart.length
  return (
    <nav className="navbar">
      <div>🛒 useReducer</div>
      <div>Items: <span id="nav-cart-item-count">{totalItems-1}</span></div>
    </nav>
  )
}

export default Navbar