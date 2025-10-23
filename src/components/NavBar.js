import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isOverWhite }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    console.log("isoverwhite2:", isOverWhite);
  }, [isOverWhite]);
  return (
    <div className={`Main-menu ${isOverWhite ? "bgshow" : "bghide"}`}>
      <div
        className={`Navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        id="Mobile-menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul
        className={`Main-menu-button-container ${isMenuOpen ? "active" : ""}`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/research"
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Research
        </NavLink>
        <NavLink
          to="/publications"
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Publications
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          People
        </NavLink>
        <NavLink
          to="/collaborators"
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Collaborators
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "Menu-button active" : "Menu-button"
          }
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
