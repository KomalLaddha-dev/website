import React, { useState } from "react";
import "./Admin.css"; // Import the CSS file

export default function Admin() {
    const [quizText, setQuizText] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [timerSeconds, setTimerSeconds] = useState("");

    const handleAddQuiz = async (e) => {
        e.preventDefault();

        const filteredOptions = options.filter((opt) => opt.trim() !== "");
        if (!quizText.trim()) {
            alert("Question text is required!");
            return;
        }
        if (filteredOptions.length < 2) {
            alert("At least two options are required!");
            return;
        }
        if (!correctAnswer || !filteredOptions.includes(correctAnswer)) {
            alert("Please select a valid correct answer from the options!");
            return;
        }

        const quizData = { text: quizText, options: filteredOptions, correct: correctAnswer };
        console.log("Sending quiz data:", quizData);

        try {
            const response = await fetch("https://nssrbu-backend.vercel.app/add-quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(quizData),
            });
            const data = await response.json();
            if (response.ok) {
                alert("✅ Quiz added successfully!");
                setQuizText("");
                setOptions(["", "", "", ""]);
                setCorrectAnswer("");
            } else {
                alert(data.message || "❌ Failed to add quiz");
            }
        } catch (error) {
            alert(`❌ Error adding quiz: ${error.message}`);
        }
    };

    const handleSetTimer = async (e) => {
        e.preventDefault();

        if (!timerSeconds || isNaN(timerSeconds) || timerSeconds <= 0) {
            alert("❌ Please enter a valid number of seconds!");
            return;
        }

        try {
            const response = await fetch("https://nssrbu-backend.vercel.app/set-quiz-start", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ seconds: 10 }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("✅ Quiz timer set successfully!");
                setTimerSeconds("");
            } else {
                alert(data.message || "❌ Failed to set timer");
            }
        } catch (error) {
            alert("❌ Error setting timer");
        }
    };

    return (
        <div className="container">
            <h2 className="title">Admin Controls</h2>

            {/* Add Quiz Form */}
            <form onSubmit={handleAddQuiz} className="form">
                <h3 className="subtitle">Add a Quiz Question</h3>
                <label>Question</label>
                <input
                    type="text"
                    value={quizText}
                    onChange={(e) => setQuizText(e.target.value)}
                    required
                />

                {options.map((option, index) => (
                    <div key={index}>
                        <label>Option {index + 1}</label>
                        <input
                            type="text"
                            value={option}
                            onChange={(e) => {
                                const newOptions = [...options];
                                newOptions[index] = e.target.value;
                                setOptions(newOptions);
                            }}
                        />
                    </div>
                ))}

                <label>Correct Answer</label>
                <select
                    className="select-box"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    required
                >
                    <option value="">Select correct answer</option>
                    {options
                        .filter((opt) => opt.trim() !== "")
                        .map((opt, index) => (
                            <option key={index} value={opt}>
                                {opt}
                            </option>
                        ))}
                </select>

                <button className="AdminButton" type="submit">Add Quiz</button>
            </form>

            {/* Set Timer Form */}
            <form onSubmit={handleSetTimer} className="form">
                <h3 className="subtitle">Set Quiz Start Timer</h3>
                <label>Seconds until start</label>
                <input
                    type="number"
                    value={timerSeconds}
                    onChange={(e) => setTimerSeconds(e.target.value)}
                    required
                />
                <button className="AdminButton" type="submit">Set Timer</button>
            </form>
        </div>
    );
}