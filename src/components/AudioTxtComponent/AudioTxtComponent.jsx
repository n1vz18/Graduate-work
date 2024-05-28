import React, { useRef } from 'react';
import { motion } from "framer-motion"
import './audioTxtComponent.css'
import { MdSpatialAudioOff } from "react-icons/md";

const AudioTxtComponent = ({ audioFile }) => {
    const audioRef = useRef();

    const playAudio = () => {
        audioRef.current.play();
    };

    return (
        <div className='div_btntxt'>
            <audio ref={audioRef}>
                <source src={audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className='btn_dictortxt' onClick={playAudio}><MdSpatialAudioOff /></motion.button>
        </div>
    );
};

export default AudioTxtComponent;
