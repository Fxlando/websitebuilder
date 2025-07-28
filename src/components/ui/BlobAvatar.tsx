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

        {/* Head - More character-like with better proportions */}
        <motion.path
          d="M30 20 Q50 15 70 20 Q75 35 70 50 Q50 55 30 50 Q25 35 30 20 Z"
          fill="url(#skinGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Neck - More natural connection */}
        <motion.path
          d="M40 50 Q50 52 60 50 L58 58 Q50 60 42 58 Z"
          fill="url(#skinGradient)"
          stroke="#8B4513"
          strokeWidth="1"
        />

        {/* Body/Torso - More character-like with clothing */}
        <motion.path
          d="M35 58 Q50 55 65 58 L68 85 Q50 90 32 85 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Left Arm - More natural with clothing */}
        <motion.g>
          {/* Shoulder */}
          <path d="M32 60 Q25 65 22 70 Q25 75 32 70 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Upper Arm */}
          <path d="M20 70 Q15 80 18 90 Q25 85 28 75 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Arm */}
          <path d="M15 90 Q12 100 15 110 Q20 105 22 95 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Hand */}
          <path d="M12 110 Q10 115 12 120 Q15 118 16 112 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Right Arm - More natural with clothing */}
        <motion.g>
          {/* Shoulder */}
          <path d="M68 60 Q75 65 78 70 Q75 75 68 70 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Upper Arm */}
          <path d="M80 70 Q85 80 82 90 Q75 85 72 75 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Arm */}
          <path d="M85 90 Q88 100 85 110 Q80 105 78 95 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Hand */}
          <path d="M88 110 Q90 115 88 120 Q85 118 84 112 Z" fill="url(#skinGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Left Leg - More natural with pants */}
        <motion.g>
          {/* Upper Leg */}
          <path d="M35 85 Q40 90 38 105 Q35 100 32 90 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Leg */}
          <path d="M35 105 Q38 115 36 125 Q33 120 32 110 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Foot */}
          <path d="M32 125 Q30 130 35 132 Q38 130 36 125 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Right Leg - More natural with pants */}
        <motion.g>
          {/* Upper Leg */}
          <path d="M65 85 Q60 90 62 105 Q65 100 68 90 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Lower Leg */}
          <path d="M65 105 Q62 115 64 125 Q67 120 68 110 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
          {/* Foot */}
          <path d="M68 125 Q70 130 65 132 Q62 130 64 125 Z" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="1" />
        </motion.g>

        {/* Left Eye - More character-like with personality */}
        <motion.g>
          <path d="M38 28 Q42 26 46 28 Q44 32 40 32 Q38 30 38 28 Z" fill="white" stroke="#8B4513" strokeWidth="2" />
          <path d="M40 30 Q42 29 44 30 Q42 31 40 31 Q40 30 40 30 Z" fill="#8B4513" />
          <motion.path
            d="M38 28 Q40 27 42 28"
            stroke="white"
            strokeWidth="2"
            fill="none"
            animate={{
              d: ["M38 28 Q40 27 42 28", "M38 28 Q40 26 42 28", "M38 28 Q40 27 42 28"],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Right Eye - More character-like with personality */}
        <motion.g>
          <path d="M54 28 Q58 26 62 28 Q60 32 56 32 Q54 30 54 28 Z" fill="white" stroke="#8B4513" strokeWidth="2" />
          <path d="M56 30 Q58 29 60 30 Q58 31 56 31 Q56 30 56 30 Z" fill="#8B4513" />
          <motion.path
            d="M54 28 Q56 27 58 28"
            stroke="white"
            strokeWidth="2"
            fill="none"
            animate={{
              d: ["M54 28 Q56 27 58 28", "M54 28 Q56 26 58 28", "M54 28 Q56 27 58 28"],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Eyebrows - More expressive and character-like */}
        <path d="M36 24 Q42 22 48 24" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M52 24 Q58 22 64 24" stroke="#8B4513" strokeWidth="2" fill="none" />

        {/* Smile - More character-like and friendly */}
        <motion.path
          d="M42 38 Q50 42 58 38"
          stroke="#8B4513"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: ["M42 38 Q50 42 58 38", "M42 38 Q50 44 58 38", "M42 38 Q50 42 58 38"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nose - More character-like */}
        <path d="M49 36 Q50 38 51 36" stroke="#8B4513" strokeWidth="1.5" fill="none" />

        {/* Blush - Left - More natural */}
        <motion.g>
          <path d="M28 36 Q32 35 36 36" stroke="#FFB6C1" strokeWidth="2" fill="none" opacity="0.6" />
        </motion.g>

        {/* Blush - Right - More natural */}
        <motion.g>
          <path d="M64 36 Q68 35 72 36" stroke="#FFB6C1" strokeWidth="2" fill="none" opacity="0.6" />
        </motion.g>

        {/* Hair - More character-like with style */}
        <motion.path
          d="M28 18 Q50 12 72 18 Q68 22 32 22 Z"
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