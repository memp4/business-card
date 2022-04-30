import React, { useRef } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import { FaSpinner, FaCheck, FaBan } from 'react-icons/fa';
import { useState } from 'react';

import TextBlock from '../TextBlock';
import Line from '../Line';
import Spinner from '../Spinner';

const Contact = () => {
    const refEmail = useRef(),
        [submitIcon, setSubmitIcon] = useState(<></>),
        [submitStyle, setSubmitStyle] = useState({ class: "active", disabled: "" });

    const sendEmail = (e) => {
        e.preventDefault();

        setSubmitIcon(<Spinner style={{ maxWidth: "3rem" }}>
            <FaSpinner size={"2rem"} color={"#7fa0a0"} />
        </Spinner>);

        setSubmitStyle({ ...submitStyle, class: "disabled", disabled: "disabled" });

        emailjs.sendForm('service_ipbh28q', 'template_r9di6o8', refEmail.current, 'Z3ovacmEGtb6-TZXn')
            .then((result) => {
                console.log(result.text);
                setSubmitIcon(<FaCheck size={"2rem"} color={"#43c4a5"} />)
                setSubmitStyle({ ...submitStyle, class: "success" });

            }, (error) => {
                console.log(error.text);
                setSubmitIcon(<FaBan size={"2rem"} color={"#c44362"} />)
                setSubmitStyle({ ...submitStyle, class: "fail" });

            })
            .finally(() => {
                setTimeout(() => {
                    setSubmitStyle({ ...submitStyle, class: "active", disabled: "" });
                    setSubmitIcon(<></>);
                }, 3000);
            });
        e.target.reset();
    };


    return (
        <div className='main'>
            <TextBlock style={{ paddingTop: '3%' }}>
                <Line lettersArr={'Contact me!'.split('')} />
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
                <div className="button-section">
                    <input
                        className={`submit ${submitStyle.class}`}
                        type="submit"
                        value="Send"
                        disabled={submitStyle.disabled}
                    />
                    {submitIcon}
                </div>
            </form>
        </div>
    );
};

export default Contact;