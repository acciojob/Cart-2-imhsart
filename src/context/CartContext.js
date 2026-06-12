import React,{ createContext, useReducer } from "react";
import cartReducer from './reducer.js'
export const CartContext = createContext()
import cartData from "./data.js";

const initialValue = {
  cart: cartData,
  log: []
}

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue)
  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider