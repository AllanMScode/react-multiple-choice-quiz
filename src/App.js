import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the largest planet in our solar system?",
      options: [
        { id: 0, text: "Earth", isCorrect: false },
        { id: 1, text: "Mars", isCorrect: false },
        { id: 2, text: "Venus", isCorrect: false },
        { id: 3, text: "Jupiter", isCorrect: true },
      ],
    },
    {
      text: "What is the tallest mountain in the world?",
      options: [
        { id: 0, text: "Mount Everest", isCorrect: true },
        { id: 1, text: "K2", isCorrect: false },
        { id: 2, text: "Mount Kilimanjaro", isCorrect: false },
        { id: 3, text: "Mount Fuji", isCorrect: false },
      ],
    },
    {
      text: "Which gas do plants absorb from the atmosphere?",
      options: [
        { id: 0, text: "Carbon Dioxide", isCorrect: true },
        { id: 1, text: "Oxygen", isCorrect: false },
        { id: 2, text: "Nitrogen", isCorrect: false },
        { id: 3, text: "Hydrogen", isCorrect: false },
      ],
    },
    {
      text: "What is the hardest natural substance on Earth?",
      options: [
        { id: 0, text: "Iron", isCorrect: false },
        { id: 1, text: "Diamond", isCorrect: true },
        { id: 2, text: "Gold", isCorrect: false },
        { id: 3, text: "Platinum", isCorrect: false },
      ],
    },
    {
      text: "How many sides does a hexagon have?",
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "5", isCorrect: false },
        { id: 2, text: "6", isCorrect: true },
        { id: 3, text: "8", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  const optionClicked = (isCorrect) => {
    // console.log(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // this will take us to the next question
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>MCQ Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Current Score: {score}</h2>

      {/* if this is true, we display the final results, if false we display all the question cards */}

      {showFinalResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      ) : (
        /* 3. Question Card */

        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
