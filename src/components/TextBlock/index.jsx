import React from 'react';
import './index.scss';

import { motion } from 'framer-motion';

const TextBlock = ({ children, style }) => {
    const fadeInVar = {
        hidden: { x: -100, opacity: 0 },
        visible: i => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.4
            }
        })
    };

    const animatedChildren = Array.isArray(children) ?
        children.map((item, index) => {
            return (
                <motion.div
                    key={index}
                    custom={index + 1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVar}
                >
                    {item}
                </motion.div>
            );
        }) :
        <motion.div 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInVar}
        >
            {children}
        </motion.div>

    return (
        <div className="text-block" style={style}>
            {animatedChildren}
        </div>
    );
};

export default TextBlock;



