import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Skills', section: 'skills' },
    { name: 'Contact', section: 'contact' }
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <FaTelegram size={18} />, url: 'https://t.me/yourusername', label: 'Telegram' },
    { icon: <FiMail size={18} />, url: 'mailto:contact@yourdomain.com', label: 'Email' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavClick('home')}
          >
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-emerald-500">&lt;</span>
              Abhishek
              <span className="text-emerald-500">/&gt;</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.section}
                href={`#${link.section}`}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.section
                    ? 'text-emerald-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400'
                }`}
                onClick={() => handleNavClick(link.section)}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.section && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText size={16} />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg pt-20 px-6 z-40"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col h-full">
              <nav className="flex flex-col gap-6 py-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.section}
                    href={`#${link.section}`}
                    className={`text-2xl font-medium px-4 py-2 rounded-lg ${
                      activeSection === link.section
                        ? 'bg-emerald-500/10 text-emerald-500'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => handleNavClick(link.section)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pb-12">
                <div className="flex justify-center gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors"
                      aria-label={social.label}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <FiFileText size={18} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;