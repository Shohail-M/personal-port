import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '0px 0px 100px 0px'
  });

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with drag-and-drop functionality, team collaboration, and project tracking.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'GSAP', 'EmailJS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Restaurant Landing Page',
      description: 'An elegant landing page for a restaurant featuring online reservations, menu showcase, and location information.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'AOS', 'React Router'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A clean weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'API Integration', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Context API', 'Tailwind CSS', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in modern web development, 
            responsive design, and user experience optimization.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative h-full ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <motion.div 
                className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full flex flex-col"
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
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
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold rounded-full"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)'
                    }}
                  >
                    Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay Buttons */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 5,
                          boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)'
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors duration-200"
                        title="View Live"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: -5,
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)'
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors duration-200"
                        title="View Code"
                      >
                        <Github size={20} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3"
                    whileHover={{ 
                      color: '#67e8f9',
                      textShadow: '0 0 10px rgba(103, 232, 249, 0.5)'
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(0, 212, 255, 0.2)',
                          borderColor: 'rgba(0, 212, 255, 0.4)',
                          boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: '0 10px 25px rgba(0, 212, 255, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
                    >
                      <Eye size={16} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <button
            onClick={() => window.open('https://github.com/samiulalimniloy', '_blank')}
            className="group px-8 py-4 border-2 border-gradient-to-r from-cyan-400 to-purple-400 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Github size={20} />
              Visit My GitHub
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;