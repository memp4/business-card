import React from 'react';
import './index.scss';

import { useState } from 'react';

const Button = ({ children, color, hoverColor }) => {
    const [buttonColor, setButtonColor] = useState({
        borderColor: color,
        color: color,
        backgroundColor: hoverColor
    });
    const handleMouseEnter = () => {
        const newButtonColor = {
            ...buttonColor,
            color: hoverColor,
            backgroundColor: color
        }
        setButtonColor(newButtonColor);
    }
    const handleMouseLeave = () => {
        const oldButtonColor = {
            ...buttonColor,
            color: color,
            backgroundColor: hoverColor
        }
        setButtonColor(oldButtonColor);
    }

    return (
        <div
            className="button"
            style={buttonColor}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default Button;