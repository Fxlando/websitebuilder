'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Target, Zap, Shield, Eye, BarChart3, TrendingUp, Brain, Activity, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TestIntelligencePage() {
  const integrationFeatures = [
    {
      id: 'snipe-scanner',
      title: 'Snipe Scanner',
      description: 'Advanced token detection system that identifies promising new launches before they moon.',
      icon: Target,
      color: 'from-yellow-400 to-orange-500',
      status: 'Live Demo'
    },
    {
      id: 'meme-oracle',
      title: 'Meme Signal Oracle',
      description: 'AI-powered sentiment analysis that tracks social media buzz and predicts viral memes.',
      icon: Zap,
      color: 'from-blue-400 to-purple-500',
      status: 'Live Demo'
    },
    {
      id: 'rug-radar',
      title: 'Rug Radar',
      description: 'Real-time security scanner that detects potential rug pulls and suspicious activity.',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      status: 'Live Demo'
    },
    {
      id: 'liquidity-watcher',
      title: 'Auto-Liquidity Watcher',
      description: 'Monitor liquidity movements and detect when whales are accumulating or dumping.',
      icon: Eye,
      color: 'from-green-400 to-teal-500',
      status: 'Live Demo'
    },
    {
      id: 'meme-tracker',
      title: 'MemeCoin Tracker',
      description: 'Comprehensive dashboard tracking all meme coins, performance, and community sentiment.',
      icon: BarChart3,
      color: 'from-purple-400 to-indigo-500',
      status: 'Live Demo'
    },
    {
      id: 'analytics',
      title: 'Blob Analytics',
      description: 'Advanced trading analytics powered by the Blob community with data-driven insights.',
      icon: TrendingUp,
      color: 'from-yellow-500 to-yellow-600',
      status: 'Live Demo'
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    // Redirect to the specific feature demo page
    window.location.href = `/demo/${featureId}`;
  };

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
            href="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Brain className="w-8 h-8 text-black" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Blob Intelligence
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our suite of advanced trading tools and intelligence features. 
            Click on any integration below to test the live demo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {integrationFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer group"
              onClick={() => handleFeatureClick(feature.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 text-sm font-medium">
                  Click to Test →
                </span>
                <motion.div
                  className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              🚀 Ready to Experience the Future of Trading?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Each integration represents a powerful tool in our trading intelligence suite. 
              Click on any feature above to access the live demo and see how these tools can 
              revolutionize your trading strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-green-400" />
                <span>Real-time Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Secure Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span>Demo Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 