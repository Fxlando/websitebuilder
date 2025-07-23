"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Lore', href: '#lore' },
    { name: 'Tools', href: '#features' },
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
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-gray-900 font-bold text-sm">🔍</span>
              </motion.div>
              <span className="font-bold text-xl text-gray-900">NarrativeScope</span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  {item.name}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              variant="outline" 
              className="text-gray-700 hover:text-yellow-600 border-yellow-400 hover:border-yellow-500"
              onClick={() => window.open('https://t.me/blobtoken', '_blank')}
            >
              Join Telegram
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}; 