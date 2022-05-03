import React from 'react';
import './index.scss';

import TextBlock from '../TextBlock';
import Line from '../Line';
import Slider from '../Slider';

const About = () => {
    return (
        <div className="main main-flex">
            <div>
                <TextBlock style={{ paddingTop: '10%' }}>
                    <Line lettersArr={'About me'.split('')} />
                </TextBlock>
                <p className="article">
                    I'm frontend developer. I have good knowledge of HTML, CSS and JavaScript.
                    Mainly worked with React framework and his ecosystem(React Router, Redux, Reactstrap).
                    Also I'm familiar with such tools like Sass, Git, that makes dvelopment easier and ready to learn new one.
                    <br />
                    I'm not a designer, but I would be glad to take on creative work.
                    Additionally I know other prgramming languages: Python, C#, Lua.
                </p>
            </div>
            <Slider />
        </div>
    );
};

export default About;