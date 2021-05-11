import React from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import img from '../images/mongodb.png'
import { AiFillHtml5 } from 'react-icons/fa';

function About() {
    return (
        <div className="page">
            <Navbar/>
            <div className="d-flex">
                <div className="about-text">
                    <p>I'm junior Full-stack web developer. With javascript I build websites and create amazing things. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. Step by step I grow, that's why I’m excited! And I do not intend to stop, if You think I can be of use to you, <Link className="about-link" to="/contacts">let's get in touch!</Link></p>
                    <p>Let’s make something special.</p>
                </div>
                <div className="about-icon-div">
                    <p>The technologies which I use</p>
                    <div className="about-icon">
                        <AiFillHtml5/>
                        <i className="fab fa-html5"><br/><span>HTML</span></i>
                        <i className="fab fa-css3-alt"><br/><span>CSS</span></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-node"></i>
                        <i className="fab fa-npm"></i>
                        <i className="fab fa-bootstrap"></i>
                        <i className="fab fa-sass"></i>
                        <img className="mongoImg" src={img} alt=""/>
                    </div>


                </div>

            </div>
            </div>
    );
}

export default About;