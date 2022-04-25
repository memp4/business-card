import React from 'react';
import './index.scss';

const TextBlock = ({ children, style }) => {
    return (
        <div className="text-block" style={style}>
            {children}
        </div>
    );
};

export default TextBlock;



