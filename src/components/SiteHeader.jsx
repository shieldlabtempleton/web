import React, { useContext } from "react";
import logo from "../../src/assets/USF_Bellini.png";
import { ThemeContext } from "../context/ThemeContext";

function SiteHeader() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App-header ${theme === "light" ? "" : "dark"}`}>
      <h1 className="Site-title">SHIELD LAB</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default SiteHeader;
