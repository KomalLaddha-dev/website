import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

export default function Login({ onLogin }) {
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (teamName.trim()) {
      onLogin(teamName);
      navigate("/HOL"); // Redirect to HOL after login
    } else {
      alert("Please enter a team name!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Team Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="teamName" className="form-label">Team Name</label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="form-input"
              placeholder="Enter your team name"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}