import React from 'react';
import './index.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

import {
    ReactIcon,
    JavaScriptIcon,
    SassIcon,
    GitIcon,
    ReduxIcon
} from '../../assets/svg-icons';

import Button from '../Button';

const Slider = () => {
    const [sliderPos, setSliderPos] = useState(0);
    const slidesArr = [ReactIcon, JavaScriptIcon, SassIcon, GitIcon, ReduxIcon];
    const innerAnimate = {
        x: `${sliderPos * -22}rem`
    };
    const innerTransition = {
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        bounce: 0.2
    };
    const sliderLength = 4;

    const handleRightClick = () => {
        if (sliderPos >= sliderLength) {
            setSliderPos(0);
            return;
        }
        setSliderPos(sliderPos + 1);
    }

    const handleLeftClick = () => {
        if (sliderPos <= 0) {
            setSliderPos(sliderLength);
            return;
        }
        setSliderPos(sliderPos - 1);
    }

    return (
        <div className="slider">
            <div className="slider-wrapper">
                <motion.div animate={innerAnimate} transition={innerTransition} className="slider-inner">
                    {slidesArr.map((slide, index) => (
                        <motion.img 
                            src={slide} 
                            animate={{
                                scale: sliderPos === index ? 1 : 0.3,
                            }}
                            alt="react-icon" 
                            className="icon" />
                    ))}
                </motion.div>
            </div>
            <div className="slider-buttons">
                <Button color={"#f6ebcb"} hoverColor={"#252d2d"} onClick={handleLeftClick}>
                    Left
                </Button>
                <Button color={"#f6ebcb"} hoverColor={"#252d2d"} onClick={handleRightClick}>
                    Right
                </Button>
            </div>
        </div>
    );
};

export default Slider;