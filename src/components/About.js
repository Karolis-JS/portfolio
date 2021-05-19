import React from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import img from '../images/mongodb.png'
import MyPDF from '../files/CV_Karolis_Soblinskas_Full-stack.pdf';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { DiNpm } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiSass } from 'react-icons/di';
import { DiPhotoshop } from 'react-icons/di';
import { DiIllustrator } from 'react-icons/di';
import { SiAdobelightroomcc } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { Icon, InlineIcon } from '@iconify/react';
import coreldrawIcon from '@iconify-icons/file-icons/coreldraw';



function About() {
    return (
        <div className="page">
            <Navbar/>
            <div className="d-flex center mobile xl-size-about">
                <div className="about-text">
                    <p> <span className="mobile-about-text">I'm junior Full-stack web developer.</span> With javascript I build websites and create amazing things. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. Step by step I grow, that's why I’m excited! And I do not intend to stop, if You think I can be of use to you, <Link className="about-link" to="/my-page/contacts">let's get in touch!</Link></p>
                    <p>Let’s make something special.</p>
                    <a className="cv" href={MyPDF} download="CV_Karolis_Soblinskas_Full-stack.pdf">My CV</a>
                </div>
                <div className="about-icon-div">
                    <div className="about-icon">
                        <div>
                            <p>Technologies</p>
                        </div>
                        <div className="all-icons-div">
                            <AiFillHtml5 className="icon"/>
                            <IoLogoCss3 className="icon"/>
                            <SiJavascript className="icon"/>
                            <FaReact className="icon"/>
                            <FaNode className="icon"/>
                            <DiNpm className="icon"/>
                            <BsFillBootstrapFill className="icon"/>
                            <DiSass className="icon"/>
                            <img className="mongoImg" src={img} alt=""/>
                            <AiFillGithub className="icon"/>
                        </div>
                        <div className="about-icon">
                            <div>
                                <p>design</p>
                            </div>

                            <div>
                                <DiPhotoshop className="icon"/>
                                <DiIllustrator className="icon"/>
                                <SiAdobelightroomcc className="icon2"/>
                                <Icon icon={coreldrawIcon} className="icon3" />
                            </div>

                        </div>

                    </div>



                </div>

            </div>
            </div>
    );
}

export default About;