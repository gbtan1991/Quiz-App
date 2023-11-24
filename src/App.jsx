import React from 'react'
import Quiz from './component/Quiz';

const questions = [
  
  {
    "question": "What does HTML stand for?",
    "options": [
      {"option": "Hyper Text Markup Language", "correct": true},
      {"option": "Hyperlinks and Text Markup Language", "correct": false},
      {"option": "Home Tool Markup Language", "correct": false}
    ]
  },
  {
    "question": "Which property is used to change the background color in CSS?",
    "options": [
      {"option": "color", "correct": false},
      {"option": "background-color", "correct": true},
      {"option": "bgcolor", "correct": false}
    ]
  },
  {
    "question": "What does CSS stand for?",
    "options": [
      {"option": "Counter Style Sheets", "correct": false},
      {"option": "Computer Style Sheets", "correct": false},
      {"option": "Cascading Style Sheets", "correct": true}
    ]
  },
  {
    "question": "Which HTML tag is used to create a hyperlink?",
    "options": [
      {"option": "<link>", "correct": false},
      {"option": "<a>", "correct": true},
      {"option": "<href>", "correct": false}
    ]
  },
  {
    "question": "In CSS, which property is used to set the text color of an element?",
    "options": [
      {"option": "color", "correct": true},
      {"option": "text-color", "correct": false},
      {"option": "font-color", "correct": false}
    ]
  }
]

export default function App() {
  return (
    <div>
      <h1>React Quiz App</h1>
      <Quiz questions={questions} />
    </div>
  );
}