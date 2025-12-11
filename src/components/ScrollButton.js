import { useState, useEffect, useLayoutEffect } from "react";

export default function ScrollDown(props) {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // scroll to bottom
      behavior: "smooth", // smooth animation
    });
  };
  //check if at bottom
  useLayoutEffect(() => {
    const compute = () => {
      const scrollY = window.scrollY;
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollY + viewportHeight >= fullHeight - 50;
      setHide(isAtBottom);
    };

    let timer = null;

    // Detect touch devices (mobile/iPad) where layout needs settling time
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const run = () => {
      if (isTouchDevice) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          // Make sure layout is fully updated on mobile Safari
          requestAnimationFrame(() => requestAnimationFrame(compute));
        }, 100);
      } else {
        // Desktop → immediate
        compute();
      }
    };

    // Run on mount
    run();

    // Relevant listeners:
    window.addEventListener("resize", run);
    window.addEventListener("orientationchange", run);
    window.visualViewport?.addEventListener("resize", run);
    window.addEventListener("scroll", run); // scrolling affects bottom detection

    return () => {
      window.removeEventListener("resize", run);
      window.removeEventListener("orientationchange", run);
      window.visualViewport?.removeEventListener("resize", run);
      window.removeEventListener("scroll", run);
      if (timer) clearTimeout(timer);
    };
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
