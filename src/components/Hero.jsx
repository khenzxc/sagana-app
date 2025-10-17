import React from "react";
import BaseWalletConnect from "../components/BaseWalletConnect";
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

        {/* Buttons */}
        <div className="button-container">
          {/*  Dynamic Get Started button */}
          <BaseWalletConnect />

          {/* Watch Video button */}
          <button
            className="secondary-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IstXsIJRdHea4PkZBGxLo1WEBbV1eruh/view?usp=sharing",
                "_blank"
              )
            }
          >
            <span className="play-icon">▶</span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right content: hero video */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={`${import.meta.env.BASE_URL}sagana-vid.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}
