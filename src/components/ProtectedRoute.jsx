import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * 🔒 ProtectedRoute Component
 * - Blocks access if no wallet is connected (walletAddress not in localStorage)
 * - Redirects to /signin automatically
 */
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const walletAddress = localStorage.getItem("walletAddress"); // check login state

  if (!walletAddress) {
    // ❌ User is NOT logged in → redirect to signin
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  // ✅ User is logged in → allow access
  return children;
}
