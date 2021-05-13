import React, {  useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";


function HomeText() {

    const TEXTS = [
        "full-stack web developer",
        "javascript developer",
        "react developer",
        "front-end developer",
        "back-end developer"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            2500
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="home-text">
            <p>Hi! Nice to meet,</p>
            <h1 className="title-hover">I'm Karolis,</h1>
            <div className="d-flex mt-20 text-left mobile-size">
                <p className="mr-10">Junior</p>
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.wobbly }
                />
            </div>
            <Link className="here-me" to="/my-page/about">Here Me</Link>
        </div>
    );
}

export default HomeText;