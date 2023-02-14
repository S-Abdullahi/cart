import React from "react";
import { GiShoppingCart } from "react-icons/gi";

export default function Nav() {
  return (
    <nav>
      <h2 className="nav-title">Reducer</h2>
      <div className="cart-con">
        <GiShoppingCart className="cart-icon" />
        <div className="cart-number-con">
          <span className="cart-number">3</span>
        </div>
      </div>
    </nav>
  );
}
