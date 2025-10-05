import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import CarouselSection from "./components/CarouselSection";
import SDGSection from "./components/SDGSection";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";
import About from "./components/About";
import SignInPage from "./components/SignInPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <Hero />
              <FeatureSection />
              <CarouselSection />
              <SDGSection />
              <TimelineSection />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>

      <Footer /> {/* Footer always visible */}
    </Router>
  );
}
