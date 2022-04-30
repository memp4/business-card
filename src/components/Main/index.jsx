import React from 'react';
import './index.scss';
import TextBlock from '../TextBlock';
import Line from '../Line';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <TextBlock style={{ paddingTop: '20%' }}>
                <Line lettersArr={"Greetings".split('')} />
                <Line lettersArr={"I'm Sultan,".split('')} />
                <Line lettersArr={"Web Developer".split('')}/>
            </TextBlock>
            <Link to="/contact">
                <Button color={"#f6ebcb"} hoverColor={"#252d2d"}>
                    Contact me!
                </Button>
            </Link>
        </div>
    );
};

export default Main;