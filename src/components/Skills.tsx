import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const skillCategories: SkillCategory[] = [
    {
      name: 'All',
      skills: [
        {
          name: 'React',
          level: 95,
          icon: <Code className="w-6 h-6" />,
          description: 'Advanced React development with hooks, context, and modern patterns',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'TypeScript',
          level: 90,
          icon: <Code className="w-6 h-6" />,
          description: 'Strong typing and advanced TypeScript features',
          color: isDark ? '#3178c6' : '#8b5cf6'
        },
        {
          name: 'Next.js',
          level: 88,
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
          level: 60,
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
          level: 20,
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
          level: 95,
          icon: <Code className="w-6 h-6" />,
          description: 'Advanced React development with hooks, context, and modern patterns',
          color: isDark ? '#61dafb' : '#0ea5e9'
        },
        {
          name: 'TypeScript',
          level: 90,
          icon: <Code className="w-6 h-6" />,
          description: 'Strong typing and advanced TypeScript features',
          color: isDark ? '#3178c6' : '#8b5cf6'
        },
        {
          name: 'Next.js',
          level: 88,
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
          level: 75,
          icon: <Server className="w-6 h-6" />,
          description: 'Server-side JavaScript with Express and modern frameworks',
          color: isDark ? '#68a063' : '#059669'
        },
        {
          name: 'Python',
          level: 60,
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
          level: 20,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

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
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80' 
                    : 'bg-white/80 border-gray-200/60 hover:bg-white shadow-sm hover:shadow-lg'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
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
                  className="mb-4 p-3 rounded-xl inline-block"
                  style={{ backgroundColor: `${skill.color}20` }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Skill Name */}
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className={`w-full rounded-full h-2 mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    className="h-2 rounded-full relative overflow-hidden"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </motion.div>
                </div>

                {/* Skill Level */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proficiency
                  </span>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {skill.description}
                  </p>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Years of Experience', value: '5+', icon: <Zap className="w-6 h-6" /> },
            { label: 'Technologies Mastered', value: '20+', icon: <Code className="w-6 h-6" /> },
            { label: 'Projects Completed', value: '50+', icon: <Globe className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 rounded-2xl backdrop-blur-sm border ${
                isDark 
                  ? 'bg-gray-800/30 border-gray-700/50' 
                  : 'bg-white/60 border-gray-200/60 shadow-sm'
              }`}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-500/20 text-blue-600'
              }`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
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