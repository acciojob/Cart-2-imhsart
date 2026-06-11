import React, {useContext} from "react";
import { CartContext } from "../context/CartContext.js";
import CartItem from "./CartItem";

const CartContainer = () => {
  const {state, dispatch} = useContext(CartContext)
  let totalAmt = state.cart.reduce((s,val) => s+(val.quantity*val.price), 0)
  return (
    <div className="cart-container">
      <h2 style={{marginBlock:'10px 15px'}}>Product List</h2>
      {state.cart.length && (
        <ul id="cart-items-list">
        {
          state.cart.map(item => {
            return <li key={item.id} ><CartItem item={item} /></li>
          })
        }
      </ul>)}
      {state.cart.length>0 ? <div className="total-amt-div">Total Amount: <span id="cart-total-amount">$ {totalAmt}</span></div> : <p style={{marginBlock:'10px'}}>Cart is currently empty</p>}
      <button id="clear-all-cart" onClick={() => dispatch({
        type: 'CLEAR_CART'
      })}>Clear Cart</button>
    </div>
  )
}

export default CartContainer