import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useGlobalContext } from "./Context";


export default function Nav() {
  const {state} = useGlobalContext()
  return (
    <nav>
      <h2 className="nav-title">Reducer</h2>
      <div className="cart-con">
        <GiShoppingCart className="cart-icon" />
        <div className="cart-number-con">
          <span className="cart-number">{state.cartNumber}</span>
        </div>
      </div>
    </nav>
  );
}
