import React from "react";
import "./Header.css";
import profilePic from '../../assets/me.jpg';

const Header = () =>
{
    return (
        <header id = "home">
            <div className = "container header_container">
                <h5>Nice to meet you, I'm</h5>
                <h1>Irhas Gill</h1>
                <h5>Undergraduate Software Engineer</h5>
                <img src = {profilePic} alt = "My early cpc days" className = "me"/>
            </div>
        </header>
    );
}

export default Header;