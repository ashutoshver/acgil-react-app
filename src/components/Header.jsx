import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            ACGIL
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={link.path} 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Get a Quote
          </motion.button>
        </nav>

        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white px-4 pb-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={link.path} 
                  className="block py-2 text-gray-700 hover:text-indigo-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 w-full"
            >
              Get a Quote
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;