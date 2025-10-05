import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/signin.css";

export default function SignInPage() {
    return (
        <>
            <Navbar />
            <div className="signin-container">
                <div className="signin-content">

                    <div className="signin-left">
                        <img
                            src="/saganaLogo.png"
                            alt="Sagana Logo"
                            className="signin-logo"
                        />
                        <h1 className="signin-title">SAGANA</h1>
                    </div>


                    <div className="signin-right">
                        <button className="login-btn">
                            <span className="login-icon"></span> {/* ✅ ito ang square icon */}
                            Log in with Base
                        </button>
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

