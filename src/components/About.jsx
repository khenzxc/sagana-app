import React from "react";
import "../styles/about.css"
import Footer
 from "./Footer";
export default function About() {
    return (
        <div className="about-page">
            <section className="about-container">
                <h1 className="about-title">About Sagana</h1>
                <p className="about-desc">
                    <strong>Sagana is a decentralized financial inclusion app
                    built for farmers and fisherfolks,</strong> designed to provide a secure and
                    transparent way to save, earn rewards, and manage finances through
                    the power of Base blockchain. It seeks to address the long-standing
                    challenges of financial access in rural communities by introducing
                    modern digital solutions that transform traditional cash handling
                    into opportunities for growth and stability.
                </p>

                <p className="about-text">
                    Founded by <strong>Team 1 from Bulacan State University – Main Campus</strong>,
                    Sagana is developed by <strong>John Marco Aguirre, Judd Russel Asuncion, Khen Vonoe Gabriel, and Team ISKY.</strong>
                    Together, the team envisions a future where every farmer and fisherfolk
                    can achieve financial independence, cultivate prosperity, and take part in an inclusive
                    digital economy that values their hard work and secures their future.
                </p>

                <div className="about-logos">
                    <img src="/psite-logo.png" alt="PSITE Logo" />
                </div>
            </section>
            
            
        </div>
        
    );
}
