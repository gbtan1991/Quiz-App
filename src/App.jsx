import React, { useState, useEffect } from "react";
import dataQuestions from "./data/questions.json";

export default function App() {
  
  const data = [
    {
      "id": 1,
      "question": "What does HTML stand for?",
      "options": [
        {"option": "Hyper Text Markup Language", "correct": true},
        {"option": "Hyperlinks and Text Markup Language", "correct": false},
        {"option": "Home Tool Markup Language", "correct": false},
        {"option": "High-level Text Management Language", "correct": false}
      ]
    },
    {
      "id": 2,
      "question": "Which property is used to change the background color in CSS?",
      "options": [
        {"option": "color", "correct": false},
        {"option": "background-color", "correct": true},
        {"option": "bgcolor", "correct": false},
        {"option": "background", "correct": false}
      ]
    },
    {
      "id": 3,
      "question": "What does CSS stand for?",
      "options": [
        {"option": "Counter Style Sheets", "correct": false},
        {"option": "Computer Style Sheets", "correct": false},
        {"option": "Cascading Style Sheets", "correct": true},
        {"option": "Colorful Style Sheets", "correct": false}
      ]
    },
    {
      "id": 4,
      "question": "Which HTML tag is used to create a hyperlink?",
      "options": [
        {"option": "<link>", "correct": false},
        {"option": "<a>", "correct": true},
        {"option": "<href>", "correct": false},
        {"option": "<hyperlink>", "correct": false}
      ]
    },
    {
      "id": 5,
      "question": "In CSS, which property is used to set the text color of an element?",
      "options": [
        {"option": "color", "correct": true},
        {"option": "text-color", "correct": false},
        {"option": "font-color", "correct": false},
        {"option": "style-color", "correct": false}
      ]
    }
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchData('./data/questions.json');
  //       const data = await response.json();

  //       setQuestions(data);
  //     } catch (error) {
  //       console.error('Error fetching questions', error);
  //     }
  //   }

  // }, []);

const [currentQuestion, setCurrentQuestion] = useState(0)

const handleAnswerButtonOnClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
}


  return (
    
    <div className="grid place-content-center h-screen">
      <h3>{`Question ${currentQuestion + 1}  / ${data.length}`}</h3>
      <p className="text-center text-5xl m-6">{data[currentQuestion].question}</p>
      <div className="grid grid-cols-2 gap-2">

        {data[currentQuestion].options.map((options) => 
        <button className="border border-stone-700 p-5 rounded-xl" onClick={handleAnswerButtonOnClick}>{options.option}</button>        
        )}
      </div>
    </div>
  );
}
