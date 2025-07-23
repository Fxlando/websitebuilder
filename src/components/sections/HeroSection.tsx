"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SITE_CONFIG, BRAND_COLORS } from '@/lib/constants';

export const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animated blob floating
  const blobAnimation = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Animated Blob Mascot */}
          <motion.div
            className="flex justify-center mb-8"
            variants={blobAnimation}
            animate="animate"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl">🟡</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-gray-900">The Degen Trench</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Intelligence System
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            "NarrativeScope" - A comprehensive Solana meme coin market intelligence tool that reads the entire degen ecosystem in real-time.
          </motion.p>

          {/* Getting Started Section */}
          <motion.div
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 max-w-4xl mx-auto border border-yellow-200"
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-600 mb-3 font-semibold">🚀 Getting started is easy:</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              All you need is 📱 Telegram to access the NarrativeScope intelligence system
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-gray-800 mb-2">💳 Get Wallet</p>
                <p className="text-gray-600 text-xs">Direct and easy access to Solana from Telegram</p>
                <p className="text-yellow-600 font-bold mt-2">Balance: $225.64</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-gray-800 mb-2">🔄 Commission-Free</p>
                <p className="text-gray-600 text-xs">Enjoy commission-free crypto transfers to any Telegram user</p>
                <p className="text-yellow-600 font-bold mt-2">$100 USDT</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-gray-800 mb-2">🔐 Full Control</p>
                <p className="text-gray-600 text-xs">Retain full control of your Solana and other digital assets</p>
                <p className="text-yellow-600 font-bold mt-2">$1,114.05</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 text-lg font-medium shadow-lg"
                onClick={() => window.open(SITE_CONFIG.links.twitter, '_blank')}
              >
                Follow on X
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 text-lg font-medium"
                onClick={() => window.open(SITE_CONFIG.links.telegram, '_blank')}
              >
                Join Telegram
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 