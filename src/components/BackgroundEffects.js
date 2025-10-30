import React, { useEffect } from "react";

const BackgroundEffects = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;

    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }

    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";
      return { x: posX, y: posY };
    }

    function animateParticle(particle) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.2;

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";
        setTimeout(() => particle.remove(), 2000);
      }, 10);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const handleClick = (e) => {
      const clickX = (e.clientX / window.innerWidth) * 100;
      const clickY = (e.clientY / window.innerHeight) * 100;

      const numParticles = 20; // slightly more particles
      const baseRadius = 10; // average spread distance

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${clickX}%`;
        particle.style.top = `${clickY}%`;
        particle.style.opacity = "0.8";
        particle.style.background = "#ffffff";
        particlesContainer.appendChild(particle);

        // Add randomness for a more rounded, organic burst
        const angle = Math.random() * Math.PI * 2; // random direction
        const radius = baseRadius * (0.5 + Math.random()); // variable distance

        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        // Animate outward
        setTimeout(() => {
          particle.style.transition = "all 1s ease-out";
          particle.style.left = `${clickX + offsetX}%`;
          particle.style.top = `${clickY + offsetY}%`;
          particle.style.opacity = "0";
          setTimeout(() => particle.remove(), 1000);
        }, 10);
      }
    };

    document.addEventListener("click", handleClick);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (particlesContainer) particlesContainer.innerHTML = "";
    };
  }, []);
  return (
    <div class="gradient-background">
      <div class="glow"></div>
      <div class="grid-overlay"></div>
      <div class="noise-overlay"></div>
      <div class="particles-container" id="particles-container"></div>
    </div>
  );
};

export default BackgroundEffects;
