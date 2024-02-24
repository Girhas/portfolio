import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
    <footer>
        <ul className = "linkNav">
            <li><a href = "#home">Home</a></li>
            <li><a href = "#about">About</a></li>
            <li><a href = "#experience">Skills</a></li>
            <li><a href = "#projects">Projects</a></li>
        </ul>

        <div className = "socials">
            <a href = "https://www.linkedin.com/in/irhasgill">LinkedIn</a>
            <a href = "https://github.com/Girhas">Github</a>
        </div>
    </footer>
    );
}

export default Footer;