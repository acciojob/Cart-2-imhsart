import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CartProvider from "./context/cartContext.js";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>, document.getElementById('root'))
