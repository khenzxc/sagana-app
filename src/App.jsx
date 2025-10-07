import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar";
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

// Layout para sa pages na may footer
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
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <Layout>
              <main className="main-content">
                <Hero />
                <FeatureSection />
                <CarouselSection />
                <SDGSection />
                <TimelineSection />
              </main>
            </Layout>
          }
        />

        {/* Home Page (after SignUp / Login) */}
        <Route path="/home" element={<Layout><HomePage /></Layout>} />

        {/* About Page */}
        <Route path="/about" element={<Layout><About /></Layout>} />

        {/* Sign In / Sign Up (no footer) */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
