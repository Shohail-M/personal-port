import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  transitionType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'parallax' | 'morphing';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  transitionType = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.8
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for scroll-based effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values based on scroll progress
  const y = useTransform(smoothProgress, [0, 1], [100, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);
  const rotate = useTransform(smoothProgress, [0, 1], [5, -5]);

  // Direction-based initial positions
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, x: 0 };
      case 'down': return { y: -60, x: 0 };
      case 'left': return { y: 0, x: 60 };
      case 'right': return { y: 0, x: -60 };
      default: return { y: 60, x: 0 };
    }
  };

  // Transition variants based on type
  const getTransitionVariants = () => {
    const initialPos = getInitialPosition();
    
    const baseVariants = {
      hidden: {
        opacity: 0,
        ...initialPos
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    switch (transitionType) {
      case 'scale':
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 }
        };
      
      case 'rotate':
        return {
          hidden: { ...baseVariants.hidden, rotate: -10 },
          visible: { ...baseVariants.visible, rotate: 0 }
        };
      
      case 'morphing':
        return {
          hidden: { 
            ...baseVariants.hidden, 
            scale: 0.8, 
            rotate: -5,
            borderRadius: '50%'
          },
          visible: { 
            ...baseVariants.visible, 
            scale: 1, 
            rotate: 0,
            borderRadius: '0%'
          }
        };
      
      case 'parallax':
        // For parallax, we use scroll-based transforms
        return baseVariants;
      
      default:
        return baseVariants;
    }
  };

  const variants = getTransitionVariants();

  // Performance optimization: Use will-change for animated properties
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.style.willChange = 'transform, opacity';
      return () => {
        element.style.willChange = 'auto';
      };
    }
  }, []);

  if (transitionType === 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          y: y,
          opacity: opacity,
          scale: scale,
          rotate: rotate
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "0px 0px 100px 0px",
        amount: 0.2
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;