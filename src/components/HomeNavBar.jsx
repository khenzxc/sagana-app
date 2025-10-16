import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/homenavbar.css";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function HomeNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove Base wallet address from storage
        localStorage.removeItem("walletAddress");
        sessionStorage.removeItem("walletAddress");

        // Optional: collapse dropdown
        setIsOpen(false);

        // Redirect to sign in
        navigate("/signin");
    };


    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Logo */}
                <div className="logo-container">
                    <img
                        src={`${import.meta.env.BASE_URL}sagana-logo1.png`}
                        alt="SAGANA Logo"
                        className="logo-img"
                    />
                    <span className="logo-text">Sagana</span>
                </div>

                {/* Hamburger button for mobile */}
                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </div>

                {/* Navigation links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link to="/savings" onClick={() => setMenuOpen(false)}>Savings</Link>
                    <Link to="/rewards" onClick={() => setMenuOpen(false)}>Rewards</Link>
                    <Link to="/budgeting" onClick={() => setMenuOpen(false)}>Budgeting</Link>
                    <Link to="/price-alerts" onClick={() => setMenuOpen(false)}>Price Alerts</Link>
                    <Link to="/transactions" onClick={() => setMenuOpen(false)}>Transactions</Link>
                </div>
            </div>

            {/* Profile icon */}
            <div className="navbar-right">
                <div
                    className={`profile-container ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaUserCircle className="profile-icon" />
                    {isOpen && (
                        <div className="profile-dropdown">
                            <Link to="/profile" className="dropdown-item">
                                View Profile
                            </Link>
                            <button
                                className="dropdown-item logout-btn"
                                onClick={handleLogout}
                            >
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
