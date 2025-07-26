'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Target, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign, Activity } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SnipeScannerDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [scannerData, setScannerData] = useState<any>(null);

  useEffect(() => {
    // Simulate loading scanner data
    setTimeout(() => {
      setScannerData({
        activeScans: 12,
        tokensFound: 47,
        highPotential: 8,
        recentDetections: [
          { name: 'BLOB', address: '0x1234...5678', potential: 'High', time: '2 min ago', price: '$0.00012' },
          { name: 'PEPE2', address: '0x8765...4321', potential: 'Medium', time: '5 min ago', price: '$0.00008' },
          { name: 'DOGE3', address: '0x9876...5432', potential: 'High', time: '8 min ago', price: '$0.00015' },
          { name: 'SHIB2', address: '0x6543...2109', potential: 'Low', time: '12 min ago', price: '$0.00005' }
        ],
        marketTrends: {
          sentiment: 'Bullish',
          volume: '+23%',
          momentum: 'Strong'
        }
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
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
          <div className="flex items-center space-x-2">
            <Target className="w-6 h-6 text-yellow-400" />
            <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
              Live Demo
            </span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-8 h-8 text-black" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Snipe Scanner
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced token detection system that identifies promising new launches before they moon. 
            Get early access to the next 100x gems.
          </p>
        </motion.div>

        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400">Initializing Scanner...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Scans</p>
                    <p className="text-2xl font-bold text-white">{scannerData.activeScans}</p>
                  </div>
                  <Activity className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Tokens Found</p>
                    <p className="text-2xl font-bold text-white">{scannerData.tokensFound}</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">High Potential</p>
                    <p className="text-2xl font-bold text-green-400">{scannerData.highPotential}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Market Trend</p>
                    <p className="text-2xl font-bold text-green-400">{scannerData.marketTrends.sentiment}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>
            </div>

            {/* Recent Detections */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-yellow-400" />
                Recent Detections
              </h3>
              
              <div className="space-y-4">
                {scannerData.recentDetections.map((token: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-black">{token.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{token.name}</h4>
                          <p className="text-sm text-gray-400">{token.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Price</p>
                          <p className="font-semibold text-white">{token.price}</p>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          token.potential === 'High' ? 'bg-green-500/20 text-green-400' :
                          token.potential === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {token.potential}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs">{token.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Market Trends */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                Market Trends
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Sentiment</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-green-400">{scannerData.marketTrends.sentiment}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Volume</span>
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-blue-400">{scannerData.marketTrends.volume}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Momentum</span>
                    <Activity className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">{scannerData.marketTrends.momentum}</p>
                </div>
              </div>
            </motion.div>

            {/* Demo Notice */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Demo Mode</h3>
              </div>
              <p className="text-yellow-300 text-sm">
                This is a demonstration of the Snipe Scanner feature. In the real version, 
                you would have access to live token detection, real-time price monitoring, 
                and advanced filtering capabilities for early token discovery.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 