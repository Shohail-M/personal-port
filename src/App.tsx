import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import LoadingAnimation from './components/LoadingAnimation';
import SectionTransition from './components/SectionTransition';
import SmoothScroll from './components/SmoothScroll';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollIndicator from './components/ScrollIndicator';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <PerformanceOptimizer>
      <SmoothScroll>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
        }`}>
          {/* Custom Cursor */}
          <CustomCursor />
          
          <AnimatePresence mode="wait">
            {isLoading && (
              <LoadingAnimation />
            )}
          </AnimatePresence>

          {!isLoading && (
            <>
              <ParticleBackground />
              <ScrollIndicator />
              <Header isDark={isDark} toggleTheme={toggleTheme} />
              
              <main>
                <SectionTransition transitionType="fade">
                  <Hero />
                </SectionTransition>
                
                <SectionTransition transitionType="slide" direction="up" delay={0.2}>
                  <About />
                </SectionTransition>
                
                <SectionTransition transitionType="scale" delay={0.3}>
                  <Skills isDark={isDark} />
                </SectionTransition>
                
                <SectionTransition transitionType="parallax">
                  <Services />
                </SectionTransition>
                
                <SectionTransition transitionType="morphing" delay={0.1}>
                  <Projects />
                </SectionTransition>
                
                <SectionTransition transitionType="rotate" direction="left">
                  <Testimonials />
                </SectionTransition>
                
                <SectionTransition transitionType="slide" direction="up" delay={0.4}>
                  <Contact />
                </SectionTransition>
              </main>
              
              <SectionTransition transitionType="fade" delay={0.5}>
                <Footer />
              </SectionTransition>
              
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: isDark ? '#1e293b' : '#ffffff',
                    color: isDark ? '#ffffff' : '#1e293b',
                    border: isDark ? '1px solid #334155' : '1px solid #e2e8f0'
                  }
                }}
              />
            </>
          )}
        </div>
      </SmoothScroll>
    </PerformanceOptimizer>
  );
}

export default App;