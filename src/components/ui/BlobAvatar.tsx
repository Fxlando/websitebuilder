"use client";

import { motion } from 'framer-motion';

export const BlobAvatar = () => {
  const resurrectionAnimation = {
    animate: {
      y: [50, -10, 10, -10],
      rotate: [0, 360, 5, -5, 0],
      scale: [0.1, 1.2, 1, 1.05, 1],
      opacity: [0, 1, 1, 1, 1],
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const blinkAnimation = {
    animate: {
      scaleY: [1, 0.1, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }
    }
  };

  const armAnimation = {
    animate: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="w-24 h-32 relative"
      initial={{ y: 50, scale: 0.1, opacity: 0 }}
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
        opacity: 1,
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: 0.5 },
      }}
    >
      {/* Human-like Character */}
      <motion.svg
        viewBox="0 0 100 130"
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE4B5" />
            <stop offset="50%" stopColor="#FFDAB9" />
            <stop offset="100%" stopColor="#F4A460" />
          </linearGradient>
        </defs>

        {/* Main Blob Body - Exact BLOBSY logo style */}
        <motion.ellipse
          cx="50" cy="60" rx="30" ry="40"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Cream Belly - Large oval on front */}
        <motion.ellipse
          cx="50" cy="65" rx="18" ry="25"
          fill="#FFE4B5"
          stroke="#8B4513"
          strokeWidth="1"
        />

        {/* Blob Arms - Stubby extensions */}
        <motion.g>
          {/* Left Arm */}
          <ellipse cx="25" cy="55" rx="6" ry="8" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        <motion.g>
          {/* Right Arm */}
          <ellipse cx="75" cy="55" rx="6" ry="8" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* BLOBSY Logo Eyes - Perfect circles with highlights */}
        <motion.g>
          {/* Left Eye */}
          <ellipse cx="42" cy="45" rx="5" ry="5" fill="#8B4513" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="41" cy="44" rx="1.5" ry="1.5" fill="white" />
        </motion.g>

        <motion.g>
          {/* Right Eye */}
          <ellipse cx="58" cy="45" rx="5" ry="5" fill="#8B4513" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="57" cy="44" rx="1.5" ry="1.5" fill="white" />
        </motion.g>

        {/* BLOBSY Logo Eyebrows - Short curved lines */}
        <path d="M38 38 Q40 36 42 38" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M58 38 Q60 36 62 38" stroke="#8B4513" strokeWidth="2" fill="none" />

        {/* BLOBSY Logo Smile - Simple curved line */}
        <motion.path
          d="M40 52 Q50 55 60 52"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M40 52 Q50 55 60 52", "M40 52 Q50 57 60 52", "M40 52 Q50 55 60 52"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* BLOBSY Logo Hair Tuft - Small wavy tuft */}
        <motion.path
          d="M48 25 Q50 20 52 25"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M48 25 Q50 20 52 25", "M48 25 Q50 22 52 25", "M48 25 Q50 20 52 25"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* BLOBSY Logo Shadow */}
        <ellipse cx="50" cy="105" rx="25" ry="8" fill="#FF8C00" opacity="0.3" />

        {/* Gentle BLOBSY Logo Animations */}
        <motion.g
          animate={{
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Left arm gentle movement */}
        </motion.g>

        <motion.g
          animate={{
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Right arm gentle movement */}
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}; 