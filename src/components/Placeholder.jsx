import React, { useContext } from "react";
import construction from "../assets/construction.png";
import { ThemeContext } from "../context/ThemeContext";

const Placeholder = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Placeholder">
      <img className="Placeholder-png" src={construction} alt="" />
      <h1 className={`Placeholder-text ${theme === "light" ? "" : "dark"}`}>
        This Page Is Currently In Development
      </h1>
    </div>
  );
};

export default Placeholder;
