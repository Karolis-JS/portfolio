import React from 'react';
import Navbar from "./Navbar";
import HomeImg from "./HomeImg";
import HomeText from "./HomeText";

function Home() {
    return (

        <div className="page">
            <Navbar />
        <div className="w-100 d-flex ">
            <HomeText />
            <HomeImg />
        </div>
        </div>
    );
}

export default Home;