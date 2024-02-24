import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope}  from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

const Contact = () => 
{
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_3sf8t7v', 'template_avxwyji', form.current, 'MYYxF1RGQUAxNWHvB');
        e.target.reset();
    }


    return(
        <section id = "contact">
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='direct_email'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <h4>Email</h4>
                        <h5>igill566@gmail.com</h5>
                        <a href="mailto:igill566@gmail.com">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Full Name" required />  {/* client side validation */}
                    <input type="email" name='email' placeholder='Email' required /> 
                    <textarea name="message" rows="6" placeholder='Message' required></textarea>
                    <button type="submit" className='linkButton button-primary'>Send Message</button>
                </form>
            </div>    
        </section>
    );
}

export default Contact;