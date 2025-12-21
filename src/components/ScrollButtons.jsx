import { useState, useEffect, useLayoutEffect } from "react";

export function ScrollDown(props) {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    const el = document.getElementById("page-bottom-sentinel");
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    const sentinel = document.getElementById("page-bottom-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHide(entry.isIntersecting); // hide when bottom is visible
        console.log(props.sectionid);
        console.log(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // triggers as soon as sentinel enters viewport
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
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

export function ScrollToSectiion(props) {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    const el = document.getElementById(props.sectionid);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const section = document.getElementById(props.sectionid);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHide(entry.isIntersecting); // hide when section is visible
        console.log(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // % in view before triggering (adjust)
        rootMargin: "0% 0px -55% 0px", //% adjust viewport
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [props.sectionid]);
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
