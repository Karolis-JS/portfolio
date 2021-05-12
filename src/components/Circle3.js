import React from 'react';
import { motion } from 'framer-motion';

function Circle3() {
    return (
        <motion.div drag={true} dragConstraints={{ left: -200, right: 850, top: -50, bottom: 300 }}  className="circle3"><div className="drop">Drag me!</div></motion.div>

    );
}

export default Circle3;