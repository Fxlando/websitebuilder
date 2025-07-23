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
            <span className="text-gray-900">Blob Has</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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

          {/* NarrativeScope Intelligence System */}
          <motion.div
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 max-w-4xl mx-auto border border-yellow-200"
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-600 mb-3 font-semibold">🔍 The Degen Trench Intelligence System - "NarrativeScope"</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              A comprehensive Solana meme coin market intelligence tool that reads the entire degen ecosystem in real-time:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Live Narrative Tracker:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Meta Analysis: Identifies which narrative is currently dominating</li>
                  <li>• Narrative Rotation Predictor: Spots when current meta is getting stale</li>
                  <li>• Sub-Narrative Detection: Finds emerging micro-trends</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Market Condition Dashboard:</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Degen Liquidity Flow: Tracks total available "ape money"</li>
                  <li>• Risk Appetite Gauge: Measures average market cap of new launches</li>
                  <li>• Attention Span Metrics: Analyzes how long meme coins hold attention</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-xs text-gray-700 italic">
                Blobsy finds this tool can essentially give him "god mode" vision into the chaotic world of Solana meme coin degeneracy, seeing patterns that individual traders miss in the chaos.
              </p>
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