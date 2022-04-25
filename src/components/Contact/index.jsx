import React, { useRef } from 'react';
import './index.scss';
import TextBlock from '../TextBlock';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const refEmail = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ipbh28q', 'template_r9di6o8', refEmail.current, 'Z3ovacmEGtb6-TZXn')
            .then((result) => {
                //TODO: Make display of result on the page
                console.log(result.text);
            }, (error) => {
                //TODO: Make display of error on the page
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <div className='main'>
            <TextBlock style={{ paddingTop: '3%' }}>
                Contact me!
            </TextBlock>
            <p className='article'>
                I'm interested in freelance or remote jobs.
                So you can contact with me through this form or
                email link below.
            </p>
            <a className="email-link" href="mailto:mamyrov10sultan@gmail.com">mamyrov10sultan@gmail.com</a>
            <form ref={refEmail} onSubmit={sendEmail} className="email-form">
                <input type="text" name="name" id="name" placeholder="Name" required />
                <input type="email" name="email" id="email" placeholder="Email" required />
                <input type="text" name="subject" id="subject" placeholder="Subject" required />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;