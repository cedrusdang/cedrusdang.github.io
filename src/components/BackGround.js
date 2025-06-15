import React, { useState, useEffect } from "react";

function randomStars(n) {
  return Array.from({ length: n }).map((_, i) => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
    size: 0.5 + Math.random() * 1.8 + "px",
    opacity: 0.3 + Math.random() * 0.7,
    key: i
  }));
}

export default function GalaxyBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    function updateStars() {
      const w = window.innerWidth, h = window.innerHeight;
      const N_STARS = Math.round(0.2 * (w + h));
      setStars(randomStars(N_STARS));
    }
    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
      {stars.map(star => (
        <div key={star.key} style={{
          position: "absolute",
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          borderRadius: "50%",
          background: "#fff",
          opacity: star.opacity,
          boxShadow: "0 0 8px 2px #fff",
          pointerEvents: "none"
        }} />
      ))}
    </div>
  );
}
