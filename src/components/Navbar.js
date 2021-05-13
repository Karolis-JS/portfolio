import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';

function Navbar() {
    let {pathname} = useLocation();

    return (
        <div>
            <div className="navbar">
                <ul>
                    <li>
                        <span><AiFillHome className={pathname === "/my-page" ? "active" : null}/></span>
                        <span><Link to="/my-page">Home</Link></span>
                    </li>
                    <li>
                        <span><BsFillInfoSquareFill className={pathname === "/my-page/about" ? "active" : null}/></span>
                        <span><Link to="/my-page/about">About Me</Link></span>
                    </li>
                    <li>
                        <span ><BsFillBriefcaseFill className={pathname === "/my-page/portfolio" ? "active" : null}/></span>
                        <span><Link to="/my-page/portfolio">Portfolio</Link></span>
                    </li>
                    <li>
                        <span><RiContactsFill className={pathname === "/my-page/contacts" ? "active" : null}/></span>
                        <span><Link to="/my-page/contacts">Let's get in touch</Link></span>
                    </li>
                </ul>
            </div>
            <div className="navbar-mobile">
                <div>
                    <Link className={pathname === "/my-page" ? "active2" : null} to="/my-page">Home</Link>
                </div>

                <div>
                    <Link className={pathname === "/my-page/about"? "active2" : null} to="/my-page/about">About Me</Link>
                </div>

                <div>
                    <Link className={pathname === "/my-page/portfolio"? "active2" : null} to="/my-page/portfolio">Portfolio</Link>
                </div>

                <div>
                    <Link className={pathname === "/my-page/contacts"? "active2" : null} to="/my-page/contacts">Let's get in touch</Link>
                </div>

            </div>
        </div>

    );
}

export default Navbar;