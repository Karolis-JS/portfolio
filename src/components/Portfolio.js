import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import Navbar from "./Navbar";
import img from '../images/recipe page.png'
import img2 from '../images/rpg_game.png'
import img3 from '../images/blog_page.gif'
import img4 from '../images/rent.gif'
import mob from '../images/mob.png'
import nuru from '../images/nuru_mobile.gif'
import nuruimob from '../images/nurui_for_mobile.png'




function Portfolio() {

    return (
        <div className="page" >
            <Navbar />
            <div className="l-size">
                <Helmet>
                    <script src="https://npmcdn.com/flickity@2/dist/flickity.pkgd.js" type="text/javascript" />
                </Helmet>
                <div className="carousel js-flickity">

                    <div className="carousel-cell">
                        <figure className="snip0015">
                            <img src={img} alt="sample38"/>
                            <figcaption >
                                <h2><span>Recipes</span> application</h2>
                                <p>react, nodeJS, mongoDb</p>

                                <a style={{outline: "none"}} href="https://github.com/Karolis-JS/recipes-page-react-nodejs-mongodb">
                                    <p className="see-code">See code</p>
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-cell">
                        <figure className="snip0015">
                            <img src={img2} alt="sample38"/>
                            <figcaption >
                                <h2><span>RPG</span> game application</h2>
                                <p>nodeJS, socket.io</p>

                                <a style={{outline: "none"}} href="#">
                                    <p className="see-code">See code</p>
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-cell">
                        <figure className="snip0015">
                            <img src={img3} alt="sample38"/>
                            <div className="mob-div">
                                <img className='mob' src={mob} alt=""/>
                                <img className="mob-gif" src={nuru} alt=""/>
                            </div>
                            <figcaption >
                                <h2><span>Blog</span> application</h2>
                                <p>Only Html and Css</p>

                                <a style={{outline: "none"}} href="#">
                                    <p className="see-code">See code</p>
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-cell">
                        <figure className="snip0015">
                            <img src={img4} alt="sample38"/>
                            <figcaption >
                                <h2>Simple <span>booking</span> application with registration</h2>
                                <p>JavaScript, nodeJS, express-session</p>

                                <a style={{outline: "none"}} href="#">
                                    <p className="see-code">See code</p>
                                </a>
                            </figcaption>
                        </figure>
                    </div>


                </div>
            </div>
            <div className="mobile-size">
                <div className="portfolio-main">
                    <div className="portfolio-card">
                        <p>Recipes application (react, nodeJS, mongoDb)</p>
                        <img src={img} alt=""/>
                        <a href="https://github.com/Karolis-JS/recipes-page-react-nodejs-mongodb">
                            <div className="goToCode">Go to code</div>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <p>Rpg game application (nodeJS, socket.io)</p>
                        <img src={img2} alt=""/>
                        <a href="#">
                            <div className="goToCode">Go to code</div>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <p>Blog application (only Html and Css)</p>
                        <img src={nuruimob} alt=""/>
                        <a href="#">
                            <div className="goToCode">Go to code</div>
                        </a>
                    </div>

                    <div className="portfolio-card">
                        <p>Simple <span>booking</span> application with registration (JavaScript, nodeJS, express-session)</p>
                        <img src={img4} alt=""/>
                        <a href="#">
                            <div className="goToCode">Go to code</div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;