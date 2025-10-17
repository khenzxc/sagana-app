import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gantimpala.css";

export default function GantimpalaPage() {
  const navigate = useNavigate();

  // Protect the page
  useEffect(() => {
    const walletAddress = localStorage.getItem("walletAddress");
    if (!walletAddress) {
      // If not logged in, redirect to sign-in page
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="gantimpala-page">
      {/* LEFT SIDE — Points & Goals */}
      <div className="gantimpala-left">
        {/* Logo / Image (no green box) */}
        <div className="gantimpala-logo">
          <img
            src={`${import.meta.env.BASE_URL}/SAGANA (60) 2.png`}
            alt="Gantimpala Logo"
            className="logo-image"
          />
        </div>

        {/* Total Points */}
        <div className="points-card">
          <h2>
            500 <span className="sgn">SGN</span>
          </h2>
          <p className="points-label">Total points</p>

          <div className="button-group">
            <button className="btn">Send</button>
            <button className="btn">Transfer</button>
            <button className="btn">Convert</button>
          </div>
        </div>

        {/* Goals List */}
        <div className="goals-container">
          <h3>Sagana goals</h3>

          {[1, 2, 3].map((goal) => (
            <div key={goal} className="goal-card">
              <div className="goal-info">
                <h4>Save 5,000 Pesos</h4>
                <p>
                  Save money in your Sagana account and reach ₱5,000 to earn a
                  reward!
                </p>
              </div>
              <div className="goal-status">
                <span>10 points</span>
                <p className="completed">Completed</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Timeline */}
      <div className="gantimpala-right">
        <h3>Bonus points</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p>
                Save money in your Sagana account and reach ₱5,000 to earn a
                reward!
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>10 points</h4>
              <p>Grow your Sagana Circle and earn 50 coins</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>50 points</h4>
              <p>Grow your Sagana Circle and earn 50 coins</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>100 points</h4>
              <p>Grow your Sagana Circle and earn 50 coins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
