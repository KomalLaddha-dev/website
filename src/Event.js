import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "./EventMain.css";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const Event = () => {
  const [boomEffect, setBoomEffect] = useState(false);

  useEffect(() => {
    setBoomEffect(true);
  }, []);

  return (
    <div>
      <div className={`event-container ${boomEffect ? "boom-effect" : ""}`}>
        <h1 className="title">🎉 Welcome to NSS Events 🎉</h1>
        <p className="subtitle">Know more about events organised by NSS RBU</p>

        <div className="button-container">
          {/* Use Link if navigating within React */}
          <Link to="/events/reguralevents" className="btn-event">
            Regular Events
          </Link>

          <Link to="/events/specialevents" className="btn-event">
            Special Camps
          </Link>

          <Link to="/events/annualreport" className="btn-event">
            Annual Report
          </Link>
        </div>
      </div>
      <NSSFooter />
    </div>
  );
};

export default Event;