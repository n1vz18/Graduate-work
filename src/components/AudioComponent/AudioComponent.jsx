import React, { useRef } from 'react';
import './audioComponent.css'
import { motion } from "framer-motion"

const AudioComponent = ({ audioFile }) => {
    const audioRef = useRef();

    const playAudio = () => {
        audioRef.current.play();
    };

    return (
        <div >
            <audio ref={audioRef}>
                <source src={audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className='btn_dictor' onClick={playAudio}>Послушай меня!</motion.button>
        </div>
    );
};

export default AudioComponent;
