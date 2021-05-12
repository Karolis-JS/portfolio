import React from 'react';
import { motion } from 'framer-motion';

function Circle5(props) {
    return (
        <motion.div drag={true} dragConstraints={{ left: -1000, right: 100, top: -350, bottom: 100 }}  className="circle5"><div className="drop">Drag me!</div></motion.div>

    );
}

export default Circle5;