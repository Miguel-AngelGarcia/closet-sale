"use client";
import React, { use } from "react";
import { useState } from "react";

const NavLinks = () => {
  const [addToCart, setAddToCart] = useState(false);

  return (
    <div className="basket_wall">
      <div className="basket_div">
        <a href="/tumbao_cart" className="cart-cont">
          <img src="./bagcart.svg" className="basket_start"></img>
          <div className="cart-item-badge">
            <span className="cart-txt">1</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavLinks;
