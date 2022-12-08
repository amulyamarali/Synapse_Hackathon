import React, { useRef, useState, useEffect } from "react";
import HALO from "vanta/dist/vanta.halo.min.js";
import "./landing.css"
import logo from "./logo.png"

export default function Landing() {
  const myRef = useRef();
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 500.0,
          scale: 1,
          scaleMobile: 0.5,
          color: 0xffd700,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div id="vantajs" ref={myRef}>
      <div id="logo-container">
        <img src={logo} alt = "NA"></img>
        <h2 id = "logo-container-heading">MIRAGE</h2>
      </div>
      <div id = "phillipsContainer">
        <h2>Powered by Phillips Hue.</h2>
      </div>
      <div id = "text">
        <p>Powering our way into your Lives.</p>
      </div>
      
    </div>
  );
}
