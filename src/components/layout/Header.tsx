import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Customize these navigation items for your brand
  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
  ];

  // Customize these social links for your brand
  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/YourBrand', icon: Twitter },
    // Add more social links as needed
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blob-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-glow"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {/* Replace with your logo or brand initial */}
              <span className="text-black font-bold text-lg lg:text-xl">YB</span>
            </motion.div>
            <div className="flex flex-col">
              {/* Replace with your brand name */}
              <span className="text-xl lg:text-2xl font-bold text-black">YourBrand</span>
              <span className="text-xs text-gray-500 -mt-1">Tagline</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blob-yellow transition-colors duration-200 font-medium relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blob-yellow transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full group"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors duration-200" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-lg">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-600 hover:text-blob-yellow hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <link.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{link.name}</span>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}; 