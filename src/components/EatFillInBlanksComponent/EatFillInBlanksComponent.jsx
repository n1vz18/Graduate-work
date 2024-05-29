import { motion } from "framer-motion"
import React, { useState } from 'react';


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3}
  }),
}


const EatFillBlanksComponent = () => {
  const [answers, setAnswers] = useState(['', '', '', '', '', '']);
  const correctAnswers = ['zucchini', 'paprika', 'beans', 'gherkins', 'potato'];
  const placeholders = [
      'Aubergines are sometimes also called ',
      'Sweet peppers are red, green or yellow and are sometimes called ',
      'Haricot, broad, green, are kinds of ',
      'Small cucumbers which are pickled are called ',
      'Maris Piper, King Edwards and Jersey Royals are three kinds of ',
  ];
  const backplaceholders =[
    'red and yellow make __.',
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
      <div className='container'>
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
          />.</p>

          <p>3. {placeholders[2]} <input 
              type="text" 
              value={answers[2]} 
              onChange={(e) => handleInputChange(2, e)}
              style={getBorderStyle(2)} 
          />.</p>

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
          />.</p>
      </div>
  );
};

export default EatFillBlanksComponent;