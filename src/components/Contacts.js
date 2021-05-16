import React from 'react';
import Navbar from "./Navbar";
import { GoLocation } from 'react-icons/go';
import { TiMail } from 'react-icons/ti';
import { SiFacebook } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';

function Contacts() {

    return (
        <div className="page">
            <Navbar />
            <div>

                <div className="contact-location">
                    <div>
                        <h1 className="glitch">CONTACT ME</h1>
                    </div>
                    <div className="line"></div>
                    <div>
                        <div className="contact-info">
                            <GoLocation className='location'/>
                            <p>Vilnius, Lithuania</p>
                        </div>
                        <div className="contact-info">
                            <TiMail className='location'/>
                            <p>karolis.soblinskas@gmail.com</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="contact-icon">
                        <p>
                            <a href="https://www.facebook.com/karolis.soblinskas">
                                <SiFacebook className="fb"/>
                            </a>
                        </p>

                        <p>
                            <a href="https://www.linkedin.com/in/karolis-%C5%A1oblinskas-a98b53113/">
                                <AiFillLinkedin className="linkedin"/>
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/karolis_soblinskas/">
                                <GrInstagram className="instagram"/>
                            </a>
                        </p>

                    </div>
                </div>
            </div>


            </div>
    );
}

export default Contacts;