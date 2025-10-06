import React from 'react';
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero-grid">

      {/* Left content */}
      <div className="hero-content">
        <h2 className="greeting">Masaganang Araw!</h2>
        <h1 className="hero-title">
          Empowering farmers<br />
          thrive, beyond the fields.
        </h1>
        <p className="hero-description">
          SAGANA brings decentralized financial services to farmers — making saving,
          growing, and managing your income simple, fair, and accessible for all.
        </p>
        <div className="button-container">
          <button className="primary-btn">
            <span className="btn-icon"></span>
            Get Started with Base
          </button>
          <button className="secondary-btn">
            <span className="play-icon">▶</span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right image */}
      <section className="hero">
        <img
          src={`${import.meta.env.BASE_URL}sagana-logo.png`}
          alt="SAGANA Logo"
          className="hero-logo"
        />
      </section>

    </div>
  );
}
