import React from "react";
import HeaderPage from "../Header";

const CartPage = () => {
  return (
    <>
      <HeaderPage />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  );
};

export default CartPage;
