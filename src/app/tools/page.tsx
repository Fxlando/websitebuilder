'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Shield, TrendingUp, Eye, BarChart3, Activity, Brain } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function ToolsPage() {
  const tools = [
    {
      name: 'Snipe Scanner',
      description: 'Real-time token scanning and early detection of promising projects',
      icon: Zap,
      status: 'Coming Soon',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Meme Signal Oracle',
      description: 'AI-powered sentiment analysis for meme coin trading signals',
      icon: TrendingUp,
      status: 'Coming Soon',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Rug Radar',
      description: 'Advanced security scanner to detect potential rug pulls',
      icon: Shield,
      status: 'Coming Soon',
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Auto-Liquidity Watcher',
      description: 'Monitor liquidity changes and trading volume in real-time',
      icon: Eye,
      status: 'Coming Soon',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'MemeCoin Tracker',
      description: 'Comprehensive tracking and analytics for meme coins',
      icon: BarChart3,
      status: 'Coming Soon',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'BLOBSY Analytics',
      description: 'Advanced analytics and portfolio management tools',
      icon: Activity,
      status: 'Coming Soon',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">BLOBSY Trading Tools</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trading Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced tools designed to give you the edge in meme coin trading. 
            Built by traders, for traders.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6`}>
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tool.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  {tool.status}
                </span>
                
                <motion.button
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Be among the first to access these powerful trading tools. 
                Join our community and stay updated on tool releases.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={SITE_CONFIG.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Follow for Updates</span>
                  <Zap className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/test-intelligence"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Try Intelligence Demo</span>
                  <Brain className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
        </motion.div>
      </main>
    </div>
  );
} 