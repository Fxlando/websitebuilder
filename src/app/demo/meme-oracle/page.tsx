'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Zap, TrendingUp, AlertTriangle, CheckCircle, Clock, MessageCircle, Activity, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface SocialSignal {
  meme: string;
  platform: string;
  mentions: number;
  sentiment: 'Bullish' | 'Neutral' | 'Bearish';
  time: string;
}

interface Predictions {
  nextViral: string;
  confidence: string;
  timeframe: string;
}

interface OracleData {
  sentimentScore: number;
  trendingMemes: number;
  viralPredictions: number;
  socialSignals: SocialSignal[];
  predictions: Predictions;
}

export default function MemeOracleDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [oracleData, setOracleData] = useState<OracleData | null>(null);

  useEffect(() => {
    // Simulate loading oracle data
    setTimeout(() => {
      setOracleData({
        sentimentScore: 87,
        trendingMemes: 12,
        viralPredictions: 5,
        socialSignals: [
          { meme: 'BLOB', platform: 'Twitter', mentions: 15420, sentiment: 'Bullish', time: '2 min ago' },
          { meme: 'PEPE', platform: 'Reddit', mentions: 8920, sentiment: 'Neutral', time: '5 min ago' },
          { meme: 'DOGE', platform: 'Discord', mentions: 6540, sentiment: 'Bearish', time: '8 min ago' },
          { meme: 'SHIB', platform: 'Telegram', mentions: 4320, sentiment: 'Bullish', time: '12 min ago' }
        ],
        predictions: {
          nextViral: 'BLOB',
          confidence: '92%',
          timeframe: '24-48 hours'
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
            <Zap className="w-6 h-6 text-blue-400" />
            <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
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
              className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Meme Signal Oracle
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered sentiment analysis that tracks social media buzz and predicts which memes will go viral. 
            Never miss a trend again.
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
              className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400">Analyzing Social Signals...</p>
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
                    <p className="text-gray-400 text-sm">Sentiment Score</p>
                    <p className="text-2xl font-bold text-green-400">{oracleData?.sentimentScore}%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-green-400" />
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
                    <p className="text-gray-400 text-sm">Trending Memes</p>
                    <p className="text-2xl font-bold text-white">{oracleData?.trendingMemes}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-400" />
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
                    <p className="text-gray-400 text-sm">Viral Predictions</p>
                    <p className="text-2xl font-bold text-purple-400">{oracleData?.viralPredictions}</p>
                  </div>
                  <Zap className="w-8 h-8 text-purple-400" />
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
                    <p className="text-gray-400 text-sm">Next Viral</p>
                    <p className="text-2xl font-bold text-yellow-400">{oracleData?.predictions.nextViral}</p>
                  </div>
                  <Activity className="w-8 h-8 text-yellow-400" />
                </div>
              </motion.div>
            </div>

            {/* Social Signals */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
                Social Signals
              </h3>
              
              <div className="space-y-4">
                {oracleData?.socialSignals.map((signal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{signal.meme.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{signal.meme}</h4>
                          <p className="text-sm text-gray-400">{signal.platform}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Mentions</p>
                          <p className="font-semibold text-white">{signal.mentions.toLocaleString()}</p>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          signal.sentiment === 'Bullish' ? 'bg-green-500/20 text-green-400' :
                          signal.sentiment === 'Neutral' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {signal.sentiment}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs">{signal.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Viral Prediction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-purple-400" />
                Viral Prediction
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Next Viral</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-green-400">{oracleData?.predictions.nextViral}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Confidence</span>
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-blue-400">{oracleData?.predictions.confidence}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Timeframe</span>
                    <Activity className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">{oracleData?.predictions.timeframe}</p>
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
                This is a demonstration of the Meme Signal Oracle feature. In the real version, 
                you would have access to real-time social media sentiment analysis, advanced AI predictions, 
                and comprehensive meme trend tracking across all major platforms.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 