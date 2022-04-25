import React from 'react';
import './index.scss';

const Button = () => {
    //TODO: Refactor to make it more reusable and give it Linke component
    //It should contain child prop instead certain elements
    return (
        <div className="button">
            <span>Contact me!</span>
            <span>Click on me!</span>
        </div>
    );
};

export default Button;