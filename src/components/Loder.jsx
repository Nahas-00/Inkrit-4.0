import React, { useState, useEffect } from "react";
import "../styles/Loader.css";

const Loader = ({ onLoaded }) => {
  const [displayText, setDisplayText] = useState("INITIALIZING");
  const finalTitle = "INKRIT 4.0";
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  // Random letters for the cipher effect
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    // 1. PROGRESS BAR SIMULATION
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Random increments for realism
        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 150);

    // 2. CIPHER TEXT REVEAL EFFECT
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        finalTitle
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalTitle[index]; // Return correct letter if passed iteration
            }
            // Otherwise return random character
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      // Speed of revealing the text
      if (iteration >= finalTitle.length) {
        clearInterval(interval);
      }
      
      // Increment iteration slowly
      iteration += 1 / 3; 
    }, 50);

    // 3. CLEANUP & EXIT
    const totalTime = 3000; // 3 seconds load time
    setTimeout(() => {
      setExit(true); // Trigger CSS shutdown animation
      clearInterval(progressInterval);
      
      // Optional: Callback to parent component to unmount loader
      if (onLoaded) setTimeout(onLoaded, 600); 
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onLoaded]);

  // If the animation is finished and hidden, return null
  if (exit && progress >= 100 && !document.querySelector('.loader-container')) return null;

  return (
    <div className={`loader-container ${exit ? "tv-shutdown" : ""}`}>
      {/* 3D Moving Grid Background */}
      <div className="loader-grid"></div>

      {/* Decorative Brackets */}
      <div className="bracket bracket-tl"></div>
      <div className="bracket bracket-br"></div>

      {/* Main Glitch Text */}
      <div className="glitch-wrapper">
        <h1 className="loader-title" data-text={displayText}>
          {displayText}
        </h1>
      </div>

      {/* Loading Bar & Status */}
      <div className="loading-data">
        <div className="progress-text">
          <span>SYSTEM_LOAD</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
        <div className="bar-wrapper">
          <div 
            className="bar-fill" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div style={{color: '#ff003c', fontSize: '0.7rem', marginTop: '5px', textAlign: 'right'}}>
          :: MEMORY_ALLOCATED_2TB ::
        </div>
      </div>
    </div>
  );
};

export default Loader;