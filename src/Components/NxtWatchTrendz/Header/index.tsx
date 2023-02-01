import React from "react";

const HeaderPage = () => {
  return (
    <div>
      <div className="Image-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website Logo"
        />
      </div>
      <div className="nav-Details">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Card</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
