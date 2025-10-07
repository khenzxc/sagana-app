import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // You can store email in localStorage, context, or auth here if needed
    navigate("/home"); // ✅ redirect to HomePage
  };

  return (
    <section className="signup-container">
      {/* Left side - Logo */}
      <div className="signup-left">
        <img
          src={`${import.meta.env.BASE_URL}sagana-logo.png`}
          alt="Sagana Logo"
          className="signup-logo"
        />
      </div>

      {/* Right side - Sign Up Form */}
      <div className="signup-right">
        <div className="signup-card">
          <h2>Sign Up</h2>

          <input
            type="email"
            placeholder="Email address"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="no-email">I don’t have an email address</p>

          <button className="signup-next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
