import React, {  useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";

function HomeText() {

    const TEXTS = [
        "Junior full-stack web developer",
        "Junior javascript developer",
        "Junior react developer",
        "Junior front-end developer",
        "Junior back-end developer"
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
            <h1>I'm Karolis,</h1>
            <p>
                <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.wobbly }
                />
            </p>
            <Link className="here-me" to="/my-page/about">Here Me</Link>
        </div>
    );
}

export default HomeText;