import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check if user is logged in
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (!user) {
      // 🚫 Redirect to Sign In if no user found
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      {/* Account Section */}
      <section className="account-section">
        <div className="account-info">
          <h2>My Account</h2>
          <div className="account-balance">
            <span>₱100.00</span>
            <span className="eye-icon">👁</span>
          </div>
        </div>

        <div className="account-actions">
          <div className="action-card">
            <div className="action-text">
              <h3>Deposit Funds</h3>
              <p>
                Recent Deposits
                <br />
                Payment Method: GCash
              </p>
            </div>
            <div className="action-icon">+</div>
          </div>

          <div className="action-card">
            <div className="action-text">
              <h3>Send Money</h3>
              <p>
                Recent Transactions
                <br />
                Transfer Method: GCash
              </p>
            </div>
            <div className="action-icon">✓</div>
          </div>

          <div className="action-card">
            <div className="action-text">
              <h3>Scan QR Code</h3>
              <p>Scan to Pay/Receive</p>
            </div>
            <div className="action-icon">◈</div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="content-area">
        {/* Add more content here */}
      </div>
    </div>
  );
}
