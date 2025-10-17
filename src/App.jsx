import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";
import DashboardPage from "./components/DashboardPage";
import About from "./components/About";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import CarouselSection from "./components/CarouselSection";
import SDGSection from "./components/SDGSection";
import TimelineSection from "./components/TimelineSection";
import GantimpalaPage from "./components/GantimpalaPage";
import ScrollToTop from "./components/ScrollToTop";
import SavingsPage from "./components/SavingsPage";
import ProfilePage from "./components/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute"; 

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
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
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

        {/*  Protected: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <HomeNavBar />
              <main className="main-content">
                <DashboardPage />
              </main>
            </ProtectedRoute>
          }
        />

        {/*  Protected: Rewards */}
        <Route
          path="/rewards"
          element={
            <ProtectedRoute>
              <HomeNavBar />
              <main className="main-content">
                <GantimpalaPage />
              </main>
            </ProtectedRoute>
          }
        />

        {/*  Protected: Savings */}
        <Route
          path="/savings"
          element={
            <ProtectedRoute>
              <HomeNavBar />
              <main className="main-content">
                <SavingsPage />
              </main>
            </ProtectedRoute>
          }
        />

        {/*  Protected: Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <HomeNavBar />
              <main className="main-content">
                <ProfilePage />
              </main>
            </ProtectedRoute>
          }
        />

        {/* About Page */}
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

        {/* Sign In */}
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

        {/* Sign Up */}
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
