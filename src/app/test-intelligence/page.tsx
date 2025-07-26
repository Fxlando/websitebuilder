'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Brain, TrendingUp, Shield, Eye, BarChart3, Zap, Lock, Unlock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TestIntelligencePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleAccessIntelligence = () => {
    setIsLoading(true);
    // Simulate authentication process
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
      setShowDemo(true);
    }, 2000);
  };

  const intelligenceFeatures = [
    {
      name: "Real-time Market Analysis",
      description: "Live sentiment analysis and market trend predictions",
      icon: TrendingUp,
      status: "Active",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Risk Assessment",
      description: "Advanced security scanning and rug pull detection",
      icon: Shield,
      status: "Active",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Whale Tracking",
      description: "Monitor large wallet movements and liquidity changes",
      icon: Eye,
      status: "Active",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Portfolio Analytics",
      description: "Comprehensive portfolio tracking and performance metrics",
      icon: BarChart3,
      status: "Active",
      color: "from-orange-500 to-red-600"
    }
  ];

  const demoData = {
    marketSentiment: "Bullish",
    confidence: "87%",
    riskLevel: "Low",
    activeAlerts: 3,
    recentSignals: [
      { token: "BLOB", action: "BUY", confidence: "92%", time: "2 min ago" },
      { token: "PEPE", action: "HOLD", confidence: "78%", time: "5 min ago" },
      { token: "DOGE", action: "SELL", confidence: "85%", time: "8 min ago" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">BLOBSY Intelligence</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!isAuthenticated ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trading Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Access advanced AI-powered trading tools and market intelligence. 
                Get real-time signals, risk assessments, and portfolio analytics.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {intelligenceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    {feature.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Access Button */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-md">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Lock className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-300 font-medium">Secure Access Required</span>
                </div>
                
                <button
                  onClick={handleAccessIntelligence}
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-12 bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Access Intelligence</span>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  This is a demo. In production, this would require wallet connection and token verification.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Success Header */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Unlock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Access Granted</h2>
              <p className="text-gray-300">Welcome to BLOBSY Intelligence Dashboard</p>
            </motion.div>

            {/* Live Dashboard */}
            {showDemo && (
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Market Overview */}
                <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Market Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">Sentiment</p>
                      <p className="text-green-400 font-bold text-lg">{demoData.marketSentiment}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">Confidence</p>
                      <p className="text-blue-400 font-bold text-lg">{demoData.confidence}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">Risk Level</p>
                      <p className="text-yellow-400 font-bold text-lg">{demoData.riskLevel}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">Alerts</p>
                      <p className="text-red-400 font-bold text-lg">{demoData.activeAlerts}</p>
                    </div>
                  </div>
                </div>

                {/* Recent Signals */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Signals</h3>
                  <div className="space-y-3">
                    {demoData.recentSignals.map((signal, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-700/50 rounded-lg p-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{signal.token}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            signal.action === 'BUY' ? 'bg-green-500/20 text-green-400' :
                            signal.action === 'SELL' ? 'bg-red-500/20 text-red-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {signal.action}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-gray-400 text-sm">{signal.confidence}</span>
                          <span className="text-gray-500 text-xs">{signal.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Demo Notice */}
            <motion.div
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Demo Mode</h3>
              </div>
              <p className="text-yellow-300 text-sm">
                This is a demonstration of the BLOBSY Intelligence platform. In the real version, 
                you would have access to live market data, advanced analytics, and real-time trading signals. 
                The actual platform would require wallet connection and token verification.
              </p>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
} 