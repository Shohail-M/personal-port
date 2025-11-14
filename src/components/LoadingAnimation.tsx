import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate realistic loading stages
    const stages = [
      { delay: 200, stage: 1, progress: 25 },
      { delay: 600, stage: 2, progress: 50 },
      { delay: 1000, stage: 3, progress: 75 },
      { delay: 1400, stage: 4, progress: 100 }
    ];

    stages.forEach(({ delay, stage, progress: stageProgress }) => {
      setTimeout(() => {
        setLoadingStage(stage);
        setProgress(stageProgress);
      }, delay);
    });
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { 
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    animate: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1],
      opacity: [0, 1],
      x: [0, Math.cos(i * 60) * 100],
      y: [0, Math.sin(i * 60) * 100],
      transition: {
        duration: 2,
        delay: i * 0.1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  const morphingShapeVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              style={{
                left: `${(i + 1) * 5}%`,
                willChange: 'transform'
              }}
              animate={{
                scaleY: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: (i % 5) * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Main Logo with Morphing Effect */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="relative mb-12"
          >
            <div className="relative w-32 h-32">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                style={{ willChange: 'transform' }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner Logo */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                style={{ willChange: 'filter' }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))",
                    "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))",
                    "drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                SN
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={particleVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-4px',
                    marginLeft: '-4px'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Morphing SVG Shape */}
          <motion.div className="mb-8">
            <svg width="200" height="60" viewBox="0 0 200 60">
              <motion.path
                variants={morphingShapeVariants}
                initial="initial"
                animate="animate"
                d="M10,30 Q50,10 100,30 T190,30"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#00D4FF" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Advanced Progress Bar */}
          <div className="w-80 mb-8">
            <div className="flex justify-between items-center mb-2">
              <motion.span 
                className="text-cyan-400 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Portfolio...
              </motion.span>
              <motion.span 
                className="text-purple-400 font-bold"
                key={progress}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {progress}%
              </motion.span>
            </div>
            
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ width: "30%" }}
              />
            </div>
          </div>

          {/* Loading Stage Indicators */}
          <div className="flex space-x-4">
            {['Initializing', 'Loading Assets', 'Preparing UI', 'Almost Ready'].map((stage, index) => (
              <motion.div
                key={stage}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  loadingStage > index 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                    : 'bg-slate-800 text-gray-400'
                }`}
                animate={{
                  scale: loadingStage === index + 1 ? [1, 1.05, 1] : 1,
                  opacity: loadingStage >= index + 1 ? 1 : 0.5
                }}
                transition={{
                  scale: { duration: 0.5, repeat: loadingStage === index + 1 ? Infinity : 0 },
                  opacity: { duration: 0.3 }
                }}
              >
                {stage}
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0.6, 0],
                  scale: [1, 0.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;