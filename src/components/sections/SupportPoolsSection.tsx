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
            {/* Bright yellow background with radial gradient */}
            <defs>
              <radialGradient id="bonkGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#FFA500"/>
              </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="40" fill="url(#bonkGradient)"/>
            
            {/* Shiba Inu head - positioned slightly left, leaning left */}
            <ellipse cx="33" cy="40" rx="15" ry="18" fill="#FFA500"/>
            
            {/* White muzzle with subtle pinkish hue */}
            <ellipse cx="28" cy="45" rx="8" ry="6" fill="#FFF5F5"/>
            
            {/* Crescent-shaped eyes - horizontal black lines */}
            <path d="M30 35 L32 35" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M36 35 L38 35" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            
            {/* Small black nose */}
            <circle cx="26" cy="42" r="1" fill="black"/>
            
            {/* White cheek spots above eyes */}
            <ellipse cx="31" cy="32" rx="2" ry="1" fill="white"/>
            <ellipse cx="37" cy="32" rx="2" ry="1" fill="white"/>
            
            {/* Pointed ears - orange and white */}
            <path d="M22 25 Q18 18 22 12 Q26 18 22 25" fill="#FFA500"/>
            <path d="M44 25 Q48 18 44 12 Q40 18 44 25" fill="#FFA500"/>
            
            {/* Red exclamation marks - 3D style with sheen */}
            <text x="54" y="20" fill="red" fontSize="12" fontWeight="bold">!</text>
            <text x="57" y="20" fill="red" fontSize="12" fontWeight="bold">!</text>
            <text x="60" y="20" fill="red" fontSize="12" fontWeight="bold">!</text>
            
            {/* Red dots below exclamation marks */}
            <circle cx="56" cy="30" r="1.5" fill="red"/>
            <circle cx="56" cy="35" r="1.5" fill="red"/>
            <circle cx="56" cy="40" r="1.5" fill="red"/>
            
            {/* Soft shadow under chin */}
            <ellipse cx="33" cy="52" rx="10" ry="2" fill="rgba(0,0,0,0.15)"/>
          </svg>
        );
      case "Pump.fun":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Diagonal capsule pill - top-right higher than bottom-left */}
            <ellipse cx="40" cy="40" rx="26" ry="9" fill="white" transform="rotate(45 40 40)"/>
            <ellipse cx="40" cy="40" rx="26" ry="9" fill="#00FF88" transform="rotate(45 40 40)"/>
            
            {/* Dark teal border */}
            <ellipse cx="40" cy="40" rx="26" ry="9" fill="none" stroke="#008855" strokeWidth="1.5" transform="rotate(45 40 40)"/>
            
            {/* Light grey highlight on white half */}
            <ellipse cx="35" cy="35" rx="20" ry="7" fill="none" stroke="#CCCCCC" strokeWidth="0.5" transform="rotate(45 40 40)"/>
            
            {/* Darker green shadow on green half */}
            <ellipse cx="45" cy="45" rx="20" ry="7" fill="none" stroke="#006644" strokeWidth="0.5" transform="rotate(45 40 40)"/>
            
            {/* Two curved white highlights on green section */}
            <ellipse cx="41" cy="37" rx="2" ry="0.5" fill="white" transform="rotate(45 40 40)"/>
            <ellipse cx="37" cy="41" rx="2" ry="0.5" fill="white" transform="rotate(45 40 40)"/>
          </svg>
        );
      case "Raydium":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Teal to purple gradient circle */}
            <defs>
              <linearGradient id="raydiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF"/>
                <stop offset="100%" stopColor="#8000FF"/>
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="35" fill="url(#raydiumGradient)"/>
            
            {/* White border */}
            <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="1"/>
            
            {/* Large white hexagon in center */}
            <polygon points="40,10 50,16 50,26 40,32 30,26 30,16" fill="white"/>
            
            {/* White letter R inside hexagon */}
            <path d="M32 16 L32 30 L38 30 Q44 30 44 26 L38 26 L38 22 L44 22" fill="white" stroke="white" strokeWidth="2"/>
            
            {/* Small white hexagon dot above R */}
            <polygon points="42,14 44,15 44,17 42,18 40,17 40,15" fill="white"/>
          </svg>
        );
      case "Unnamed Moon":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Dark purple circle */}
            <circle cx="40" cy="40" r="35" fill="#8000FF"/>
            
            {/* Large pink organic shape - upper-left and central */}
            <path d="M10 10 Q20 6 30 10 Q40 16 36 26 Q32 36 22 31 Q12 26 10 10" fill="#FF00FF"/>
            
            {/* Thick white crescent arrow from bottom-left to top-right */}
            <path d="M15 55 Q25 50 35 45 Q45 40 55 25" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            
            {/* Arrowhead pointing to top-right */}
            <path d="M50 30 L55 25 L50 20" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "Beleive":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Vibrant green circle */}
            <circle cx="40" cy="40" r="35" fill="#00FF00"/>
            
            {/* White B with arrow - single continuous line */}
            <path d="M28 16 L28 50 L38 50 Q48 50 48 40 L38 40 L38 36 L48 36 Q48 26 38 26 L28 26" fill="white" stroke="white" strokeWidth="2"/>
            <path d="M48 40 L54 35 L48 30" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "DigiByte":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Vibrant pink circle */}
            <circle cx="40" cy="40" r="35" fill="#FF00FF"/>
            
            {/* Bold white D with currency lines */}
            <path d="M28 16 L28 50 L38 50 Q48 50 48 35 Q48 20 38 20 L28 20" fill="white" stroke="white" strokeWidth="2"/>
            <line x1="42" y1="22" x2="46" y2="22" stroke="white" strokeWidth="2"/>
            <line x1="42" y1="28" x2="46" y2="28" stroke="white" strokeWidth="2"/>
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