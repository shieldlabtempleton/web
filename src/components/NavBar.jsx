import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ isOverWhite, isMenuOpen, setIsMenuOpen }) => {
  const [top, setTop] = useState(140);
  const [height, setHeight] = useState(window.innerHeight - 140);
  const location = useLocation();
  const isHomeActive =
    location.pathname === "/" || location.pathname === "/news";
  const menuRef = useRef(null);

  // function useScrollLock(locked) {
  //   useEffect(() => {
  //     if (locked) {
  //       const scrollY = window.scrollY;

  //       document.body.style.position = "fixed";
  //       document.body.style.top = `-${scrollY}px`;
  //       document.body.style.left = "0";
  //       document.body.style.right = "0";
  //       document.body.style.width = "100%";
  //     } else {
  //       const scrollY = document.body.style.top;
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       document.body.style.left = "";
  //       document.body.style.right = "";
  //       document.body.style.width = "";

  //       // Restore scroll position
  //       if (scrollY) {
  //         window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //       }
  //     }
  //   }, [locked]);
  // }

  // useScrollLock(isMenuOpen);

  // Toggle body scroll

  useEffect(() => {
    const handleScrollLock = (e) => {
      const isMobile = window.innerWidth <= 900;

      if (!isMobile) {
        setIsMenuOpen(false);
      }

      if (isMenuOpen && isMobile) {
        document.body.style.overflow = "hidden";
        // Prevent touch scrolling
        document.body.addEventListener("touchmove", preventScroll, {
          passive: false,
        });
      } else {
        document.body.style.overflow = "auto";
        document.body.removeEventListener("touchmove", preventScroll);
      }
    };

    const preventScroll = (e) => {
      if (menuRef.current?.contains(e.target)) {
        return; // allow scrolling inside menu
      }
      e.preventDefault();
    };

    handleScrollLock();

    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate interpolated top
      let newTop = 140 - scrollY;
      // if (newTop < 50) newTop = 50; // clamp

      setTop(newTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowheight = window.innerHeight;
      let newHeight = windowheight;
      setHeight(newHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`Main-menu-container`}>
      {isMenuOpen && (
        <div
          className="Menu-overlay"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
      <div className={`Main-menu  ${isMenuOpen ? "active" : ""}`}>
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
          style={{ "--dyn-top": `${top}px`, "--dyn-height": `${height}px` }}
          className={`Main-menu-button-container ${isMenuOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <NavLink
            to="/"
            end
            className={isHomeActive ? "Menu-button active" : "Menu-button"}
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
    </div>
  );
};

export default NavBar;
