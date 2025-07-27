'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, Zap, Eye, Brain, AlertTriangle, Play, Settings, Download, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface AppTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  complexity: 'Easy' | 'Medium' | 'Hard';
}

interface BuildProgress {
  step: number;
  totalSteps: number;
  currentStep: string;
  progress: number;
}

export default function MiniAppBuilderDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [buildProgress, setBuildProgress] = useState<BuildProgress | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);

  const appTemplates: AppTemplate[] = [
    {
      id: 'narrative-tracker',
      name: 'Narrative Tracker',
      description: 'Track and analyze meme coin narratives in real-time',
      icon: '📊',
      category: 'Analytics',
      complexity: 'Medium'
    },
    {
      id: 'pattern-recognizer',
      name: 'Pattern Recognizer',
      description: 'Identify trading patterns and rotation signals',
      icon: '🔍',
      category: 'AI',
      complexity: 'Hard'
    },
    {
      id: 'liquidity-monitor',
      name: 'Liquidity Monitor',
      description: 'Monitor whale movements and liquidity flows',
      icon: '💧',
      category: 'Monitoring',
      complexity: 'Easy'
    },
    {
      id: 'sentiment-analyzer',
      name: 'Sentiment Analyzer',
      description: 'Analyze social media sentiment for meme coins',
      icon: '😊',
      category: 'AI',
      complexity: 'Medium'
    },
    {
      id: 'portfolio-tracker',
      name: 'Portfolio Tracker',
      description: 'Track your meme coin portfolio performance',
      icon: '📈',
      category: 'Portfolio',
      complexity: 'Easy'
    },
    {
      id: 'alert-system',
      name: 'Alert System',
      description: 'Get real-time alerts for market opportunities',
      icon: '🔔',
      category: 'Notifications',
      complexity: 'Medium'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleBuildApp = (templateId: string) => {
    setSelectedTemplate(templateId);
    setIsBuilding(true);
    setBuildProgress({
      step: 1,
      totalSteps: 5,
      currentStep: 'Initializing build environment...',
      progress: 20
    });

    // Simulate build process
    const steps = [
      'Initializing build environment...',
      'Downloading template dependencies...',
      'Configuring NarrativeScope integration...',
      'Building mini app components...',
      'Deploying to test environment...'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setBuildProgress({
          step: index + 2,
          totalSteps: 5,
          currentStep: step,
          progress: ((index + 2) / 5) * 100
        });
      }, (index + 1) * 2000);
    });

    // Complete build after 10 seconds
    setTimeout(() => {
      setIsBuilding(false);
    }, 10000);
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
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-blue-400" />
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
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mini App Builder
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build custom mini apps with "God Mode" vision into the chaotic world of Solana meme coin degeneracy. 
            Track narratives, predict rotations, and identify optimal entry/exit windows.
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
            <p className="text-gray-400">Loading Builder...</p>
          </motion.div>
        ) : isBuilding ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            {/* Build Progress */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-blue-400" />
                Building Your Mini App
              </h3>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{buildProgress?.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${buildProgress?.progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-lg font-semibold text-blue-400 mb-2">
                  Step {buildProgress?.step} of {buildProgress?.totalSteps}
                </div>
                <div className="text-gray-300">
                  {buildProgress?.currentStep}
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`h-2 rounded-full ${
                      step <= (buildProgress?.step || 0) 
                        ? 'bg-blue-500' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* App Templates */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-blue-400" />
                Choose Your Mini App Template
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => handleBuildApp(template.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{template.icon}</div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        template.complexity === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        template.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {template.complexity}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-white mb-2">{template.name}</h4>
                    <p className="text-sm text-gray-400 mb-4">{template.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{template.category}</span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-purple-400" />
                God Mode Features
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-semibold text-white">Live Tracking</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Real-time monitoring of meme coin movements and market dynamics
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-6 h-6 text-purple-400" />
                    <h4 className="font-semibold text-white">Market Intelligence</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Advanced analytics and pattern recognition for optimal trading decisions
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h4 className="font-semibold text-white">Pattern Recognition</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Identify trading patterns and rotation signals that others miss
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Settings className="w-6 h-6 text-green-400" />
                    <h4 className="font-semibold text-white">Customizable</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Build and customize mini apps to fit your specific trading strategy
                  </p>
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
                This is a demonstration of the Mini App Builder. In the real version, 
                you would have access to a full development environment, real-time data integration, 
                and the ability to deploy custom mini apps for meme coin trading strategies.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 