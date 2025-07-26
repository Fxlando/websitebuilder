'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsDemo() {
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
              className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Blob Analytics
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Advanced trading analytics powered by the Blob community with data-driven insights. 
            Get insights from thousands of traders and make data-driven decisions.
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
              The Blob Analytics demo is currently under development. 
              This feature will provide advanced trading analytics and community-driven insights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 