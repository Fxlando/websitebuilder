"use client";

import { motion } from 'framer-motion';

export const BlobAvatar = () => {
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
      className="w-24 h-24 relative"
      variants={floatingAnimation}
      animate="animate"
    >
      {/* Main Blob Body */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Blob Body */}
        <motion.path
          d="M50 15 C70 15, 85 30, 85 50 C85 70, 70 85, 50 85 C30 85, 15 70, 15 50 C15 30, 30 15, 50 15 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
        </defs>

        {/* Left Arm */}
        <motion.path
          d="M25 45 Q15 40, 20 35 Q25 30, 30 35 Q35 40, 30 45 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
          variants={armAnimation}
          animate="animate"
        />

        {/* Right Arm */}
        <motion.path
          d="M75 45 Q85 40, 80 35 Q75 30, 70 35 Q65 40, 70 45 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
          variants={armAnimation}
          animate="animate"
        />

        {/* Left Leg */}
        <motion.path
          d="M40 85 Q35 95, 40 100 Q45 95, 40 85 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
        />

        {/* Right Leg */}
        <motion.path
          d="M60 85 Q65 95, 60 100 Q55 95, 60 85 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
        />

        {/* Left Eye */}
        <motion.g>
          <ellipse cx="35" cy="40" rx="6" ry="8" fill="white" stroke="#8B4513" strokeWidth="1.5" />
          <ellipse cx="35" cy="40" rx="3" ry="4" fill="#8B4513" />
          <ellipse cx="33" cy="38" rx="1" ry="1.5" fill="white" />
          <motion.rect
            x="32" y="38" width="6" height="4" fill="white"
            variants={blinkAnimation}
            animate="animate"
          />
        </motion.g>

        {/* Right Eye */}
        <motion.g>
          <ellipse cx="65" cy="40" rx="6" ry="8" fill="white" stroke="#8B4513" strokeWidth="1.5" />
          <ellipse cx="65" cy="40" rx="3" ry="4" fill="#8B4513" />
          <ellipse cx="63" cy="38" rx="1" ry="1.5" fill="white" />
          <motion.rect
            x="62" y="38" width="6" height="4" fill="white"
            variants={blinkAnimation}
            animate="animate"
          />
        </motion.g>

        {/* Eyebrows */}
        <path d="M30 32 Q35 30, 40 32" stroke="#8B4513" strokeWidth="1.5" fill="none" />
        <path d="M60 32 Q65 30, 70 32" stroke="#8B4513" strokeWidth="1.5" fill="none" />

        {/* Smile */}
        <motion.path
          d="M40 55 Q50 65, 60 55"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M40 55 Q50 65, 60 55", "M40 55 Q50 68, 60 55", "M40 55 Q50 65, 60 55"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nose */}
        <circle cx="50" cy="50" r="0.5" fill="#8B4513" />

        {/* Blush - Left */}
        <motion.circle
          cx="25" cy="45" r="2" fill="#FFB6C1" opacity="0.6"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Blush - Right */}
        <motion.circle
          cx="75" cy="45" r="2" fill="#FFB6C1" opacity="0.6"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}; 