// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout ensures browser back doesn’t override scroll
    const timer = setTimeout(
      () => window.scrollTo({ top: 0, behavior: "smooth" }),
      0
    );
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
