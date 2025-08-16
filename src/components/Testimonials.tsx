import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px'
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Samiul delivered an exceptional website that perfectly captured our brand vision. His attention to detail and technical expertise made the entire process smooth and enjoyable. The final result exceeded our expectations!'
    },
    {
      name: 'Michael Chen',
      position: 'Founder & CEO',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Working with Samiul was a game-changer for our online presence. He created a responsive, fast-loading website that perfectly represents our brand. His communication throughout the project was excellent.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Creative Director',
      company: 'Design Studio Pro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Samiul transformed our design concepts into a beautiful, functional website. His understanding of modern web technologies and user experience principles is impressive. Highly recommended for any frontend project!'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we achieved together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group h-full"
            >
              <motion.div 
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(0, 212, 255, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 212, 255, 0.25)',
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="absolute -top-4 left-8"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center"
                    whileHover={{
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                {/* Stars Rating */}
                <motion.div 
                  className="flex gap-1 mb-4"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      whileHover={{
                        scale: 1.3,
                        rotate: 180,
                        transition: { duration: 0.3, delay: starIndex * 0.05 }
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed italic relative z-10"
                  whileHover={{
                    color: '#e2e8f0',
                    transition: { duration: 0.3 }
                  }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="relative"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/30"
                      whileHover={{
                        borderColor: 'rgba(0, 212, 255, 0.8)',
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
                        transition: { duration: 0.3 }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20"
                      whileHover={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))',
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                  
                  <div>
                    <motion.h4 
                      className="font-semibold text-white transition-colors duration-300"
                      whileHover={{
                        color: '#67e8f9',
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-400"
                      whileHover={{
                        color: '#cbd5e1',
                        transition: { duration: 0.3 }
                      }}
                    >
                      {testimonial.position}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-cyan-400 font-medium"
                      whileHover={{
                        color: '#22d3ee',
                        textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      {testimonial.company}
                    </motion.p>
                  </div>
                </div>

                {/* Animated Background Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
                    initial={{ scale: 0 }}
                    whileHover={{
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                    style={{
                      top: `${30 + i * 20}%`,
                      left: `${20 + i * 30}%`
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { label: 'Projects Completed', value: '15+', color: '#00d4ff' },
            { label: 'Happy Clients', value: '10+', color: '#8b5cf6' },
            { label: 'Client Satisfaction', value: '100%', color: '#00d4ff' },
            { label: 'Years Experience', value: '2+', color: '#8b5cf6' }
          ].map((stat, index) => (
          <motion.div 
            key={stat.label}
            className="text-center"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className="text-3xl font-bold mb-2"
              style={{ color: stat.color }}
              whileHover={{
                scale: 1.1,
                textShadow: `0 0 20px ${stat.color}60`,
                transition: { duration: 0.3 }
              }}
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-400">{stat.label}</div>
          </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join my satisfied clients?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;