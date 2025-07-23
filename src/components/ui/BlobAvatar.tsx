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
      className="w-32 h-32 relative"
      initial={{ y: 50, scale: 0.1, opacity: 0 }}
      animate={{
        y: [-5, 5, -5],
        rotate: [0, 2, -2, 0],
        scale: [1, 1.02, 1],
        opacity: 1,
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: 0.5 },
      }}
    >
      {/* Avatar Container with Shadow */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Circle for Avatar Effect */}
        <circle cx="50" cy="50" r="48" fill="url(#blobGradient)" stroke="#8B4513" strokeWidth="2" />
        
        {/* Blob Body - More compact for avatar */}
        <motion.path
          d="M50 25 C60 25, 70 35, 70 50 C70 65, 60 75, 50 75 C40 75, 30 65, 30 50 C30 35, 40 25, 50 25 Z"
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

        {/* Left Arm - Smaller for avatar */}
        <motion.path
          d="M25 50 Q18 48, 22 45 Q25 42, 28 45 Q32 48, 28 50 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Right Arm - Smaller for avatar */}
        <motion.path
          d="M75 50 Q82 48, 78 45 Q75 42, 72 45 Q68 48, 72 50 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Left Leg - Smaller for avatar */}
        <motion.path
          d="M42 75 Q38 80, 42 85 Q46 80, 42 75 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
        />

        {/* Right Leg - Smaller for avatar */}
        <motion.path
          d="M58 75 Q62 80, 58 85 Q54 80, 58 75 Z"
          fill="url(#blobGradient)"
          stroke="#8B4513"
          strokeWidth="1.5"
        />

        {/* Left Eye - Avatar sized */}
        <motion.g>
          <ellipse cx="35" cy="42" rx="5" ry="6" fill="white" stroke="#8B4513" strokeWidth="1.5" />
          <ellipse cx="35" cy="42" rx="2.5" ry="3" fill="#8B4513" />
          <ellipse cx="33.5" cy="40.5" rx="1" ry="1.5" fill="white" />
          <motion.rect
            x="33" y="40.5" width="4" height="3" fill="white"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Right Eye - Avatar sized */}
        <motion.g>
          <ellipse cx="65" cy="42" rx="5" ry="6" fill="white" stroke="#8B4513" strokeWidth="1.5" />
          <ellipse cx="65" cy="42" rx="2.5" ry="3" fill="#8B4513" />
          <ellipse cx="63.5" cy="40.5" rx="1" ry="1.5" fill="white" />
          <motion.rect
            x="63" y="40.5" width="4" height="3" fill="white"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Eyebrows - Avatar sized */}
        <path d="M32 36 Q35 34, 38 36" stroke="#8B4513" strokeWidth="1.5" fill="none" />
        <path d="M62 36 Q65 34, 68 36" stroke="#8B4513" strokeWidth="1.5" fill="none" />

        {/* Smile - Avatar sized */}
        <motion.path
          d="M38 55 Q50 62, 62 55"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M38 55 Q50 62, 62 55", "M38 55 Q50 65, 62 55", "M38 55 Q50 62, 62 55"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nose - Avatar sized */}
        <circle cx="50" cy="52" r="0.6" fill="#8B4513" />

        {/* Blush - Left - Avatar sized */}
        <motion.g>
          <line x1="25" y1="48" x2="27" y2="48" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
          <line x1="25" y1="50" x2="27" y2="50" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
          <line x1="25" y1="52" x2="27" y2="52" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
        </motion.g>

        {/* Blush - Right - Avatar sized */}
        <motion.g>
          <line x1="73" y1="48" x2="75" y2="48" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
          <line x1="73" y1="50" x2="75" y2="50" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
          <line x1="73" y1="52" x2="75" y2="52" stroke="#FFB6C1" strokeWidth="1" opacity="0.7" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}; 