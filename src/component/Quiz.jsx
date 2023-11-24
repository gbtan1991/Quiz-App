import React, { useState } from 'react';
import Question from './Questions';

const Quiz = ({ questions }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelect = (questionIndex, isCorrect) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: isCorrect,
    }));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          onSelect={(isCorrect) => handleSelect(index, isCorrect)}
        />
      ))}
      <button onClick={() => console.log(selectedOptions)}>Submit</button>
    </div>
  );
};

export default Quiz;