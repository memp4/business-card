import React from 'react';
import './index.scss';
import TextBlock from '../TextBlock';
import Button from '../Button';

const Main = () => {
    return (
        <div className="main">
            <TextBlock>
                <p className="line">Greetings,</p>
                <br />
                <p className="line">I'm Sultan,</p>
                <br />
                <p className="line">Web Developer</p>
            </TextBlock>
            <Button/>
        </div>
    );
};

export default Main;