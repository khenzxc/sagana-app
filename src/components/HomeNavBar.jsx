import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/homenavbar.css";
import { FaUserCircle } from "react-icons/fa";

export default function HomeNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data if you store any (e.g., localStorage/session)
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");

        // Redirect to sign-in page
        navigate("/signin");
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo-container">
                    <img
                        src={`${import.meta.env.BASE_URL}sagana-logo1.png`}
                        alt="SAGANA Logo"
                        className="logo-img"
                    />
                    <span className="logo-text">Sagana</span>
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
