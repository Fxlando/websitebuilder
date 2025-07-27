'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, TrendingDown, Activity, BarChart3, DollarSign, Clock, AlertTriangle, Eye, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface MarketStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface LiquidityFlow {
  source: string;
  destination: string;
  amount: string;
  percentage: string;
  time: string;
}

interface DashboardData {
  degenLiquidityFlow: string;
  riskAppetite: string;
  marketStats: MarketStat[];
  recentFlows: LiquidityFlow[];
  marketSentiment: {
    overall: string;
    confidence: string;
    trend: string;
  };
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate loading dashboard data
    setTimeout(() => {
      setDashboardData({
        degenLiquidityFlow: '$3.35B',
        riskAppetite: 'High',
        marketStats: [
          { label: '24h Volume', value: '$2.1B', change: '+12.5%', trend: 'up' },
          { label: 'Market Cap', value: '$45.2B', change: '+8.3%', trend: 'up' },
          { label: 'Active Wallets', value: '892K', change: '+5.7%', trend: 'up' },
          { label: 'Risk Level', value: 'Medium', change: '-2.1%', trend: 'down' },
          { label: 'Liquidity Depth', value: '$1.8B', change: '+15.2%', trend: 'up' },
          { label: 'Attention Span', value: '48h', change: '+3.4%', trend: 'up' }
        ],
        recentFlows: [
          { source: 'Meme Coins', destination: 'Stablecoins', amount: '$450M', percentage: '23%', time: '2 min ago' },
          { source: 'Major Coins', destination: 'Meme Coins', amount: '$320M', percentage: '18%', time: '5 min ago' },
          { source: 'Stablecoins', destination: 'Meme Coins', amount: '$280M', percentage: '15%', time: '8 min ago' },
          { source: 'Meme Coins', destination: 'Major Coins', amount: '$190M', percentage: '12%', time: '12 min ago' }
        ],
        marketSentiment: {
          overall: 'Bullish',
          confidence: '87%',
          trend: 'Strong'
        }
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Live Dashboard
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Market Condition Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-time tracking of degen liquidity flow and market sentiment analysis. 
            Monitor the flow of "ape money" between meme coins and stablecoins.
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
              className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600">Loading Market Data...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Degen Liquidity Flow</h3>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600 mb-2">{dashboardData?.degenLiquidityFlow}</p>
                <p className="text-sm text-gray-500">Total available "ape money"</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Risk Appetite</h3>
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-2">{dashboardData?.riskAppetite}</p>
                <p className="text-sm text-gray-500">Current market risk level</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Market Sentiment</h3>
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">{dashboardData?.marketSentiment.overall}</p>
                <p className="text-sm text-gray-500">{dashboardData?.marketSentiment.confidence} confidence</p>
              </motion.div>
            </div>

            {/* Market Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                Market Statistics
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {dashboardData?.marketStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{stat.label}</span>
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : stat.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      ) : (
                        <Activity className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' :
                      stat.trend === 'down' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {stat.change}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Liquidity Flow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-green-600" />
                Recent Liquidity Flows
              </h3>
              
              <div className="space-y-4">
                {dashboardData?.recentFlows.map((flow, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{flow.source} → {flow.destination}</h4>
                          <p className="text-sm text-gray-500">{flow.amount} ({flow.percentage})</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{flow.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Demo Notice */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-800">Demo Mode</h3>
              </div>
              <p className="text-yellow-700 text-sm">
                This is a demonstration of the Market Condition Dashboard. In the real version, 
                you would have access to live market data, real-time liquidity flow tracking, 
                and advanced analytics powered by CoinMarketCap and other data providers.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 