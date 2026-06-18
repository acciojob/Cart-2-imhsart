import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const {state} = useContext(CartContext)
  let totalItems = state.cart.reduce((sum,val) => sum+val.quantity,0)
  return (
    <nav className="navbar">
      <div>🛒 useReducer</div>
      <div>Items: <span id="nav-cart-item-count">{totalItems}</span></div>
    </nav>
  )
}

export default Navbar