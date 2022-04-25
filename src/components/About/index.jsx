import React from 'react';
import './index.scss';

import TextBlock from '../TextBlock';

const About = () => {
    return (
        <div className="main">
            <TextBlock style={{paddingTop: '20%'}}>
                <p className="line">About me</p>
            </TextBlock>
            <p className="article">
                I'm frontend developer. I have good knowledge of HTML, CSS and JavaScript.
                Mainly worked with React framework and his ecosystem(React Router, Redux, Reactstrap).
                I'm not a designer, but I would be glad to take on creative work.
                Additionally I know other prgramming languages: Python, C#, Lua.
            </p>
        </div>
    );
};

export default About;