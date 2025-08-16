import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <FaTelegram size={20} />, url: 'https://t.me/yourusername', label: 'Telegram' },
    { icon: <FiMail size={20} />, url: 'mailto:contact@yourdomain.com', label: 'Email' }
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', url: '/resume.pdf' },
        { name: 'Blog', url: 'https://blog.yourdomain.com' },
        { name: 'Uses', url: '/uses' },
        { name: 'GitHub', url: 'https://github.com/yourusername' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms', url: '/terms' },
        { name: 'Cookies', url: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">
                <span className="text-emerald-500">&lt;</span>
                Abhishek
                <span className="text-emerald-500">/&gt;</span>
              </span>
            </div>
            <p className="mb-6 max-w-md">
              Full Stack Developer passionate about building exceptional digital experiences that solve real problems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      className="hover:text-emerald-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-1"
          >
            © {currentYear} Abhishek Ranjan. Made with
            <FiHeart className="text-emerald-500 mx-1" />
            in India
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-emerald-400 transition-colors">
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;