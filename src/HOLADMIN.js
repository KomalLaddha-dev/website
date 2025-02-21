import "./HOL.css";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://nssrbu-backend.vercel.app");

export default function HOLADMIN({ isAdmin }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    const updateLeaderboard = (data) => setLeaderboard(data);
    const handleQuizEnd = (finalLeaderboard) => {
      setQuizEnded(true);
      setLeaderboard(finalLeaderboard);
    };

    socket.on("updateLeaderboard", updateLeaderboard);
    socket.on("quizEnd", handleQuizEnd);

    return () => {
      socket.off("updateLeaderboard", updateLeaderboard);
      socket.off("quizEnd", handleQuizEnd);
    };
  }, []);

  if (!isAdmin) {
    return (
      <div className="container">
        <p className="access-denied">❌ Access Denied: This page is for admins only.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="leaderboard-container">
        <h2 className="leaderboard-title">{quizEnded ? "Final Leaderboard" : "Live Leaderboard"}</h2>
        {leaderboard.length > 0 ? (
          <ul className="leaderboard-list">
            {leaderboard.map((team, index) => (
              <li key={team.id || index} className="leaderboard-item">
                <span>{index + 1}. {team.name || "Unknown Team"}</span>
                <span>{team.points ?? 0} points</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No leaderboard data available yet.</p>
        )}
      </div>
    </div>
  );
}