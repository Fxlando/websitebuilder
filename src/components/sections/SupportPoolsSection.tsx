"use client";

import { motion } from 'framer-motion';

export const SupportPoolsSection = () => {
  const pools = [
    {
      name: "Bonk",
      url: "https://letsbonk.fun/"
    },
    {
      name: "Pump.fun",
      url: "https://pump.fun/"
    },
    {
      name: "Raydium",
      url: "https://raydium.io"
    },
    {
      name: "Unnamed Moon",
      url: "https://moonshot.money/"
    },
    {
      name: "Beleive",
      url: "http://believe.app/"
    },
    {
      name: "DigiByte",
      url: "https://raydium.io/"
    }
  ];

  const renderLogo = (poolName: string) => {
    switch (poolName) {
      case "Bonk":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#FFD700"/>
            <ellipse cx="35" cy="40" rx="15" ry="18" fill="#FFA500"/>
            <ellipse cx="30" cy="45" rx="8" ry="6" fill="white"/>
            <ellipse cx="32" cy="35" rx="2" ry="1" fill="black"/>
            <ellipse cx="38" cy="35" rx="2" ry="1" fill="black"/>
            <ellipse cx="28" cy="42" rx="1.5" ry="1" fill="black"/>
            <path d="M25 25 Q20 20 25 15 Q30 20 25 25" fill="#FFA500"/>
            <path d="M45 25 Q50 20 45 15 Q40 20 45 25" fill="#FFA500"/>
            <text x="55" y="25" fill="red" fontSize="12" fontWeight="bold">!!!</text>
            <circle cx="58" cy="35" r="2" fill="red"/>
            <circle cx="58" cy="40" r="2" fill="red"/>
            <circle cx="58" cy="45" r="2" fill="red"/>
          </svg>
        );
      case "Pump.fun":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            <ellipse cx="40" cy="40" rx="25" ry="8" fill="white" transform="rotate(45 40 40)"/>
            <ellipse cx="40" cy="40" rx="25" ry="8" fill="#00FF88" transform="rotate(45 40 40)"/>
            <ellipse cx="40" cy="40" rx="25" ry="8" fill="none" stroke="#008855" strokeWidth="1" transform="rotate(45 40 40)"/>
          </svg>
        );
      case "Raydium":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            <defs>
              <linearGradient id="raydiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF"/>
                <stop offset="100%" stopColor="#8000FF"/>
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="35" fill="url(#raydiumGradient)"/>
            <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="1"/>
            <polygon points="40,15 50,20 50,30 40,35 30,30 30,20" fill="white"/>
            <path d="M35 20 L35 35 L40 35 Q45 35 45 30 L40 30 L40 25 L45 25" fill="white" stroke="white" strokeWidth="2"/>
            <polygon points="42,18 44,19 44,21 42,22 40,21 40,19" fill="white"/>
          </svg>
        );
      case "Unnamed Moon":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            <circle cx="40" cy="40" r="35" fill="#8000FF"/>
            <path d="M15 15 Q25 10 35 15 Q45 20 40 30 Q35 40 25 35 Q15 30 15 15" fill="#FF00FF"/>
            <path d="M20 50 Q30 45 40 40 Q50 35 55 25" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M50 30 L55 25 L50 20" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "Beleive":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            <circle cx="40" cy="40" r="35" fill="#00FF00"/>
            <path d="M30 20 L30 50 L40 50 Q50 50 50 40 L40 40 L40 35 L50 35 Q50 25 40 25 L30 25" fill="white" stroke="white" strokeWidth="2"/>
            <path d="M50 40 L55 35 L50 30" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "DigiByte":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            <circle cx="40" cy="40" r="35" fill="#FF00FF"/>
            <path d="M30 20 L30 50 L40 50 Q50 50 50 35 Q50 20 40 20 L30 20" fill="white" stroke="white" strokeWidth="2"/>
            <line x1="45" y1="25" x2="48" y2="25" stroke="white" strokeWidth="2"/>
            <line x1="45" y1="30" x2="48" y2="30" stroke="white" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: "easeOut"
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">
            Supported by <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Leading Pools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by the most innovative platforms in the Solana ecosystem
          </p>
        </motion.div>

        {/* Pool Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pools.map((pool, index) => (
            <motion.a
              key={pool.name}
              target="_blank"
              rel="noopener noreferrer"
              href={pool.url}
              className="transition-transform duration-200 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 flex items-center justify-center shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 bg-white rounded-lg">
                {renderLogo(pool.name)}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 