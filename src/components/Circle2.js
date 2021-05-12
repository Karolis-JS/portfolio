import React from 'react';
import { motion } from 'framer-motion';

function Circle2() {
    return (
        <motion.div drag={true} dragConstraints={{ left: -200, right: 900, top: -500, bottom: 0 }}  className="circle2"><div className="drop">Drag me!</div></motion.div>

    );
}

export default Circle2;