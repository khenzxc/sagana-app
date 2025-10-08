import React from "react";
import { Link } from "react-router-dom";
import "../styles/homenavbar.css";
import { FaUserCircle } from "react-icons/fa";

export default function HomeNavBar() {
  return (
    <nav className="navbar">
      {/* Left side - logo + nav links */}
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
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/savings">Savings</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/budgeting">Budgeting</Link>
          <Link to="/price-alerts">Price Alerts</Link>
          <Link to="/transactions">Transactions</Link>
        </div>
      </div>

      {/* Right side - Profile icon */}
      <div className="navbar-right">
        <div className="profile-container">
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </nav>
  );
}
