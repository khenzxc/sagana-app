import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BaseWalletConnect from "../components/BaseWalletConnect";
import "../styles/signin.css";

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="signin-content">
          {/* Left side - Logo */}
          <div className="signin-left">
            <img
              src={`${import.meta.env.BASE_URL}saganaLogo.png`}
              alt="Sagana Logo"
              className="signin-logo"
            />
            <h1 className="signin-title">SAGANA</h1>
          </div>

          {/* Right side - Login / Signup */}
          <div className="signin-right">
            {/* Dynamic login button */}
            <BaseWalletConnect />

            <p className="create-account-text">
              Don’t have an account?{" "}
              <Link to="/signup" className="create-link">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
