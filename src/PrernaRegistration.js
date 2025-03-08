import React, { useEffect, useState } from "react";
import "./PrernaRegistration.css";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const PrernaRegistration = () => {
  const [boomEffect, setBoomEffect] = useState(false);

  useEffect(() => {
    setBoomEffect(true);
  }, []);

  return (
    <div>
    {/* <div className={`registration-container ${boomEffect ? "boom-effect" : ""}`}>
      <h1 className="title">🎉 Welcome to PRERNA 17.0 🎉</h1>
      <p className="subtitle">Register now and be part of the excitement!</p>

      <div className="button-container">
        <a href="https://linktr.ee/Prerna_17.0_Registration" className="register-btn rbu-btn">
           RBU University Students
        </a>
        <a href="https://rcoem.in/anon_evForm.htm?ev=225" className="register-btn non-rbu-btn">
           Non-RBU Students
        </a>
      </div>
    </div> */}
    <h1>Coming Soon!</h1>
    <NSSFooter />
    </div>
  );
};

export default PrernaRegistration;