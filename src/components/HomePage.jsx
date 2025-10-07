import React from "react";
import "../styles/homepage.css";

export default function HomePage() {
  return (
    <section className="homepage-container">
      {/* My Account Section */}
      <div className="account-section">
        <h2 className="account-title">My Account</h2>
        <div className="account-balance">
          <div className="account-amount">
            <span className="peso-sign">₱</span>
            <span className="amount">100.00</span>
          </div>
          <span className="eye-icon">👁️</span> {/* simple emoji instead of Eye icon */}
        </div>
      </div>

      {/* Action Cards */}
      <div className="cards-container">
        {/* Deposit Funds */}
        <div className="action-card">
          <div className="card-content">
            <h3>Deposit Funds</h3>
            <p>Recent Deposits</p>
            <p className="method">Payment Method: GCash</p>
          </div>
          <span className="card-icon">➕</span> {/* emoji instead of PlusCircle */}
        </div>

        {/* Send Money */}
        <div className="action-card">
          <div className="card-content">
            <h3>Send Money</h3>
            <p>Recent Transactions</p>
            <p className="method">Transfer Method: GCash</p>
          </div>
          <span className="card-icon">💸</span> {/* emoji instead of Send */}
        </div>

        {/* Scan QR Code */}
        <div className="action-card">
          <div className="card-content">
            <h3>Scan QR Code</h3>
            <p>Scan to Pay/Receive</p>
          </div>
          <span className="card-icon">🔍</span> {/* emoji instead of ScanLine */}
        </div>
      </div>
    </section>
  );
}
