import React from 'react'

const Option = ({ optionText, onSelect }) => {
    return (
      <div>
        <input type="radio" name="option" onChange={() => onSelect(optionText)} />
        <label>{optionText}</label>
      </div>
    );
  };
  
  export default Option;
