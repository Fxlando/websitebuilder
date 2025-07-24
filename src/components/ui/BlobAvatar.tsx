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

        {/* Head - More human-like round head */}
        <motion.ellipse
          cx="50" cy="35" rx="20" ry="25"
          fill="url(#skinGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Neck */}
        <rect x="45" y="55" width="10" height="8" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />

        {/* Body/Torso - More human-like proportions */}
        <motion.ellipse
          cx="50" cy="75" rx="18" ry="25"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Left Arm - More human-like with shoulder */}
        <motion.g>
          {/* Shoulder */}
          <ellipse cx="25" cy="65" rx="8" ry="12" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Upper Arm */}
          <ellipse cx="20" cy="80" rx="6" ry="15" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Arm */}
          <ellipse cx="15" cy="95" rx="5" ry="12" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Hand */}
          <ellipse cx="12" cy="105" rx="4" ry="6" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Right Arm - More human-like with shoulder */}
        <motion.g>
          {/* Shoulder */}
          <ellipse cx="75" cy="65" rx="8" ry="12" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Upper Arm */}
          <ellipse cx="80" cy="80" rx="6" ry="15" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Arm */}
          <ellipse cx="85" cy="95" rx="5" ry="12" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Hand */}
          <ellipse cx="88" cy="105" rx="4" ry="6" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Left Leg */}
        <motion.g>
          {/* Upper Leg */}
          <ellipse cx="40" cy="105" rx="7" ry="15" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Leg */}
          <ellipse cx="40" cy="120" rx="6" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Foot */}
          <ellipse cx="40" cy="130" rx="8" ry="4" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Right Leg */}
        <motion.g>
          {/* Upper Leg */}
          <ellipse cx="60" cy="105" rx="7" ry="15" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Leg */}
          <ellipse cx="60" cy="120" rx="6" ry="12" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Foot */}
          <ellipse cx="60" cy="130" rx="8" ry="4" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Left Eye - More human-like */}
        <motion.g>
          <ellipse cx="42" cy="30" rx="6" ry="8" fill="white" stroke="#8B4513" strokeWidth="2" />
          <ellipse cx="42" cy="30" rx="3" ry="4" fill="#8B4513" />
          <ellipse cx="40" cy="28" rx="1.5" ry="2" fill="white" />
          <motion.rect
            x="39" y="28" width="6" height="4" fill="white"
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

        {/* Right Eye - More human-like */}
        <motion.g>
          <ellipse cx="58" cy="30" rx="6" ry="8" fill="white" stroke="#8B4513" strokeWidth="2" />
          <ellipse cx="58" cy="30" rx="3" ry="4" fill="#8B4513" />
          <ellipse cx="56" cy="28" rx="1.5" ry="2" fill="white" />
          <motion.rect
            x="55" y="28" width="6" height="4" fill="white"
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

        {/* Eyebrows - More expressive */}
        <path d="M36 22 Q42 20, 48 22" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M52 22 Q58 20, 64 22" stroke="#8B4513" strokeWidth="2" fill="none" />

        {/* Smile - Friendly and human-like */}
        <motion.path
          d="M40 45 Q50 50, 60 45"
          stroke="#8B4513"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: ["M40 45 Q50 50, 60 45", "M40 45 Q50 52, 60 45", "M40 45 Q50 50, 60 45"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nose - Small and cute */}
        <ellipse cx="50" cy="42" rx="1.5" ry="2" fill="#8B4513" />

        {/* Blush - Left */}
        <motion.g>
          <ellipse cx="30" cy="40" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
        </motion.g>

        {/* Blush - Right */}
        <motion.g>
          <ellipse cx="70" cy="40" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
        </motion.g>

        {/* Hair - Simple human-like hair */}
        <motion.path
          d="M30 15 Q50 5, 70 15 Q65 25, 35 25 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1"
        />

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