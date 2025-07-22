import { motion } from 'framer-motion';
import { Twitter, Github, ArrowUp, Heart, Shield, Zap } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/BL0BSY' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/blobtoken' },
  ];

  const quickLinks = [
    { name: 'Lore', href: '#lore' },
    { name: 'Features', href: '#features' },
    { name: 'Timeline', href: '#timeline' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blob-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-glow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-black font-bold text-lg">B</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blob-yellow">$BLOB</span>
                <span className="text-xs text-gray-400">Token</span>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Born from memes. Built for traders. Advanced trading tools and meme coin innovation.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <Shield className="w-4 h-4" />
              <span>Community Driven</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-blob-yellow font-semibold text-lg">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-blob-yellow transition-colors duration-200 text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="space-y-6">
            <h3 className="text-blob-yellow font-semibold text-lg">Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-blob-yellow transition-all duration-200 group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blob-yellow transition-colors duration-200">
                    <social.icon className="w-4 h-4 group-hover:text-black transition-colors duration-200" />
                  </div>
                  <span className="text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enhanced Meme Quote */}
          <div className="space-y-6">
            <h3 className="text-blob-yellow font-semibold text-lg">Blob Wisdom</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                              <blockquote className="text-gray-300 text-sm italic leading-relaxed">
                  &ldquo;The best trades are the ones you don&apos;t make. But when you do make them, make them count.&rdquo;
                </blockquote>
              <div className="flex items-center space-x-2 mt-3">
                <Zap className="w-4 h-4 text-blob-yellow" />
                <span className="text-xs text-gray-400">- Blob Philosophy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 $BLOB Token. All rights reserved.</span>
              <span>•</span>
              <span>Not financial advice.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>by the community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blob-yellow rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </motion.button>
    </footer>
  );
}; 