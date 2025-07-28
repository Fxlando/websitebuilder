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

        {/* Main Blob Body - BLOBSY logo style */}
        <motion.ellipse
          cx="50" cy="65" rx="25" ry="35"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Blob Arms - Simple blob extensions */}
        <motion.g>
          {/* Left Arm */}
          <ellipse cx="25" cy="60" rx="8" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="20" cy="75" rx="6" ry="10" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        <motion.g>
          {/* Right Arm */}
          <ellipse cx="75" cy="60" rx="8" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="80" cy="75" rx="6" ry="10" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Blob Legs - Simple blob extensions */}
        <motion.g>
          {/* Left Leg */}
          <ellipse cx="40" cy="95" rx="7" ry="15" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="40" cy="110" rx="6" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        <motion.g>
          {/* Right Leg */}
          <ellipse cx="60" cy="95" rx="7" ry="15" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="60" cy="110" rx="6" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Blob Eyes - Simple and cute */}
        <motion.g>
          {/* Left Eye */}
          <ellipse cx="42" cy="55" rx="4" ry="6" fill="white" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="42" cy="55" rx="2" ry="3" fill="#8B4513" />
          <motion.ellipse
            cx="42" cy="53" rx="2" ry="1"
            fill="white"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        <motion.g>
          {/* Right Eye */}
          <ellipse cx="58" cy="55" rx="4" ry="6" fill="white" stroke="#8B4513" strokeWidth="1" />
          <ellipse cx="58" cy="55" rx="2" ry="3" fill="#8B4513" />
          <motion.ellipse
            cx="58" cy="53" rx="2" ry="1"
            fill="white"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Blob Smile - Simple and friendly */}
        <motion.path
          d="M40 65 Q50 70 60 65"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M40 65 Q50 70 60 65", "M40 65 Q50 72 60 65", "M40 65 Q50 70 60 65"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Blob Nose - Simple dot */}
        <ellipse cx="50" cy="62" rx="1" ry="1" fill="#8B4513" />

        {/* Blob Blush - Simple circles */}
        <ellipse cx="35" cy="60" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="65" cy="60" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />

        {/* Animated arm movement */}
        <motion.g
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Left arm movement */}
        </motion.g>

        <motion.g
          animate={{
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Right arm movement */}
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}; 