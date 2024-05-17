import './contayner_back.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
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

const useHoverChangeText = (initialText, hoverText) => {
  const [text, setText] = useState(initialText);

  const handleMouseOver = () => {
    setText(hoverText);
  };

  const handleMouseOut = () => {
    setText(initialText);
  };

  return { text, handleMouseOver, handleMouseOut };
};

const HoverChangeText = () => {
  const { text, handleMouseOver, handleMouseOut } = useHoverChangeText(
    'Believe you can and you\'re halfway there',
    '"Верь в себя, и ты уже на полпути." - Теодор Рузвельт'
  );

  return (
    <div className='SayH1' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <p>{text}</p>
    </div>
  );
};

export default function ContaynerBack(){
    return (
      <motion.div initial="hidden" whileInView="visible">
        <div className="container">
          <div className="boxBack">
            <motion.div custom={2.5} variants={textAnimation} className="buttonBack" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link to="/">
                <div className="spanBlock">
                  <span className='spanBack'><IoIosArrowBack /></span>
                  <span className='spanBack'>Назад</span>
                </div>
              </Link>
            </motion.div>
            <motion.div custom={3.5} variants={textAnimation} className="SayHello">
              <HoverChangeText />
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }