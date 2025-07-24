"use client";

import { motion } from 'framer-motion';

interface BlobLogoProps {
  size?: number;
  className?: string;
}

export const BlobLogo = ({ size = 32, className = "" }: BlobLogoProps) => {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="relative"
        style={{ width: size * 0.8, height: size * 0.8 }}
      >
        {/* Main blob body */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 border-2 border-orange-700"
          style={{ 
            borderRadius: '60% 40% 50% 50% / 60% 50% 50% 40%',
            transform: 'rotate(-5deg)'
          }}
        />
        
        {/* Belly highlight */}
        <div 
          className="absolute inset-0 rounded-full bg-yellow-200 opacity-30"
          style={{ 
            borderRadius: '60% 40% 50% 50% / 60% 50% 50% 40%',
            transform: 'rotate(-5deg) translate(2px, 4px)',
            width: '70%',
            height: '70%',
            left: '15%',
            top: '15%'
          }}
        />
        
        {/* Left arm */}
        <div 
          className="absolute bg-gradient-to-br from-orange-300 to-orange-400 border border-orange-700 rounded-full"
          style={{
            width: size * 0.2,
            height: size * 0.3,
            left: '-10%',
            top: '35%',
            transform: 'rotate(-20deg)'
          }}
        />
        
        {/* Right arm */}
        <div 
          className="absolute bg-gradient-to-br from-orange-300 to-orange-400 border border-orange-700 rounded-full"
          style={{
            width: size * 0.2,
            height: size * 0.3,
            right: '-10%',
            top: '35%',
            transform: 'rotate(20deg)'
          }}
        />
        
        {/* Eyes */}
        <div 
          className="absolute w-2 h-2 bg-black rounded-full"
          style={{ left: '30%', top: '25%' }}
        />
        <div 
          className="absolute w-2 h-2 bg-black rounded-full"
          style={{ right: '30%', top: '25%' }}
        />
        
        {/* Eye highlights */}
        <div 
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: '31%', top: '26%' }}
        />
        <div 
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ right: '31%', top: '26%' }}
        />
        
        {/* Smile */}
        <div 
          className="absolute border-b-2 border-orange-700 rounded-full"
          style={{
            width: '40%',
            height: '20%',
            left: '30%',
            top: '45%',
            borderBottomWidth: '2px',
            borderBottomColor: '#8B4513'
          }}
        />
        
        {/* Blush marks */}
        <div 
          className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60"
          style={{ left: '20%', top: '20%' }}
        />
        <div 
          className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60"
          style={{ right: '20%', top: '20%' }}
        />
      </div>
    </motion.div>
  );
}; 