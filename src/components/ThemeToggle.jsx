import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <button class="dark-mode-toggle" aria-hidden="true" onClick={toggleTheme}>
      <svg
        class={`dark-mode-toggle__icon ${
          theme === "dark" ? "dark-mode-toggle__icon--moon" : null
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
            <circle
              class="dark-mode-toggle__cut-out"
              r="6"
              cx="25"
              cy="10"
              fill="black"
            ></circle>
          </mask>
        </defs>
        <circle
          class="dark-mode-toggle__center-circle"
          r="7"
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#mask)"
        ></circle>
        <g
          class="dark-mode-toggle__rays"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="12" x2="12" y1="3" y2="1"></line>
          <line x1="21" x2="23" y1="12" y2="12"></line>
          <line x1="12" x2="12" y1="21" y2="23"></line>
          <line x1="1" x2="3" y1="12" y2="12"></line>
        </g>
        <g
          class="dark-mode-toggle__rays"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          transform="rotate(45 12 12)"
        >
          <line x1="12" x2="12" y1="3" y2="1"></line>
          <line x1="21" x2="23" y1="12" y2="12"></line>
          <line x1="12" x2="12" y1="21" y2="23"></line>
          <line x1="1" x2="3" y1="12" y2="12"></line>
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
