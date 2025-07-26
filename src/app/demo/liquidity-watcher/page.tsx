'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Eye, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function LiquidityWatcherDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            href="/test-intelligence"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Intelligence</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-20"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              Auto-Liquidity Watcher
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Monitor liquidity movements and detect when whales are accumulating or dumping. 
            Stay ahead of the market with institutional-grade tracking.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-yellow-400">Demo Coming Soon</h3>
            </div>
            <p className="text-yellow-300 text-sm">
              The Auto-Liquidity Watcher demo is currently under development. 
              This feature will provide real-time liquidity monitoring and whale tracking capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 