import React from 'react';
import { motion } from 'framer-motion';

function Circle4(props) {
    return (
        <motion.div drag={true} dragConstraints={{ left: -800, right: 250, top: -500, bottom: 0 }}  className="circle4"></motion.div>

    );
}

export default Circle4;