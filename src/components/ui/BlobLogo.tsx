"use client";

import { motion } from 'framer-motion';

interface BlobLogoProps {
  size?: number;
  className?: string;
}

export const BlobLogo = ({ size = 32, className = "" }: BlobLogoProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main blob body with gradient */}
      <defs>
        <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="70%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF6B35" />
        </radialGradient>
      </defs>
      
      {/* Blob body */}
      <path
        d="M20 30 Q15 20, 25 15 Q35 10, 45 12 Q55 10, 65 15 Q75 20, 80 30 Q85 45, 80 60 Q75 75, 65 80 Q55 85, 45 85 Q35 85, 25 80 Q15 75, 20 60 Q18 45, 20 30 Z"
        fill="url(#blobGradient)"
        stroke="#8B4513"
        strokeWidth="2"
      />
      
      {/* Belly highlight */}
      <ellipse
        cx="50"
        cy="55"
        rx="15"
        ry="20"
        fill="#FFD700"
        opacity="0.3"
      />
      
      {/* Left arm */}
      <ellipse
        cx="25"
        cy="45"
        rx="8"
        ry="12"
        fill="url(#blobGradient)"
        stroke="#8B4513"
        strokeWidth="1.5"
      />
      
      {/* Right arm */}
      <ellipse
        cx="75"
        cy="45"
        rx="8"
        ry="12"
        fill="url(#blobGradient)"
        stroke="#8B4513"
        strokeWidth="1.5"
      />
      
      {/* Eyes */}
      <circle cx="40" cy="35" r="4" fill="#000000" />
      <circle cx="60" cy="35" r="4" fill="#000000" />
      
      {/* Eye highlights */}
      <circle cx="41" cy="34" r="1.5" fill="#FFFFFF" />
      <circle cx="61" cy="34" r="1.5" fill="#FFFFFF" />
      
      {/* Smile */}
      <path
        d="M35 45 Q50 55, 65 45"
        stroke="#8B4513"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Blush marks */}
      <path
        d="M30 32 Q28 30, 26 32"
        stroke="#FF6B6B"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 32 Q72 30, 74 32"
        stroke="#FF6B6B"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}; 