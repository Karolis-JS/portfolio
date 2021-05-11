import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";


function Navbar() {
    let {pathname} = useLocation();

    return (
        <div className="navbar">
            <div>
                <Link className={pathname === "/" ? "active" : null} to="/">Home</Link>
            </div>

            <div>
                <Link className={pathname === "/about"? "active" : null} to="/about">About Me</Link>
            </div>

            <div>
                <Link className={pathname === "/portfolio"? "active" : null} to="/portfolio">Portfolio</Link>
            </div>

            <div>
                <Link className={pathname === "/contacts"? "active" : null} to="/contacts">Let's get in touch</Link>
            </div>



        </div>
    );
}

export default Navbar;