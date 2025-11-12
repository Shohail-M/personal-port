import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Zap, Globe, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '0px 0px 100px 0px'
  });

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building modern, responsive websites using React, TypeScript, and the latest web technologies.',
      features: ['React Applications', 'Component Architecture', 'State Management', 'Performance Optimization']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design Implementation',
      description: 'Converting designs into pixel-perfect, interactive user interfaces with attention to detail.',
      features: ['Pixel Perfect Conversion', 'Design Systems', 'Interactive Elements', 'Accessibility Standards']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and works perfectly on all devices and screen sizes.',
      features: ['Mobile-First Approach', 'Cross-Browser Testing', 'Touch Optimization', 'Progressive Enhancement']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and user experience with modern best practices.',
      features: ['Core Web Vitals', 'Bundle Optimization', 'Image Optimization', 'Caching Strategies']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'API Integration',
      description: 'Connecting your frontend with APIs and third-party services for dynamic functionality.',
      features: ['REST API Integration', 'Real-time Data', 'Authentication', 'Error Handling']
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Currently expanding skills to offer complete web solutions from frontend to backend.',
      features: ['Frontend Expertise', 'Backend Learning', 'Database Integration', 'End-to-End Solutions'],
      badge: 'Coming Soon'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I specialize in building beautiful, responsive frontend websites that provide exceptional user experiences. 
            Currently expanding into full-stack development to offer complete web solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              <motion.div 
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full"
                whileHover={{ 
                  scale: 1.05,
                  y: -15,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0, 212, 255, 0.25)',
                  borderColor: 'rgba(0, 212, 255, 0.3)'
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                {/* Badge */}
                {service.badge && (
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)'
                    }}
                  >
                    {service.badge}
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 rounded-2xl text-cyan-400 mb-6"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: 'rgba(0, 212, 255, 0.3)',
                    borderColor: 'rgba(0, 212, 255, 0.6)',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)'
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-semibold text-white mb-4"
                  whileHover={{ 
                    color: '#67e8f9',
                    textShadow: '0 0 10px rgba(103, 232, 249, 0.5)'
                  }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-400"
                      whileHover={{ 
                        x: 5,
                        color: '#d1d5db'
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"
                        whileHover={{ 
                          scale: 1.5,
                          boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)'
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring your project to life?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm passionate about crafting digital experiences 
              that make a difference and help your business succeed.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get Started Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;