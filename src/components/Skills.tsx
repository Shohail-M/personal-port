import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Server, Palette, Brain, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '0px 0px 100px 0px'
  });

  const skillCategories: SkillCategory[] = [
    {
      name: 'All',
      skills: [
        {
          name: 'React',
          level: 70,
          icon: <Code className="w-6 h-6" />,
          description: 'Advanced React development with hooks, context, and modern patterns',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'TypeScript',
          level: 70,
          icon: <Code className="w-6 h-6" />,
          description: 'Strong typing and advanced TypeScript features',
          color: isDark ? '#3178c6' : '#8b5cf6'
        },
        {
          name: 'Next.js',
          level: 50,
          icon: <Globe className="w-6 h-6" />,
          description: 'Full-stack React framework with SSR and SSG',
          color: isDark ? '#ffffff' : '#111827'
        },
        {
          name: 'Tailwind CSS',
          level: 92,
          icon: <Palette className="w-6 h-6" />,
          description: 'Utility-first CSS framework for rapid UI development',
          color: isDark ? '#06b6d4' : '#0ea5e9'
        },
        {
          name: 'Node.js',
          level: 75,
          icon: <Server className="w-6 h-6" />,
          description: 'Server-side JavaScript with Express and modern frameworks',
          color: isDark ? '#68a063' : '#059669'
        },
        {
          name: 'Python',
          level: 30,
          icon: <Code className="w-6 h-6" />,
          description: 'Backend development with Django and FastAPI',
          color: isDark ? '#3776ab' : '#8b5cf6'
        },
        {
          name: 'PostgreSQL',
          level: 0,
          icon: <Database className="w-6 h-6" />,
          description: 'Advanced database design and optimization',
          color: isDark ? '#336791' : '#0ea5e9'
        },
        {
          name: 'MongoDB',
          level: 78,
          icon: <Database className="w-6 h-6" />,
          description: 'NoSQL database design and aggregation pipelines',
          color: isDark ? '#47a248' : '#059669'
        },
        {
          name: 'React Native',
          level: 83,
          icon: <Smartphone className="w-6 h-6" />,
          description: 'Cross-platform mobile app development',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'Flutter',
          level: 10,
          icon: <Smartphone className="w-6 h-6" />,
          description: 'Native mobile apps with Dart and Flutter',
          color: isDark ? '#02569b' : '#8b5cf6'
        }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          level: 70,
          icon: <Code className="w-6 h-6" />,
          description: 'Advanced React development with hooks, context, and modern patterns',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'TypeScript',
          level: 50,
          icon: <Code className="w-6 h-6" />,
          description: 'Strong typing and advanced TypeScript features',
          color: isDark ? '#3178c6' : '#8b5cf6'
        },
        {
          name: 'Next.js',
          level: 50,
          icon: <Globe className="w-6 h-6" />,
          description: 'Full-stack React framework with SSR and SSG',
          color: isDark ? '#ffffff' : '#111827'
        },
        {
          name: 'Tailwind CSS',
          level: 92,
          icon: <Palette className="w-6 h-6" />,
          description: 'Utility-first CSS framework for rapid UI development',
          color: isDark ? '#06b6d4' : '#0ea5e9'
        }
      ]
    },
    {
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          level: 30,
          icon: <Server className="w-6 h-6" />,
          description: 'Server-side JavaScript with Express and modern frameworks',
          color: isDark ? '#68a063' : '#059669'
        },
        {
          name: 'Python',
          level: 10,
          icon: <Code className="w-6 h-6" />,
          description: 'Backend development with Django and FastAPI',
          color: isDark ? '#3776ab' : '#8b5cf6'
        },
        {
          name: 'PostgreSQL',
          level: 0,
          icon: <Database className="w-6 h-6" />,
          description: 'Advanced database design and optimization',
          color: isDark ? '#336791' : '#0ea5e9'
        },
        {
          name: 'MongoDB',
          level: 40,
          icon: <Database className="w-6 h-6" />,
          description: 'NoSQL database design and aggregation pipelines',
          color: isDark ? '#47a248' : '#059669'
        }
      ]
    },
    {
      name: 'Mobile',
      skills: [
        {
          name: 'React Native',
          level: 83,
          icon: <Smartphone className="w-6 h-6" />,
          description: 'Cross-platform mobile app development',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'Flutter',
          level: 10,
          icon: <Smartphone className="w-6 h-6" />,
          description: 'Native mobile apps with Dart and Flutter',
          color: isDark ? '#02569b' : '#8b5cf6'
        }
      ]
    }
  ];

  const currentSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise across various domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 hover:border-cyan-400/50' 
                    : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-400/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05, transparent)`
                  }}
                />

                {/* Floating Particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                    style={{ backgroundColor: skill.color }}
                    initial={{ scale: 0, x: 30, y: 30 }}
                    whileHover={{
                      scale: [0, 1, 0],
                      x: [30, Math.random() * 200 - 100],
                      y: [30, Math.random() * 200 - 100],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                    style={{ backgroundColor: skill.color }}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}

                {/* Icon */}
                <motion.div
                  className="relative mb-4 p-4 rounded-xl inline-block"
                  style={{ backgroundColor: `${skill.color}20` }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 5,
                    boxShadow: `0 10px 30px ${skill.color}40`,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Icon Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{ 
                      background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                      filter: 'blur(8px)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Skill Name */}
                <motion.h3 
                  className={`text-xl font-bold mb-3 relative z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  whileHover={{ 
                    color: skill.color,
                    textShadow: `0 0 20px ${skill.color}50`,
                    transition: { duration: 0.3 }
                  }}
                >
                  {skill.name}
                </motion.h3>

                {/* Progress Bar */}
                <div className={`w-full rounded-full h-3 mb-4 relative overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    className="h-3 rounded-full relative overflow-hidden"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    whileHover={{
                      boxShadow: `0 0 20px ${skill.color}60`,
                      filter: 'brightness(1.2)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{ x: ['100%', '200%'] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: 1 + index * 0.2,
                        repeatDelay: 3
                      }}
                    />
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Skill Level */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proficiency
                  </span>
                  <motion.span 
                    className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                    whileHover={{ 
                      scale: 1.1,
                      color: skill.color,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Description */}
                <motion.div
                  className="overflow-hidden relative z-10"
                  initial={{ height: 0, opacity: 0, y: 10 }}
                  whileHover={{ 
                    height: 'auto', 
                    opacity: 1,
                    y: 0,
                    transition: { 
                      duration: 0.4, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      staggerChildren: 0.1
                    }
                  }}
                >
                  <motion.p 
                    className={`text-sm leading-relaxed pt-2 border-t ${
                      isDark ? 'text-gray-300 border-gray-600/30' : 'text-gray-600 border-gray-300/30'
                    }`}
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { delay: 0.1, duration: 0.3 }
                    }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>

                {/* Enhanced Hover Effects */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}30, transparent, ${skill.color}20)`,
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude'
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                    clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Years of Experience', value: '2+', icon: <Zap className="w-6 h-6" />, color: '#00d4ff' },
            { label: 'Technologies Mastered', value: '10+', icon: <Code className="w-6 h-6" />, color: '#8b5cf6' },
            { label: 'Projects Completed', value: '15+', icon: <Globe className="w-6 h-6" />, color: '#00d4ff' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 rounded-2xl backdrop-blur-sm border ${
                isDark 
                  ? 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50' 
                  : 'bg-white/80 border-gray-200/60 shadow-sm hover:shadow-lg hover:bg-white'
              }`}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: `0 20px 40px ${stat.color}20`,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ 
                  backgroundColor: `${stat.color}20`,
                  color: stat.color
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: `0 0 30px ${stat.color}40`,
                  transition: { duration: 0.6 }
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                whileHover={{
                  scale: 1.1,
                  color: stat.color,
                  transition: { duration: 0.3 }
                }}
              >
                {stat.value}
              </motion.div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;