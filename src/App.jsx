import React, { useState, useEffect } from "react";
import data from "./data/questions.json";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonOnClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className="grid place-content-center h-screen">
      <h3>{`Question ${currentQuestion + 1}  / ${data.length}`}</h3>
      <p className="text-center text-5xl m-6">
        {data[currentQuestion].question}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {data[currentQuestion].options.map((options) => (
          <button
            className="border border-stone-700 p-5 rounded-xl"
            onClick={handleAnswerButtonOnClick}
          >
            {options.option}
          </button>
        ))}
      </div>{" "}
    </div>
  );
}
