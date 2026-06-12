import React, { useContext } from "react";
import Navbar from "./Navbar";
import '../styles/App.css'
import CartContainer from "./CartContainer";
import { CartContext } from "../context/CartContext.js";

const App = () => {
  const { state } = useContext(CartContext)
  return (
    <div id="main">
      <Navbar />
      <CartContainer />
      <div id="debug-log" style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', fontSize:'9px', maxHeight:'180px', overflow:'auto', borderTop:'2px solid red', zIndex:9999, padding:'4px'}}>
        <strong>DEBUG LOG ({state.log.length} actions):</strong>
        {state.log.map((entry, idx) => <div key={idx}>{idx+1}. {entry}</div>)}
      </div>
    </div>
  )
}

export default App