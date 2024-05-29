import React, { useState } from 'react';


const HoverLableTextChange = ({ oldText, newText }) => {
    const [isHovered, setIsHovered] = useState(false);
    const marginBottom = '20px';

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer', marginBottom: marginBottom }}
        >
            {isHovered ? <p>{newText}</p> : <p>{oldText}</p>}
        </div>
    );
};

export default HoverLableTextChange;