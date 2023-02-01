import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav_header">
      <div className="blog-container">
        <span className="blog-title">My Blog</span>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
