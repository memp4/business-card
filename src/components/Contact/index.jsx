import React from 'react';
import './index.scss';
import TextBlock from '../TextBlock';

const Contact = () => {
    return (
        <div className='main'>
            <TextBlock style={{paddingTop: '5%'}}>
                Contact me!
            </TextBlock>
            <p className='article'>
                I'm interested in freelance or remote jobs. 
                So you can contact with me through this form or 
                email link below.
            </p>
        </div>
    );
};

export default Contact;