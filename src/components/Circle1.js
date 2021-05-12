import React from 'react';
import { motion } from 'framer-motion';

function Circle1() {
    return (
        <motion.div drag={true} dragConstraints={{ left: -1100, right: 50, top: 0, bottom: 400 }}  className="circle1"><div className="drop">Drag me!</div></motion.div>
    );
}

export default Circle1;