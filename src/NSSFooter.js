import React from "react";
import "./NSSFooter.css";
import Instagram from "./Instagram.png";
import Linkedin from "./LinkedIn.png";
import { Link } from "react-router-dom";  // Import Link at the top

const Footer = () => {
  return (
    <footer className="nss-footer">
      {/* Quick Links Section */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
        <li><a href="https://rbunagpur.in/" target="_blank">RBU Website</a></li>
<li><Link to="/">Home</Link></li>
<li><Link to="/team">Team</Link></li>
<li><Link to="/events">Events</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
{/* <li><a href="https://rbunagpur.in/sports" target="_blank" rel="noopener noreferrer">Sports</a></li>  */}

        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/nss.rbu" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/nss-rcoem" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: <br></br><a href="mailto:nss@ramdeobaba.edu" className="mail">nss@rknec.edu</a></p>
        <p>Ph: +91 9422213962</p>
        <p>Address: Ramdeobaba University, Nagpur</p>
      </div>
    </footer>
  );
};

export default Footer;