"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { BlobAvatar } from '../ui/BlobAvatar';
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
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"
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
            <BlobAvatar />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-gray-900">Blob Has</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Awakened
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            On a mission. Headed to find the tool that will save his trading future.
          </motion.p>

          {/* Contract Address */}
          <motion.div
            className="bg-gray-100 rounded-lg p-4 max-w-md mx-auto"
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-500 mb-1">Contract Address</p>
            <p className="font-mono text-sm text-gray-700 break-all">
              0x1234...5678
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 