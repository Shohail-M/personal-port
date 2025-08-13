import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineItems = [
    {
      year: '2022',
      title: 'Started Frontend Journey',
      description: 'Began learning HTML, CSS, and JavaScript fundamentals',
      icon: <Code className="w-5 h-5" />
    },
    {
      year: '2023',
      title: 'React Mastery',
      description: 'Mastered React, hooks, and modern development patterns',
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Tailwind CSS Expert',
      description: 'Specialized in rapid, responsive UI development',
      icon: <Palette className="w-5 h-5" />
    },
    {
      year: 'Present',
      title: 'Full-Stack Learning',
      description: 'Currently expanding into backend technologies',
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 flex items-center justify-center overflow-hidden">
                  <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-cyan-300">
                    SN
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300/20 to-purple-400/20 rounded-3xl blur-xl opacity-50 -z-10"></div>
              </motion.div>
            </div>

            <div className="space-y-4 text-gray-200">
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className="text-cyan-300 font-semibold">Samiul Alim Niloy</span>, a passionate frontend web developer 
                specializing in building exceptional digital experiences. I craft modern, responsive websites 
                that not only look stunning but also provide seamless user interactions.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise in <span className="text-purple-400 font-semibold">React</span> and <span className="text-cyan-300 font-semibold">Tailwind CSS</span>, 
                I transform creative designs into functional, performant web applications. Currently expanding 
                my skills into backend development to become a full-stack developer.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              <div className="text-center p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/30">
                <div className="text-2xl font-bold text-cyan-300">15+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/30">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/30">
                <div className="text-2xl font-bold text-cyan-300">10+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8">My Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 to-purple-400"></div>

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-300 to-purple-400 rounded-full flex items-center justify-center text-gray-100 shadow-lg shadow-cyan-300/25">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-grow bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h4>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;