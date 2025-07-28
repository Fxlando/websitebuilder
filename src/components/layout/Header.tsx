"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { BlobLogo } from '../ui/BlobLogo';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Lore', href: '#lore' },
    { name: 'Tools', href: '#tools' },
    { name: 'Roadmap', href: '#timeline' },
    { name: 'Community', href: '#newsletter' },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b border-gray-200 shadow-lg' 
          : 'bg-white border-b border-gray-200'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <BlobLogo size={36} />
              <span className="font-bold text-xl text-gray-900">BLOBSY</span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-gray-700 hover:text-orange-600 border-orange-400 hover:border-orange-500 hidden md:flex"
              onClick={() => window.open('https://x.com/bl0bsy', '_blank')}
            >
              Follow X
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="w-full text-gray-700 hover:text-orange-600 border-orange-400 hover:border-orange-500"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open('https://x.com/bl0bsy', '_blank');
              }}
            >
              Follow X
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}; 