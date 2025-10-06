import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function Layout({ children }) {
  const location = useLocation();
  const showFooter = location.pathname === "/" || location.pathname === "/about"; 
  // footer only on landing and about
  return (
    <>
      {children}
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
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
      </Layout>
    </Router>
  );
}
