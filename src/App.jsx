import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import About from "./components/About";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import CarouselSection from "./components/CarouselSection";
import SDGSection from "./components/SDGSection";
import TimelineSection from "./components/TimelineSection";

// Layout for pages with footer
function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Layout>
                <main className="main-content">
                  <Hero />
                  <FeatureSection />
                  <CarouselSection />
                  <SDGSection />
                  <TimelineSection />
                </main>
              </Layout>
            </>
          }
        />

        {/* 👤 Home Page (after login/signup) */}
        <Route
          path="/home"
          element={
            <>
              <HomeNavBar />
              <main className="main-content">
                <HomePage />
              </main>
            </>
          }
        />

        {/* 📘 About Page */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Layout>
                <About />
              </Layout>
            </>
          }
        />

        {/* 🔐 Sign In */}
        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <main className="main-content">
                <SignInPage />
              </main>
            </>
          }
        />

        {/* 🆕 Sign Up */}
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <main className="main-content">
                <SignUpPage />
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
