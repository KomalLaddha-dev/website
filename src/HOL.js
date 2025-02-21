import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./HOL.css"; // Import the CSS file

// ✅ Use Live WebSocket URL
const socket = io("https://nssrbu.com", { transports: ["websocket"] });

export default function HOL({ teamName, isAdmin }) {
  const [isStarted, setIsStarted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [question, setQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [leaderboard, setLeaderboard] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    socket.emit("registerTeam", { teamName });

    socket.on("countdownUpdate", ({ timeLeft }) => {
      setCountdown(timeLeft);
      if (timeLeft === 0) setIsStarted(true);
    });

    socket.on("startQuiz", async () => {
      setIsStarted(true);
      setCountdown(null);
      try {
        // ✅ Fetch from Live Backend
        const response = await fetch("https://nssrbu.com/quizzes");
        const quizzes = await response.json();
        setTotalQuestions(quizzes.length);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    });

    socket.on("newQuestion", (data) => {
      setQuestion(data);
      setTimeLeft(30);
      setAnswered(false);
      setCurrentQuestionIndex((prev) => prev + 1);
    });

    socket.on("updateLeaderboard", (data) => {
      console.log("Leaderboard Updated:", data); // ✅ Debugging Leaderboard Updates
      setLeaderboard(data);
    });

    socket.on("quizEnd", (finalLeaderboard) => {
      setQuizEnded(true);
      setLeaderboard(finalLeaderboard);
    });

    return () => {
      socket.off("countdownUpdate");
      socket.off("startQuiz");
      socket.off("newQuestion");
      socket.off("updateLeaderboard");
      socket.off("quizEnd");
    };
  }, [teamName]);

  useEffect(() => {
    if (isStarted && timeLeft > 0 && !quizEnded) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isStarted, timeLeft, quizEnded]);

  const submitAnswer = (answer) => {
    if (!answered) {
      socket.emit("submitAnswer", { answer, teamName });
      setAnswered(true);
    }
  };

  const startQuizAsAdmin = () => {
    if (isAdmin) {
      fetch("https://nssrbu.com/set-quiz-start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seconds: 10 }), // ✅ Adjust Countdown Start Time
      })
        .then((res) => res.json())
        .then((data) => console.log("Quiz Started:", data))
        .catch((err) => console.error("Error starting quiz:", err));
    }
  };

  return (
    <div className="container">
      {!isStarted && countdown !== null ? (
        <div className="countdown-container">
          <h2 className="countdown-title">Quiz Starting Soon!</h2>
          <p className="countdown-timer">
            Time remaining: <span className={countdown < 10 ? "low-time" : ""}>{countdown}s</span>
          </p>
          <p className="waiting-text">Team: {teamName}</p>
        </div>
      ) : !isStarted ? (
        <div className="waiting-container">
          <h2 className="waiting-text">Waiting for admin to start the quiz...</h2>
          <p className="waiting-text">Team: {teamName}</p>
          {isAdmin && (
            <button className="start-button" onClick={startQuizAsAdmin}>
              Start Quiz
            </button>
          )}
        </div>
      ) : quizEnded ? (
        isAdmin ? (
          <div className="leaderboard-container">
            <h2 className="leaderboard-title">Final Leaderboard</h2>
            <ul className="leaderboard-list">
              {leaderboard.map((team, index) => (
                <li key={team.id} className="leaderboard-item">
                  <span>{index + 1}. {team.name}</span>
                  <span>{team.points} points</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="thank-you-container">
            <h2 className="thank-you-message">Quiz Over! Thanks for participating.</h2>
          </div>
        )
      ) : (
        <div className="quiz-box">
          <h2 className="quiz-question">{question?.text} (Question {currentQuestionIndex} of {totalQuestions})</h2>
          <p className={`quiz-timer ${timeLeft < 10 ? "low-time" : ""}`}>Time left: {timeLeft}s</p>
          <div className="options-container">
            {question?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => submitAnswer(option)}
                disabled={answered}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Admin-only real-time leaderboard */}
      {isAdmin && !quizEnded && (
        <div className="leaderboard-container">
          <h2 className="leaderboard-title">Live Leaderboard</h2>
          <ul className="leaderboard-list">
            {leaderboard.map((team, index) => (
              <li key={team.id} className="leaderboard-item">
                <span>{index + 1}. {team.name}</span>
                <span>{team.points} points</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
