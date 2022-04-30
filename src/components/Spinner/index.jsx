import React from 'react';
import './index.scss';

import { motion } from 'framer-motion';

const Spinner = ({ children, style }) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1}}
            className="spinner"
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default Spinner;