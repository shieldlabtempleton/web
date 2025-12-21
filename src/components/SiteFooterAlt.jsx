import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SiteFooterAlt = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App-footer-alt ${theme === "light" ? "" : "dark"}`}>
      <span>
        <strong> © Shield lab 2025</strong>
      </span>
    </div>
  );
};

export default SiteFooterAlt;
