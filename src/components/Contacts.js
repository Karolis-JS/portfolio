import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Contacts() {

    return (
        <div className="page">
            <Navbar />
            <div>
                <div className="contact-location">
                    <i className="fas fa-street-view"> <p>Vilnius, Lithuania</p></i>
                    <i className="fas fa-envelope"> <p>karolis.soblinskas@gmail.com</p></i>
                </div>
                <div className="contact-icon">
                    <p>
                        <a href="https://www.facebook.com/karolis.soblinskas">
                            <i className="fab fa-facebook fb"></i>
                        </a>
                    </p>
                    
                    <p>
                        <a href="https://www.linkedin.com/in/karolis-%C5%A1oblinskas-a98b53113/">
                            <i className="fab fa-linkedin linkedin"></i>
                        </a>
                    </p>
                    <p className="instagram">
                        <a href="https://www.instagram.com/karolis_soblinskas/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </p>


                </div>

            </div>


            </div>
    );
}

export default Contacts;