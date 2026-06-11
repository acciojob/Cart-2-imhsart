import React, {useContext} from "react";
import { CartContext } from "../context/cartContext.js";

const CartItem = ({item}) => {
  const {dispatch} = useContext(CartContext)

  return (
    <div className="cart-item">
      <h3>Item: {item.title}</h3>
      <p id={`cart-item-price-${item.id}`}>Price: ₹{item.price}</p>
      <div className="item-buttons">
        <div className="cluster">
          <button className="update-btn" id={`increment-btn-${item.id}`} onClick={() => dispatch({
            type: 'INCREASE',
            payload: item.id
          })}>+</button>
          <span className="amount-span" id={`cart-amount-${item.id}`}>{item.quantity}</span>
          <button className="update-btn" id={`decrement-btn-${item.id}`}
          onClick={() => dispatch({
            type: 'DECREASE',
            payload: item.id
          })}>-</button>
        </div>
        <button className="remove-btn" onClick={() => dispatch({
          type: 'REMOVE_ITEM',
          payload: item.id
        })}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem