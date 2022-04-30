import React from 'react';
import './index.scss';
import { motion } from 'framer-motion';

const Line = ({ lettersArr }) => {
    const bounce = {
        scaleX: [1, 1.3, 0.7, 1.3, 1],
        scaleY: [1, 0.7, 1.3, 0.7, 1],
        color: "#fa7610"
    }
    const spanLettersArr = lettersArr.map((letter, index) => {
        return ( letter === ' ' ? 
            <span style={{marginInline: "0.5rem"}} key={`${letter}_${index}`}></span> :
            <motion.li
                key={`${letter}_${index}`}
                whileHover={bounce}
                transition={{ duration: 0.6, type: "spring" }}
            >
                {letter}
            </motion.li> );
    });
    return (
        <motion.ul className="line">
            {spanLettersArr}
        </motion.ul>
    );
};

export default Line;