import Option from "./Option"



const Question = ({ question, options, onSelect }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <Option key={index} optionText={option.option} onSelect={() => onSelect(option.correct)} />
      ))}
    </div>
  );
};

export default Question;