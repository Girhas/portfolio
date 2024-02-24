import React from "react";
import './Experience.css';
import Cpp from '../../assets/C++_Logo.png';
import C from '../../assets/C_Logo.png';
import Py from '../../assets/Python_Logo.png';
import Js from '../../assets/JavaScript_Logo.png';
import cs from '../../assets/CSS_Logo.png';
import ht from '../../assets/HTML_Logo.png';

const Experience = () => 
{
    return (
        <section id = "experience">
            <h2>Skills/Programming Languages</h2>
            <div className = "container skills_container">
                <div className = "languages">
                    <div className = "skills_content">
                        <article className = "skill_card">
                            <div>
                                <img src = {Cpp} className = 'logo' alt = "C++ logo"/>
                                <h4>C++</h4>
                                <small>Proficient</small>
                            </div>
                        </article>
                        <article className = "skill_card">
                            <div>
                                <img src = {C} className = 'logo' alt = "C logo"/>
                                <h4>C</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className = "skill_card">
                            <div>
                                <img src = {Py} className = 'logo' alt = "Python logo"/>
                                <h4>Python</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className = "languages">
                    <div className = "skills_content">
                        <article className = "skill_card">
                            <div>
                                <img src = {Js} className = 'logo' alt = "JavaScript logo"/>
                                <h4>JavaScript</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className = "skill_card">
                            <div>
                                <img src = {ht} className = 'logo' alt = "HTML logo"/>
                                <h4>HTML</h4>
                                <small>Basic</small>
                            </div>
                        </article>
                        <article className = "skill_card">
                            <div>
                                <img src = {cs} className = 'logo' alt = "CSS logo"/>
                                <h4>CSS</h4>
                                <small>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;