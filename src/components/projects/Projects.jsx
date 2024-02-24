import React from "react";
import './Projects.css';
import blockProject from "../../assets/SEP.PNG";
import comingSoon from "../../assets/coming_soon.avif";
import hipMigration from "../../assets/hipMigration.jpg";
const Projects = () =>
{


    return (
        <section id = "projects">
            <h2>Projects</h2>
            <div className = "container projects_container">
                <article className = "project">
                    <img src = {hipMigration} alt = "Validation batch of yolo model being trained (not very well)"/>
                    <h3>Hip Landmark feature detector</h3>
                    <small>Pytorch | Matlab </small><br/>
                    <a href = "https://github.com/Girhas/HipMigration" target = "_blank" rel = "noreferrer" className="linkButton">Code</a>
                </article>
                <article className = "project">
                    <img src = {blockProject} alt = "Australia being compressed using the block model compressor."/>
                    <h3>Block model compressor</h3>
                    <small>C++ </small><br/>
                    <a href = "https://github.com/Girhas/Block-model-compressor" target = "_blank" rel = "noreferrer" className="linkButton">Code</a>
                </article>
                <article className = "project">
                    <img src = {comingSoon} alt = "This will be replaced once I get things working"/>
                    <h3>Non-invasive animal tracker</h3>
                    <small>Pytorch | React | Flask</small><br/>
                    <a href = "https://github.com/Girhas/JohnProject" target = "_blank" rel = "noreferrer" className="linkButton">Code</a>
                </article>
            </div>
        </section>
    );
}

export default Projects;