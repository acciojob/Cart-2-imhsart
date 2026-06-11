import React from "react";
import Navbar from "./Navbar";
import '../styles/App.css'
import CartContainer from "./CartContainer";

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App