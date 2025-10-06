import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Left side - logo + links */}
      <div className="navbar-left">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src={`${import.meta.env.BASE_URL}sagana-logo1.png`}
              alt="SAGANA Logo"
              className="logo-img"
            />
            <span className="logo-text">Sagana</span>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>

      {/* Right side - Sign In */}
      <Link to="/signin" className="sign-in-btn">
        Sign In
      </Link>

    </nav>
  );
}
