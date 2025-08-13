import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Mail, MessageSquare, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/samiulalimniloy',
      label: 'GitHub'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:samiul.niloy@email.com',
      label: 'Email'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://wa.me/8801234567890',
      label: 'WhatsApp'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <ArrowUp size={18} />
            Back to Top
          </motion.button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Samiul Alim Niloy
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Frontend Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else if (item === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p>Available for freelance projects</p>
              <p>Response time: Within 24 hours</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Currently available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-center md:text-left flex items-center gap-2"
            >
              © {currentYear} Samiul Alim Niloy. Made with
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              and lots of coffee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <Code className="w-4 h-4" />
              Built with React & Tailwind CSS
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;