import React, { useState } from 'react';
import { motion } from "framer-motion"
import './quiz-block-component.css'

const QuizBlockComponent = ({ items }) => {
  const [sentences, setSentences] = useState(items);

  const handleOptionChange = (index, selectedOption) => {
    const isCorrect = selectedOption === sentences[index].correctAnswer;
    const updatedSentences = sentences.map((sentence, idx) => {
      if (idx === index) {
        return {
          ...sentence,
          answeredCorrectly: isCorrect,
          selectedOption: selectedOption
        };
      }
      return sentence;
    });
    setSentences(updatedSentences);
  };

  return (
    <div className="container">
      <div>
        {sentences.map((sentence, index) => (
          <div key={index} style={{ border: `3px solid ${sentence.answeredCorrectly === true ? 'green' : sentence.answeredCorrectly === false ? 'red' : '#F4F6F5'}`, padding: '10px', margin: '10px', borderRadius: '5px' }} className='map-block'>
            <h1 className='h1-english-tickets'>{sentence.english}{sentence.selectedOption || sentence.russian}.</h1>
            <label>
              Выберите правильный перевод слова <strong>{sentence.russian}:</strong>
              <motion.select className='select-english-tickets' whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 27 }} onChange={(e) => handleOptionChange(index, e.target.value)}>
                <option value="">Выберите</option>
                {sentence.options.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </motion.select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizBlockComponent;