import React from 'react';
import './index.scss';
import TextBlock from '../TextBlock';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <TextBlock style={{ paddingTop: '20%' }}>
                <p className="line">Greetings,</p>
                <br />
                <p className="line">I'm Sultan,</p>
                <br />
                <p className="line">Web Developer</p>
            </TextBlock>
            <Link to="/contact">
                <Button />
            </Link>
        </div>
    );
};

export default Main;