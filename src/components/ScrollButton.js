import { useState, useEffect, useLayoutEffect } from "react";

export default function ScrollDown(props) {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // scroll to bottom
      behavior: "smooth", // smooth animation
    });
  };
  // Helper: check if page is at the bottom
  const checkIfAtBottom = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const isAtBottom = scrollY + viewportHeight >= fullHeight - 50;
    setHide(isAtBottom);
  };

  useLayoutEffect(() => {
    checkIfAtBottom();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollY + viewportHeight >= fullHeight - 50;
      setHide(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      className={`${props.classname} ${hide ? "hide-button" : ""}`}
      id={props.id}
      onClick={handleClick}
    >
      <div class="Chevron"></div>
      <div class="Chevron"></div>
      <div class="Chevron"></div>
    </button>
  );
}
