import React, { useState } from 'react';
import { motion } from "framer-motion"
import './wordHighlighter.css'

const WordHighlighter = ({ wordsList }) => {
    const [words, setWords] = useState(wordsList);

    const handleWordClick = (index) => {
        setWords(prevWords => {
            return prevWords.map((word, i) => {
                if (i === index && !word.isColor) {
                    return { ...word, isCrossedOut: !word.isCrossedOut };
                }
                return word;
            });
        });
    };

    return (
        <div className="container">
            <div className="color-words-container">
            {words.map((word, index) => (
                <motion.span
                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    key={index}
                    className={word.isColor ? 'color-word' : word.isCrossedOut ? 'crossed-out' : ''}
                    onClick={() => handleWordClick(index)}
                >
                    {word.text}
                </motion.span>
            ))}
        </div>
        </div>
    );
};

export default WordHighlighter;