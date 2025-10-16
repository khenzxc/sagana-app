import React from "react";
import "../styles/savings.css";

export default function SavingsPage() {
  return (
    <div className="savings-container">
      {/* LEFT COLUMN */}
      <div className="savings-summary">
        <h2 className="savings-title">Mag-Ipon</h2>
        <p className="savings-label">Total Savings:</p>
        <h1 className="savings-amount">₱5,000.00 👁️</h1>
        <p className="savings-interest">Total Interest Earned: 0.00</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="savings-list">
        {[
          { name: "Emergency Fund", amount: "₱1,000", emoji: "☂️" },
          { name: "Edukasyon", amount: "₱1,000", emoji: "🎓" },
          { name: "Makinarya", amount: "₱1,000", emoji: "🚜" },
          { name: "Pagkain", amount: "₱1,000", emoji: "🧺" },
          { name: "Bahay", amount: "₱1,000", emoji: "🏠" },
        ].map((item) => (
          <div className="savings-card" key={item.name}>
            <div className="savings-left">
              <span className="savings-emoji">{item.emoji}</span>
              <div>
                <h3 className="savings-name">{item.name}</h3>
                <p className="savings-value">{item.amount}</p>
              </div>
            </div>
            <button className="add-funds">+ Add funds</button>
          </div>
        ))}
        <p className="add-savings">+ Add savings</p>
      </div>
    </div>
  );
}
