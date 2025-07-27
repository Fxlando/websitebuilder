'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, TrendingDown, Activity, BarChart3, AlertTriangle, DollarSign, Clock, Eye, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface LiquidityFlow {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  color: string;
}

interface MarketCondition {
  riskAppetite: number;
  totalLiquidity: string;
  memeCoinFlow: string;
  stablecoinFlow: string;
  majorFlow: string;
}

interface DashboardData {
  liquidityFlow: LiquidityFlow[];
  marketCondition: MarketCondition;
  recentActivity: Array<{
    time: string;
    action: string;
    amount: string;
    token: string;
  }>;
}

export default function DashboardDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate loading dashboard data
    setTimeout(() => {
      setDashboardData({
        liquidityFlow: [
          { label: 'Meme Coins', value: '$2.1B', change: '+12.5%', trend: 'up', color: 'text-green-500' },
          { label: 'Stablecoins', value: '$890M', change: '-3.2%', trend: 'down', color: 'text-red-500' },
          { label: 'Major Coins', value: '$1.2B', change: '+5.8%', trend: 'up', color: 'text-blue-500' },
          { label: 'Total Flow', value: '$4.19B', change: '+8.3%', trend: 'up', color: 'text-purple-500' }
        ],
        marketCondition: {
          riskAppetite: 78,
          totalLiquidity: '$4.19B',
          memeCoinFlow: '$2.1B',
          stablecoinFlow: '$890M',
          majorFlow: '$1.2B'
        },
        recentActivity: [
          { time: '2 min ago', action: 'Large Buy', amount: '$450K', token: 'BLOB' },
          { time: '5 min ago', action: 'Whale Sell', amount: '$320K', token: 'PEPE' },
          { time: '8 min ago', action: 'Liquidity Add', amount: '$180K', token: 'DOGE' },
          { time: '12 min ago', action: 'Dump', amount: '$95K', token: 'SHIB' }
        ]
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
            href="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-orange-400" />
            <span className="text-sm bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
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
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <BarChart3 className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Market Condition Dashboard
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Degen Liquidity Flow tracks total available "ape money" flowing between meme coins vs flowing out to majors/stablecoins with risk appetite gauge.
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
              className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400">Loading Market Data...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Risk Appetite Gauge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-orange-400" />
                Risk Appetite Gauge
              </h3>
              
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${(dashboardData?.marketCondition.riskAppetite || 0) * 3.39} 339`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">
                        {dashboardData?.marketCondition.riskAppetite}%
                      </div>
                      <div className="text-sm text-gray-400">Risk Appetite</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Total Liquidity</div>
                    <div className="text-xl font-bold text-white">{dashboardData?.marketCondition.totalLiquidity}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Meme Coin Flow</div>
                    <div className="text-xl font-bold text-green-400">{dashboardData?.marketCondition.memeCoinFlow}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Stablecoin Flow</div>
                    <div className="text-xl font-bold text-red-400">{dashboardData?.marketCondition.stablecoinFlow}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Liquidity Flow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                Degen Liquidity Flow
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardData?.liquidityFlow.map((flow, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-white">{flow.label}</h4>
                      {flow.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      ) : flow.trend === 'down' ? (
                        <TrendingDown className="w-5 h-5 text-red-400" />
                      ) : (
                        <Activity className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="text-2xl font-bold text-white mb-2">{flow.value}</div>
                    <div className={`text-sm font-medium ${flow.color}`}>
                      {flow.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-blue-400" />
                Recent Activity
              </h3>
              
              <div className="space-y-4">
                {dashboardData?.recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{activity.token.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{activity.action}</h4>
                          <p className="text-sm text-gray-400">{activity.token}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Amount</p>
                          <p className="font-semibold text-white">{activity.amount}</p>
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                Market Insights
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Meme Coin Dominance</span>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-green-400">50.1%</p>
                  <p className="text-sm text-gray-400 mt-2">Strong ape money flow into meme coins</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Risk Level</span>
                    <Activity className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-2xl font-bold text-orange-400">High</p>
                  <p className="text-sm text-gray-400 mt-2">Elevated risk appetite in market</p>
                </div>
              </div>
            </motion.div>

            {/* Demo Notice */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-400">Demo Mode</h3>
              </div>
              <p className="text-yellow-300 text-sm">
                This is a demonstration of the Market Condition Dashboard. In the real version, 
                you would have access to real-time liquidity flow data, live market conditions, 
                and comprehensive risk analysis tools for tracking "ape money" movements.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 