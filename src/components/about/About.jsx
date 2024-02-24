import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap}  from '@fortawesome/free-solid-svg-icons';
import {faDumbbell}  from '@fortawesome/free-solid-svg-icons';
import {faCode}  from '@fortawesome/free-solid-svg-icons';
import aboutMe from '../../assets/about_me.jpg'
import Resume from '../../assets/Irhas_Gill_resume.pdf';
import './About.css';

const About = () =>
{
    return (
        <section id = 'about'>
            <h2>About Me</h2>
            <div className = "container about_container">
                <div className = "about_me">
                    <img src = {aboutMe} className = "about_image" alt = "My beginner competitive programming days" />
                </div>
                <div className = "about_content">
                    <div className = "about_cards">
                        <article className = "about_card">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <h4>Education</h4>
                            <small>Bachelor of Computer Science Advanced <br/> University of Adelaide <br/> Majoring in AI</small>
                        </article>
                        
                        <article className="about_card">
                            <FontAwesomeIcon icon={faDumbbell} />
                            <h4>Hobbies</h4>
                            <small>Judo<br/>Gym<br/>Cooking</small>
                        </article>

                        <article className = "about_card">
                            <FontAwesomeIcon icon={faCode} />
                            <h4>Development areas</h4>
                            <small>Product development <br/>3D modelling <br/>Computer Vision </small>
                        </article>
                    </div>

                    <div className = 'interested'>
                        <span>
                            <p>
                            Hello! I'm Irhas, an undergraduate software engineer studying computer science at
                            the University of Adelaide. I started off in computer science due to a love of maths
                            and problem-solving, and I'm fascinated by solving mathsy problems with coding.</p>

                            <p>Outside of competitive programming, studying, and doing part-time work at Maptek, I've 
                            picked up a few hobbies such as trying to make Pakistani food, hitting the gym and training
                            Judo with my uni. I believe that it's especially important to continue these hobbies
                            as a computer science student given we don't have the best track record with touching grass.

                            If you like what you've seen so far, feel free to check out my Resume or reach out.</p>
                        </span>
                        <div className='buttons'>
                            <a href = {Resume} download className = 'linkButton'>Download Resume</a>
                            <a href = '#contacts' className = 'linkButton'>Contact Me</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}


export default About;