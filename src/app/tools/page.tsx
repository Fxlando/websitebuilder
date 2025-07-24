"use client";

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import { 
  Search, 
  TrendingUp, 
  Shield, 
  Eye, 
  BarChart3, 
  Activity,
  ExternalLink,
  Clock
} from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      name: 'Snipe Scanner',
      description: 'Real-time detection of new token launches and potential moonshots',
      icon: Search,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.snipeScanner
    },
    {
      name: 'Meme Signal Oracle',
      description: 'AI-powered sentiment analysis for meme coin trading signals',
      icon: TrendingUp,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.memeOracle
    },
    {
      name: 'Rug Radar',
      description: 'Advanced rug pull detection and risk assessment tools',
      icon: Shield,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.rugRadar
    },
    {
      name: 'Auto-Liquidity Watcher',
      description: 'Monitor liquidity changes and whale movements in real-time',
      icon: Eye,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.liquidityWatcher
    },
    {
      name: 'MemeCoin Tracker',
      description: 'Comprehensive tracking and analytics for meme coins',
      icon: BarChart3,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.memeTracker
    },
    {
      name: 'BLOBSY Analytics',
      description: 'Advanced analytics and insights for the BLOBSY ecosystem',
      icon: Activity,
      status: 'Coming Soon',
      href: SITE_CONFIG.links.analytics
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Trading Tools
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced tools and analytics to give you the edge in meme coin trading. 
                Built by traders, for traders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tool.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {tool.description}
                  </p>
                  
                  <motion.a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get the Trading Edge?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our community and get early access to these powerful trading tools. 
                Be among the first to experience the future of meme coin trading.
              </p>
              <motion.a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
                <ExternalLink className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
} 