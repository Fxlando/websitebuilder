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
            {/* Yellow background circle with radial gradient */}
            <defs>
              <radialGradient id="bonkGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#FFA500"/>
              </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="40" fill="url(#bonkGradient)"/>
            
            {/* Shiba Inu head - more detailed and accurate */}
            <ellipse cx="35" cy="40" rx="16" ry="20" fill="#FFA500"/>
            
            {/* White muzzle with pinkish hue */}
            <ellipse cx="30" cy="45" rx="9" ry="7" fill="#FFF5F5"/>
            
            {/* Eyes - crescent shaped */}
            <path d="M32 35 Q34 34 36 35 Q34 36 32 35" fill="black"/>
            <path d="M38 35 Q40 34 42 35 Q40 36 38 35" fill="black"/>
            
            {/* Nose */}
            <ellipse cx="28" cy="42" rx="1.5" ry="1" fill="black"/>
            
            {/* Cheeks/eyebrows */}
            <ellipse cx="33" cy="33" rx="2" ry="1" fill="white"/>
            <ellipse cx="39" cy="33" rx="2" ry="1" fill="white"/>
            
            {/* Ears - more detailed */}
            <path d="M25 25 Q20 15 25 10 Q30 15 25 25" fill="#FFA500"/>
            <path d="M45 25 Q50 15 45 10 Q40 15 45 25" fill="#FFA500"/>
            
            {/* Red exclamation marks */}
            <text x="55" y="22" fill="red" fontSize="10" fontWeight="bold">!</text>
            <text x="58" y="22" fill="red" fontSize="10" fontWeight="bold">!</text>
            <text x="61" y="22" fill="red" fontSize="10" fontWeight="bold">!</text>
            
            {/* Red dots */}
            <circle cx="58" cy="32" r="1.5" fill="red"/>
            <circle cx="58" cy="37" r="1.5" fill="red"/>
            <circle cx="58" cy="42" r="1.5" fill="red"/>
            
            {/* Shadow */}
            <ellipse cx="35" cy="50" rx="12" ry="3" fill="rgba(0,0,0,0.1)"/>
          </svg>
        );
      case "Pump.fun":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Capsule pill - diagonal orientation */}
            <ellipse cx="40" cy="40" rx="28" ry="10" fill="white" transform="rotate(45 40 40)"/>
            <ellipse cx="40" cy="40" rx="28" ry="10" fill="#00FF88" transform="rotate(45 40 40)"/>
            
            {/* Pill outline */}
            <ellipse cx="40" cy="40" rx="28" ry="10" fill="none" stroke="#008855" strokeWidth="1.5" transform="rotate(45 40 40)"/>
            
            {/* Highlights and shadows */}
            <ellipse cx="35" cy="35" rx="22" ry="8" fill="none" stroke="#CCFFCC" strokeWidth="0.5" transform="rotate(45 40 40)"/>
            <ellipse cx="45" cy="45" rx="22" ry="8" fill="none" stroke="#008855" strokeWidth="0.5" transform="rotate(45 40 40)"/>
            
            {/* Glossy highlights on green section */}
            <ellipse cx="42" cy="38" rx="3" ry="1" fill="white" transform="rotate(45 40 40)"/>
            <ellipse cx="38" cy="42" rx="3" ry="1" fill="white" transform="rotate(45 40 40)"/>
          </svg>
        );
      case "Raydium":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Gradient circle */}
            <defs>
              <linearGradient id="raydiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF"/>
                <stop offset="100%" stopColor="#8000FF"/>
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="35" fill="url(#raydiumGradient)"/>
            <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="1"/>
            
            {/* Central hexagon */}
            <polygon points="40,12 50,18 50,28 40,34 30,28 30,18" fill="white"/>
            
            {/* Letter R */}
            <path d="M32 18 L32 32 L38 32 Q44 32 44 28 L38 28 L38 24 L44 24" fill="white" stroke="white" strokeWidth="2"/>
            
            {/* Small hexagon dot */}
            <polygon points="42,16 44,17 44,19 42,20 40,19 40,17" fill="white"/>
          </svg>
        );
      case "Unnamed Moon":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Purple circle */}
            <circle cx="40" cy="40" r="35" fill="#8000FF"/>
            
            {/* Pink organic shape - more accurate */}
            <path d="M12 12 Q22 8 32 12 Q42 18 38 28 Q34 38 24 33 Q14 28 12 12" fill="#FF00FF"/>
            
            {/* White arrow - more curved and accurate */}
            <path d="M18 52 Q28 47 38 42 Q48 37 58 22" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            <path d="M52 28 L58 22 L52 16" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "Beleive":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Green circle */}
            <circle cx="40" cy="40" r="35" fill="#00FF00"/>
            
            {/* White B with arrow - more accurate */}
            <path d="M28 18 L28 52 L38 52 Q48 52 48 42 L38 42 L38 38 L48 38 Q48 28 38 28 L28 28" fill="white" stroke="white" strokeWidth="2"/>
            <path d="M48 42 L54 37 L48 32" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "DigiByte":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="black"/>
            
            {/* Pink circle */}
            <circle cx="40" cy="40" r="35" fill="#FF00FF"/>
            
            {/* White D with currency lines */}
            <path d="M28 18 L28 52 L38 52 Q48 52 48 37 Q48 22 38 22 L28 22" fill="white" stroke="white" strokeWidth="2"/>
            <line x1="42" y1="24" x2="46" y2="24" stroke="white" strokeWidth="2"/>
            <line x1="42" y1="30" x2="46" y2="30" stroke="white" strokeWidth="2"/>
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