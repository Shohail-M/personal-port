import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Enable native smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle anchor link clicks
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') || target;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }
      }
    };

    // Handle button clicks for smooth scrolling
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      if (button && button.hasAttribute('data-scroll-to')) {
        e.preventDefault();
        const targetSelector = button.getAttribute('data-scroll-to');
        const targetElement = document.querySelector(targetSelector!);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('click', handleButtonClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('click', handleButtonClick);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;