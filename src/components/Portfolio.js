import React from 'react';
import Navbar from "./Navbar";
import img from '../images/recipe page.png'
import img2 from '../images/rpg_game.png'


function Portfolio() {
    return (
        <div className="page">
            <Navbar />

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
                    <a href="https://github.com/Karolis-JS/recipes-page-react-nodejs-mongodb">
                        <div className="goToCode">Go to code</div>
                    </a>
                </div>
                <div className="portfolio-card">
                    <p>More app coming soon</p>
                    <img src="http://www.russellwilbinski.com/wp-content/uploads/2018/11/measuring_progress.jpg" alt=""/>
                    <a href="#">
                        <div className="goToCode">Go to code</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;