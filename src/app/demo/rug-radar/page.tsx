'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Clock, Activity, BarChart3, Eye, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface SecurityScan {
  name: string;
  address: string;
  risk: 'Low' | 'Medium' | 'High';
  score: number;
  time: string;
}

interface SecurityMetrics {
  liquidityLocked: string;
  contractVerified: string;
  honeypotDetected: string;
}

interface RadarData {
  scannedTokens: number;
  highRisk: number;
  mediumRisk: number;
  safeTokens: number;
  recentScans: SecurityScan[];
  securityMetrics: SecurityMetrics;
}

export default function RugRadarDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [radarData, setRadarData] = useState<RadarData | null>(null);

  useEffect(() => {
    // Simulate loading radar data
    setTimeout(() => {
      setRadarData({
        scannedTokens: 156,
        highRisk: 3,
        mediumRisk: 8,
        safeTokens: 145,
        recentScans: [
          { name: 'BLOB', address: '0x1234...5678', risk: 'Low', score: 92, time: '2 min ago' },
          { name: 'PEPE2', address: '0x8765...4321', risk: 'High', score: 23, time: '5 min ago' },
          { name: 'DOGE3', address: '0x9876...5432', risk: 'Medium', score: 67, time: '8 min ago' },
          { name: 'SHIB2', address: '0x6543...2109', risk: 'Low', score: 89, time: '12 min ago' }
        ],
        securityMetrics: {
          liquidityLocked: '87%',
          contractVerified: '94%',
          honeypotDetected: '2%'
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
            <Shield className="w-6 h-6 text-red-400" />
            <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
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
              className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              Rug Radar
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time security scanner that detects potential rug pulls and suspicious contract activity. 
            Protect your investments with advanced analytics.
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
              className="w-16 h-16 border-4 border-red-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-400">Scanning for Threats...</p>
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
                    <p className="text-gray-400 text-sm">Scanned Tokens</p>
                    <p className="text-2xl font-bold text-white">{radarData?.scannedTokens}</p>
                  </div>
                  <Eye className="w-8 h-8 text-blue-400" />
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
                    <p className="text-gray-400 text-sm">High Risk</p>
                    <p className="text-2xl font-bold text-red-400">{radarData?.highRisk}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-400" />
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
                    <p className="text-gray-400 text-sm">Safe Tokens</p>
                    <p className="text-2xl font-bold text-green-400">{radarData?.safeTokens}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
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
                    <p className="text-gray-400 text-sm">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">93%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>
            </div>

            {/* Recent Scans */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-red-400" />
                Recent Security Scans
              </h3>
              
              <div className="space-y-4">
                {radarData?.recentScans.map((scan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          scan.risk === 'Low' ? 'bg-green-500' :
                          scan.risk === 'Medium' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}>
                          <span className="text-sm font-bold text-white">{scan.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{scan.name}</h4>
                          <p className="text-sm text-gray-400">{scan.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Security Score</p>
                          <p className="font-semibold text-white">{scan.score}/100</p>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          scan.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                          scan.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {scan.risk} Risk
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs">{scan.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
                Security Metrics
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Liquidity Locked</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-green-400">{radarData?.securityMetrics.liquidityLocked}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Contract Verified</span>
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-blue-400">{radarData?.securityMetrics.contractVerified}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Honeypot Detected</span>
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-2xl font-bold text-red-400">{radarData?.securityMetrics.honeypotDetected}</p>
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
                This is a demonstration of the Rug Radar feature. In the real version, 
                you would have access to real-time contract analysis, advanced security scanning, 
                and comprehensive risk assessment tools to protect your investments.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 