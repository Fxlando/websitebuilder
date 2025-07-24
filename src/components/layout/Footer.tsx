"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Trading Tools',
      links: [
        { name: 'Snipe Scanner', href: SITE_CONFIG.links.snipeScanner },
        { name: 'Meme Signal Oracle', href: SITE_CONFIG.links.memeOracle },
        { name: 'Rug Radar', href: SITE_CONFIG.links.rugRadar },
        { name: 'Auto-Liquidity Watcher', href: SITE_CONFIG.links.liquidityWatcher },
        { name: 'MemeCoin Tracker', href: SITE_CONFIG.links.memeTracker },
        { name: 'BLOBSY Analytics', href: SITE_CONFIG.links.analytics }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Telegram', href: SITE_CONFIG.links.telegram },
        { name: 'Twitter', href: SITE_CONFIG.links.twitter },
        { name: 'Discord', href: SITE_CONFIG.links.discord },
        { name: 'Blog', href: SITE_CONFIG.links.blog },
        { name: 'Roadmap', href: '#timeline' },
        { name: 'Whitepaper', href: SITE_CONFIG.links.whitepaper }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Contract Address', href: `https://etherscan.io/address/${SITE_CONFIG.links.contract}` },
        { name: 'Tokenomics', href: '#tokenomics' },
        { name: 'Security Audit', href: SITE_CONFIG.links.audit },
        { name: 'FAQ', href: SITE_CONFIG.links.faq },
        { name: 'Support', href: SITE_CONFIG.links.support },
        { name: 'Bug Report', href: SITE_CONFIG.links.support }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: SITE_CONFIG.links.privacy },
        { name: 'Terms of Service', href: SITE_CONFIG.links.terms },
        { name: 'Cookie Policy', href: SITE_CONFIG.links.cookies },
        { name: 'Disclaimer', href: SITE_CONFIG.links.disclaimer }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={link.href.startsWith('#') ? (e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } : undefined}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social & Copyright Section */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center mb-4 md:mb-0">
              <motion.div
                className="w-8 h-8 bg-yellow-400 rounded-full mr-3 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-lg">🟡</span>
              </motion.div>
              <span className="text-sm text-gray-600">
                © 2024 Blob Token. All rights reserved.
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: '🐦', href: SITE_CONFIG.links.twitter, label: 'Twitter' },
                { icon: '📱', href: SITE_CONFIG.links.telegram, label: 'Telegram' },
                { icon: '🎮', href: SITE_CONFIG.links.discord, label: 'Discord' }
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-yellow-100 rounded-full hover:bg-yellow-200 text-gray-700"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blob Quote */}
        <motion.div
          className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start">
            <motion.div
              className="w-8 h-8 bg-yellow-400 rounded-full mr-4 mt-1 flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-lg">🟡</span>
            </motion.div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 italic">
                "On a mission. Headed to find the tool that will save his trading future. BLOBSY has awakened, and the future of trading is here."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}; 