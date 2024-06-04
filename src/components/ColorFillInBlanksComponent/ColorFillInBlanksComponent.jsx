import './color_fillIn.css'
import React, { useState } from 'react';



const FillBlanksComponent = () => {
  const [answers, setAnswers] = useState(['', '', '', '', '', '']);
  const correctAnswers = ['orange', 'blue', 'white', 'pink', 'blue', 'brown'];
  const placeholders = [
      'Red and yellow make ',
      'Yellow and ',
      'Black and ',
      'Red and white make ',
      'Red and ',
      'Green and orange make '
  ];
  const backplaceholders =[
    'red and yellow make __.',
    'make green.',
    'make grey.',
    ' make purple.'
  ]

  const handleInputChange = (index, event) => {
      const newAnswers = [...answers];
      newAnswers[index] = event.target.value;
      setAnswers(newAnswers);
  };

  const checkAnswer = (index, answer) => {
      return answer.toLowerCase() === correctAnswers[index];
  };

  const getBorderStyle = (index) => {
      return {
          border: `2px solid ${checkAnswer(index, answers[index]) ? 'lightgreen' : 'lightcoral'}`,
          borderRadius: '8px',
          padding: '5px',
          margin: '5px'
      };
  };

  return (
      <div>
          <p>1. {placeholders[0]} <input 
              type="text" 
              value={answers[0]} 
              onChange={(e) => handleInputChange(0, e)}
              style={getBorderStyle(0)} 
          />.</p>

          <p>2. {placeholders[1]} <input 
              type="text" 
              value={answers[1]} 
              onChange={(e) => handleInputChange(1, e)}
              style={getBorderStyle(1)} 
          /> {backplaceholders[1]}</p>

          <p>3. {placeholders[2]} <input 
              type="text" 
              value={answers[2]} 
              onChange={(e) => handleInputChange(2, e)}
              style={getBorderStyle(2)} 
          /> {backplaceholders[2]}</p>

          <p>4. {placeholders[3]} <input 
              type="text" 
              value={answers[3]} 
              onChange={(e) => handleInputChange(3, e)}
              style={getBorderStyle(3)} 
          />.</p>

          <p>5. {placeholders[4]} <input 
              type="text" 
              value={answers[4]} 
              onChange={(e) => handleInputChange(4, e)}
              style={getBorderStyle(4)} 
          /> {backplaceholders[3]}</p>

          <p>6. {placeholders[5]} <input 
              type="text" 
              value={answers[5]} 
              onChange={(e) => handleInputChange(5, e)}
              style={getBorderStyle(5)} 
          />.</p>

      </div>
  );
};

export default FillBlanksComponent;