// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // doesn't render anything
}
