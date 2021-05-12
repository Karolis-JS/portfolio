import React from 'react';
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    let {pathname} = useLocation();

    return (
        <div className="navbar">
            <div>
                <Link className={pathname === "/my-page" ? "active" : null} to="/my-page">Home</Link>
            </div>

            <div>
                <Link className={pathname === "/my-page/about"? "active" : null} to="/my-page/about">About Me</Link>
            </div>

            <div>
                <Link className={pathname === "/my-page/portfolio"? "active" : null} to="/my-page/portfolio">Portfolio</Link>
            </div>

            <div>
                <Link className={pathname === "/my-page/contacts"? "active" : null} to="/my-page/contacts">Let's get in touch</Link>
            </div>



        </div>
    );
}

export default Navbar;