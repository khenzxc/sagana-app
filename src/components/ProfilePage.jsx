import React from "react";
import "../styles/profile.css";
import { FaUser, FaPhoneAlt, FaCog, FaFileAlt } from "react-icons/fa";

export default function ProfilePage() {
    return (
        <main className="profile-wrapper">
            <div className="profile-card">
                <h2 className="profile-title">Profile</h2>

                <div className="profile-image-container">
                    <img
                        src={`${import.meta.env.BASE_URL}mang-isko.png`}
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="edit-icon">✎</div>
                </div>

                <h3 className="profile-name">MANG ISKO</h3>
                <p className="profile-role">Filipino Farmer</p>

                <div className="profile-buttons">
                    <button className="profile-btn">
                        <FaUser className="btn-icon" /> Personal Information
                    </button>

                    <button className="profile-btn">
                        <FaPhoneAlt className="btn-icon" /> Contact Information
                    </button>

                    <button className="profile-btn">
                        <FaCog className="btn-icon" /> Account Settings
                    </button>

                    <button className="profile-btn">
                        <FaFileAlt className="btn-icon" /> Documents
                    </button>
                </div>

                <button className="profile-logout-btn">Log out</button>
            </div>
        </main>
    );
}
