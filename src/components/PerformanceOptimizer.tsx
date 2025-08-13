import React, { useEffect, useRef } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Performance optimizations
    const optimizePerformance = () => {
      // Enable GPU acceleration for animated elements
      const animatedElements = document.querySelectorAll('[data-animate="true"]');
      animatedElements.forEach(element => {
        const el = element as HTMLElement;
        el.style.willChange = 'transform, opacity';
        el.style.transform = 'translateZ(0)'; // Force GPU layer
      });

      // Optimize images with lazy loading
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });

      // Add intersection observer for performance monitoring
      const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      };

      const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            // Element is visible, enable animations
            element.style.willChange = 'transform, opacity';
            element.classList.add('animate-in-view');
          } else {
            // Element is not visible, disable animations for performance
            element.style.willChange = 'auto';
            element.classList.remove('animate-in-view');
          }
        });
      }, observerOptions);

      // Observe all animated elements
      const elementsToObserve = document.querySelectorAll('[data-animate="true"]');
      elementsToObserve.forEach(el => performanceObserver.observe(el));

      return () => {
        performanceObserver.disconnect();
        animatedElements.forEach(element => {
          const el = element as HTMLElement;
          el.style.willChange = 'auto';
        });
      };
    };

    // Debounce resize events
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Recalculate layouts after resize
        const event = new CustomEvent('optimizedResize');
        window.dispatchEvent(event);
      }, 250);
    };

    // Throttle scroll events
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          // Custom scroll handling
          const event = new CustomEvent('optimizedScroll', {
            detail: { scrollY: window.scrollY }
          });
          window.dispatchEvent(event);
          scrollTimeout = null as any;
        }, 16); // ~60fps
      }
    };

    // Initialize optimizations
    const cleanup = optimizePerformance();
    
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Performance monitoring
    if ('performance' in window && 'PerformanceObserver' in window) {
      const perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      
      perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
    }

    return () => {
      cleanup?.();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(resizeTimeout);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="performance-optimized">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;