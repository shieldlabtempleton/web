import React, { useEffect, useState, useRef } from "react";

function interpolatePath(d1, d2, t) {
  // Simple linear interpolation between corresponding numbers in the path strings
  // Only works if both paths have same structure and numbers only differ
  const numbers1 = d1.match(/-?\d+(\.\d+)?/g).map(Number);
  const numbers2 = d2.match(/-?\d+(\.\d+)?/g).map(Number);

  const interpolated = numbers1.map((n, i) => {
    return n + (numbers2[i] - n) * t;
  });

  // Replace numbers in d1 with interpolated numbers
  let i = 0;
  return d1.replace(/-?\d+(\.\d+)?/g, () => interpolated[i++]);
}

function Wave({ children, isOverWhite, setIsOverWhite }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const maxScroll = 190; // Scroll threshold to reach flat wave

  const observerRef = useRef(null); // this marks the "end" of the wave

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scrollProgress > 0.7 && scrollProgress <= 1) {
      setIsOverWhite(true);
    } else {
      setIsOverWhite(false);
    }
  }, [scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Avoid negative scrolls (iOS bounce)
      if (y < 0) {
        const progress = 0;
        setScrollProgress(progress);
      } else {
        const progress = Math.min(y / maxScroll, 1); // 0 to 1
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function shiftPathY(d, offset) {
    return d.replace(/(\d+(\.\d+)?),(\d+(\.\d+)?)/g, (_, x, _1, y) => {
      return `${x},${parseFloat(y) + offset}`;
    });
  }

  // Start (wavy) and end (flat) path
  const startD =
    "M0,212L60,204C120,196,240,180,360,172.7C480,166,600,172,720,188C840,204,960,222,1080,225.3C1200,228,1320,212,1380,204L1440,196L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

  const endD =
    "M0,224L60,224C120,224,240,224,360,224C480,224,600,224,720,224C840,224,960,224,1080,224C1200,224,1320,224,1380,224L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";

  const newStartD = shiftPathY(startD, 20); // move down 50px
  const newEndD = shiftPathY(endD, 20);

  const d = interpolatePath(newStartD, newEndD, scrollProgress);

  return (
    <div className="Wave-design" style={{ position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "320px",
          // background: "blue",
        }}
      >
        <defs>
          <linearGradient
            id="greenGradient"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#009374" />
            <stop offset="100%" stopColor="#006747" />
          </linearGradient>
        </defs>

        {/* <path fill="url(#imgpattern)" fill-opacity="1" d={d}></path> */}
        <path fill="url(#greenGradient)" fill-opacity="1" d={d}></path>
      </svg>
      <div style={{ zIndex: 1, position: "relative" }}>
        {typeof children === "function" ? children({ isOverWhite }) : children}
      </div>
    </div>
  );
}

export default Wave;
