import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Globe className="w-5 h-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Zap className="w-5 h-5" /> },
  ];

  const skills = [
    {
      name: 'React',
      level: 95,
      category: 'frontend',
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-400',
      description: 'Advanced React development with hooks, context, and modern patterns',
      projects: 15,
      experience: '2+ years'
    },
    {
      name: 'Tailwind CSS',
      level: 98,
      category: 'frontend',
      icon: '🎨',
      color: 'from-cyan-400 to-teal-400',
      description: 'Expert in utility-first CSS framework and responsive design',
      projects: 20,
      experience: '2+ years'
    },
    {
      name: 'JavaScript',
      level: 90,
      category: 'frontend',
      icon: '📜',
      color: 'from-yellow-400 to-orange-400',
      description: 'ES6+, async/await, DOM manipulation, and modern JS features',
      projects: 25,
      experience: '2+ years'
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'frontend',
      icon: '📘',
      color: 'from-blue-600 to-blue-400',
      description: 'Type-safe development with interfaces, generics, and advanced types',
      projects: 12,
      experience: '1+ years'
    },
    {
      name: 'HTML & CSS',
      level: 98,
      category: 'frontend',
      icon: '🏗️',
      color: 'from-orange-400 to-red-400',
      description: 'Semantic HTML5, CSS3, Flexbox, Grid, and modern layout techniques',
      projects: 30,
      experience: '2+ years'
    },
    {
      name: 'Responsive Design',
      level: 95,
      category: 'design',
      icon: '📱',
      color: 'from-purple-400 to-pink-400',
      description: 'Mobile-first approach, breakpoints, and cross-device compatibility',
      projects: 25,
      experience: '2+ years'
    },
    {
      name: 'Framer Motion',
      level: 80,
      category: 'frontend',
      icon: '🎭',
      color: 'from-green-400 to-blue-400',
      description: 'Advanced animations, transitions, and interactive motion design',
      projects: 8,
      experience: '1+ years'
    },
    {
      name: 'Git & GitHub',
      level: 88,
      category: 'tools',
      icon: '📚',
      color: 'from-gray-400 to-gray-600',
      description: 'Version control, branching strategies, and collaborative development',
      projects: 30,
      experience: '2+ years'
    },
    {
      name: 'Figma',
      level: 75,
      category: 'design',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      description: 'UI/UX design, prototyping, and design system creation',
      projects: 10,
      experience: '1+ years'
    },
    {
      name: 'Node.js',
      level: 60,
      category: 'frontend',
      icon: '🟢',
      color: 'from-green-500 to-green-400',
      description: 'Backend development, APIs, and server-side JavaScript (Learning)',
      projects: 3,
      experience: 'Learning'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen  text-white">
      <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring creative designs to life with precision and innovation
            </p>
            <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-400/30'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {filteredSkills.map((skill, index) => (
              <div
                key={`${activeCategory}-${skill.name}`}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <motion.div 
                  className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
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
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Skill Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="text-3xl"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 15,
                            filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))'
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-400">{skill.experience}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.div 
                          className="text-2xl font-bold text-cyan-400"
                          whileHover={{ 
                            scale: 1.15,
                            textShadow: '0 0 20px rgba(0, 212, 255, 0.8)'
                          }}
                        >
                          {skill.level}%
                        </motion.div>
                        <div className="text-xs text-gray-400">{skill.projects} projects</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 500}ms`
                        }}
                        whileHover={{
                          boxShadow: `0 0 20px ${skill.color.includes('cyan') ? 'rgba(0, 212, 255, 0.6)' : 'rgba(139, 92, 246, 0.6)'}`
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </motion.div>
                    </div>

                    {/* Expandable Description */}
                    <motion.div 
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Enhanced Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: '10+', label: 'Technologies', color: 'text-cyan-400' },
                { value: '30+', label: 'Projects', color: 'text-purple-400' },
                { value: '2+', label: 'Years Exp.', color: 'text-cyan-400' },
                { value: '95%', label: 'Avg. Skill', color: 'text-purple-400' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-lg mt-8 mb-6">
              Always learning and staying up-to-date with the latest technologies and best practices
            </p>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-full text-cyan-400 transition-transform duration-300 hover:scale-105">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Currently exploring: Node.js, Express.js, MongoDB
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;