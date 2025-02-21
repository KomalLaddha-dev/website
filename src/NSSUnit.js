import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./NSSUnit.css";
import NSSFooter from "./NSSFooter.js";
import UniversityLogo from "./download.jpg";
import NSSLogo from "./Images/download.jpg";
import Volunteers from "./Images/Volunteers.png";
import HC from "./Images/HC.png";
import NEWS from "./Images/NEWS.png";
import Followers from "./Images/Followers.png";
import SE from "./Images/SE.png";
import Insta from "./Images/Insta.png";
import Achievements from "./Images/achievement.png";
import Education from "./Images/Education.png";
import Health from "./Images/Health.png";
import Innovation from "./Images/Innovation.png";
import Society from "./Images/Society.png";
import Environment from "./Images/Environment.png";
import Rural from "./Images/Rural.png";
import Gallery from "./Gallery.js";
import PrernaRegistration from "./PrernaRegistration.js";

const NSSUnit = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".nss-dropdown");
      const menuIcon = document.querySelector(".nss-menu-icon");
      if (dropdown && !dropdown.contains(event.target) && !menuIcon.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavigate = (label) => {
    if (label === "Instagram Followers") {
      // Redirect to Instagram page in a new tab
      window.open("https://www.instagram.com/nssrbu", "_blank");
    } else {
    const formattedLabel = label.toLowerCase().replace(/\s+/g, "");
    navigate(`/reach/${formattedLabel}report`);
    }
  };

  const handleNavigate2 = (label) => {
    const formattedLabel = label.toLowerCase().replace(/\s+/g, "");
    navigate(`/domain/${formattedLabel}report`);
  };

  return (
    <div className="nss-container">
      {/* Main Content */}
      <div className="nss-content">
        <div className="nss-details">
          <img src={NSSLogo} alt="NSS Logo" className="nss-logo-large" />
          <div className="nss-text">
            <h2 className="nss-unit-title">NSS UNIT</h2>
            <p className="nss-slogan">सेवा परमः धर्मः</p>
          </div>
        </div>
        <button className="nss-register-btn" onClick={() => navigate("/prerna-registration")}>REGISTER FOR UPCOMING EVENTS</button>
      </div>

      {/* Our Vision Section */}
      <div className="nss-content2">
      <div className="nss-vision">
        <h2 className="nss-section-title">OUR VISION</h2>
        <p className="nss-section-text">
          The vision of the National Service Scheme (NSS) is to develop the
          character and personality of students through voluntary community
          service. 
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="nss-who-we-are">
        <h2 className="nss-section-title">WHO WE ARE</h2>
        <p className="nss-section-text">
          We are a community of dedicated students and volunteers committed to 
          making a meaningful impact on society. Through NSS, we work towards 
          the upliftment of underprivileged communities, environmental conservation, 
          and social awareness campaigns.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="nss-what-we-do">
        <h2 className="nss-section-title">WHAT WE DO</h2>
        <p className="nss-section-text">
          Our initiatives include organizing health and education camps, blood 
          donation drives, environmental sustainability projects, and social 
          welfare programs. By participating in NSS, students develop leadership, 
          empathy, and a deep sense of responsibility toward society.
        </p>
      </div>
      </div>

      <div className="nss-reach">
        <h2 className="nss-reach-title">OUR REACH</h2>
        <div className="nss-reach-icons">
          {[{img: Volunteers, label: "Volunteers", number: "200+"},
            {img: HC, label: "Happy Children", number: "2,000+"},
            {img: NEWS, label: "News Features", number: "5+"},
            {img: SE, label: "Students Engaged", number: "5,000+"},
            {img: Insta, label: "Instagram Followers", number: "2,500+"},
            {img: Achievements, label: "Achievements", number: "10+"}].map((item, index) => (
            <div key={index} className="reach-item" onClick={() => handleNavigate(item.label)} style={{ cursor: "pointer" }}>
              <div className="reach-content">
                <img src={item.img} alt={item.label} className="reach-icon" />
                <span className="reach-number">{item.number}</span>
              </div>
              <span className="reach-label">{item.label}</span>
            </div>
          ))}
        </div>
        </div>

      {/* Domains Section */}
<div className="nss-domains">
  <h2 className="nss-domains-title">DOMAINS</h2>
  <div className="nss-domains-icons">
    {[ 
      { img: Education, label: "Education" },
      { img: Health, label: "Health" },
      { img: Innovation, label: "Innovation" },
      { img: Society, label: "Society" },
      { img: Environment, label: "Environment" },
      { img: Rural, label: "Rural" }
    ].map((item, index) => (
      <div key={index} className="domain-item" onClick={() => handleNavigate2(item.label)} style={{ cursor: "pointer" }}>
        <div className="domain-content">
          <img src={item.img} alt={item.label} className="domain-icon" />
        </div>
        <p className="domain-label">{item.label}</p>
      </div>
    ))}
  </div>
</div>

      {/* Footer Section */}
      <NSSFooter />
    </div>
  );
};

export default NSSUnit;