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
      className="w-24 h-24 relative"
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
      {/* Main Blob Body */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Blob Body - More pear-shaped like the image */}
        <motion.path
          d="M50 20 C65 20, 80 35, 80 55 C80 75, 65 90, 50 90 C35 90, 20 75, 20 55 C20 35, 35 20, 50 20 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2.5"
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
        </defs>

        {/* Left Arm - More rounded and stubby */}
        <motion.path
          d="M22 50 Q12 45, 18 40 Q22 35, 28 40 Q32 45, 28 50 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Right Arm - More rounded and stubby */}
        <motion.path
          d="M78 50 Q88 45, 82 40 Q78 35, 72 40 Q68 45, 72 50 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
          animate={{
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Left Leg - More rounded and stubby */}
        <motion.path
          d="M38 90 Q33 100, 38 105 Q43 100, 38 90 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Right Leg - More rounded and stubby */}
        <motion.path
          d="M62 90 Q67 100, 62 105 Q57 100, 62 90 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="2"
        />

        {/* Left Eye - Larger and more anime-style */}
        <motion.g>
          <ellipse cx="32" cy="45" rx="7" ry="9" fill="white" stroke="#8B4513" strokeWidth="2" />
          <ellipse cx="32" cy="45" rx="4" ry="5" fill="#8B4513" />
          <ellipse cx="30" cy="43" rx="1.5" ry="2" fill="white" />
          <motion.rect
            x="29" y="43" width="6" height="4" fill="white"
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

        {/* Right Eye - Larger and more anime-style */}
        <motion.g>
          <ellipse cx="68" cy="45" rx="7" ry="9" fill="white" stroke="#8B4513" strokeWidth="2" />
          <ellipse cx="68" cy="45" rx="4" ry="5" fill="#8B4513" />
          <ellipse cx="66" cy="43" rx="1.5" ry="2" fill="white" />
          <motion.rect
            x="65" y="43" width="6" height="4" fill="white"
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

        {/* Eyebrows - More curved and expressive */}
        <path d="M28 37 Q33 35, 38 37" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M62 37 Q67 35, 72 37" stroke="#8B4513" strokeWidth="2" fill="none" />

        {/* Smile - More gentle and friendly */}
        <motion.path
          d="M35 60 Q50 70, 65 60"
          stroke="#8B4513"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: ["M35 60 Q50 70, 65 60", "M35 60 Q50 73, 65 60", "M35 60 Q50 70, 65 60"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nose - Tiny dot like in the image */}
        <circle cx="50" cy="58" r="0.8" fill="#8B4513" />

        {/* Blush - Left - Three lines like in the image */}
        <motion.g>
          <line x1="20" y1="50" x2="22" y2="50" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
          <line x1="20" y1="52" x2="22" y2="52" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
          <line x1="20" y1="54" x2="22" y2="54" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
        </motion.g>

        {/* Blush - Right - Three lines like in the image */}
        <motion.g>
          <line x1="78" y1="50" x2="80" y2="50" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
          <line x1="78" y1="52" x2="80" y2="52" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
          <line x1="78" y1="54" x2="80" y2="54" stroke="#FFB6C1" strokeWidth="1.5" opacity="0.8" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}; 