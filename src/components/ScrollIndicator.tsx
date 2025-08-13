import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900/20 backdrop-blur-sm"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left"
        style={{ scaleX }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-600/50 blur-sm origin-left"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;