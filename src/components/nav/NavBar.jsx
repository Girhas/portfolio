import React from 'react';
import {useState} from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse}  from '@fortawesome/free-solid-svg-icons';
import {faUser}  from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode}  from '@fortawesome/free-solid-svg-icons';
import {faDiagramProject}  from '@fortawesome/free-solid-svg-icons';
import {faEnvelope}  from '@fortawesome/free-solid-svg-icons';



const Nav = () =>
{
    const [currentNav, setCurrentNav] = useState('#');
    return(
        <nav>
            <a href = "#home" onClick = {() => setCurrentNav("#")} className= {currentNav === '#' ? 'active' : ''}> <FontAwesomeIcon icon = {faHouse} /> </a>
            <a href = "#about" oncClick = {() => setCurrentNav("#about")} className= {currentNav === '#about' ? 'active' : ''}> <FontAwesomeIcon icon = {faUser} /> </a>
            <a href = "#experience" onClick = {() => setCurrentNav("#experience")} className= {currentNav === '#experience' ? 'active' : ''}> <FontAwesomeIcon icon = {faLaptopCode} /> </a>
            <a href = "#projects" onClick = {() => setCurrentNav("#projects")} className= {currentNav === '#projects' ? 'active' : ''}> <FontAwesomeIcon icon = {faDiagramProject} /> </a>
            <a href = "#contact" onClick = {() => setCurrentNav("#contact")} className= {currentNav === '#contact' ? 'active' : ''}> <FontAwesomeIcon icon = {faEnvelope} /> </a>
        </nav>
    );
}

export default Nav