import React, { useState, useEffect } from "react";
import "../styles/loader.css";

const Loader = () => {
  const [text, setText] = useState("");
  const fullText = "I nkrit 4.0";
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let i = 0;

    // Typing effect
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);

        // Wait before fade-out
        setTimeout(() => setFadeOut(true), 1200);
      }
    }, 150); // typing speed (lower = faster)

    return () => clearInterval(typing);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="loader-text">{text}</h1>
      <div className="loader-cursor">|</div>
    </div>
  );
};

export default Loader;
