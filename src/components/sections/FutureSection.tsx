"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { useState } from 'react';

export const FutureSection = () => {
  const [showReadMore, setShowReadMore] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">
            "<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">God Mode</span>" Vision into the Chaos
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* NARRATIVESCOPE 1.0 Card */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
            <Card className="bg-gradient-to-r from-blue-500 to-blue-400 text-white border-0 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-sm font-medium mb-2 opacity-90">NARRATIVESCOPE 1.0</div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                      Comprehensive Market Intelligence
                    </h3>
                    <p className="text-lg mb-8 opacity-90 leading-relaxed">
                      Blobsy finds this tool can essentially give him "god mode" vision into the chaotic world of Solana meme coin degeneracy, seeing patterns that individual traders miss in the chaos.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="secondary"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                        onClick={() => setShowReadMore(!showReadMore)}
                      >
                        {showReadMore ? 'Show less' : 'Read more'}
                      </Button>
                    </motion.div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <motion.div
                        className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-48 h-48 bg-white/30 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="text-6xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            🔍
                          </motion.span>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">🔗</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expanded Read More Section */}
          {showReadMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mb-8"
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 overflow-hidden">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold mb-6">Advanced Market Intelligence Features</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-white/10 rounded-lg p-6">
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <span className="mr-3">🔍</span>
                            Pattern Recognition Engine
                          </h5>
                          <p className="text-blue-100 leading-relaxed">
                            Advanced AI algorithms that identify trading patterns invisible to the human eye. 
                            Tracks whale movements, liquidity flows, and market sentiment shifts in real-time.
                          </p>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <span className="mr-3">📊</span>
                            Multi-Dimensional Analysis
                          </h5>
                          <p className="text-blue-100 leading-relaxed">
                            Combines social media sentiment, on-chain data, and market metrics to provide 
                            comprehensive insights into meme coin dynamics and rotation patterns.
                          </p>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <span className="mr-3">⚡</span>
                            Real-Time Alerts
                          </h5>
                          <p className="text-blue-100 leading-relaxed">
                            Instant notifications for emerging narratives, whale movements, and market shifts. 
                            Stay ahead of the curve with predictive analytics and trend forecasting.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold mb-6">Technical Capabilities</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">Real-time data processing from 50+ sources</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">AI-powered sentiment analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">Whale wallet tracking & analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">Liquidity flow monitoring</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">Narrative shift detection</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-blue-100">Predictive market modeling</span>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-white/10 rounded-lg">
                        <h5 className="text-lg font-semibold mb-3">🎯 Use Cases</h5>
                        <ul className="text-blue-100 space-y-2">
                          <li>• Identify emerging meme coin narratives before they moon</li>
                          <li>• Track whale accumulation patterns and rotation signals</li>
                          <li>• Monitor social media sentiment and community engagement</li>
                          <li>• Predict market shifts and optimal entry/exit points</li>
                          <li>• Analyze historical patterns for future predictions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Live Narrative Tracker Card */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-sm font-medium mb-2 opacity-90">PHASE 2.0</div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                      Live Narrative Tracker
                    </h3>
                    <p className="text-lg mb-8 opacity-90 leading-relaxed">
                      Real-time intelligence system that identifies which narrative is currently dominating the market. Get live updates on meta shifts and emerging trends.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="secondary"
                        className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3"
                        onClick={() => window.location.href = '/test-intelligence'}
                      >
                        Access Intelligence
                      </Button>
                    </motion.div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <motion.div
                        className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-48 h-48 bg-white/30 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="text-6xl"
                            whileHover={{ scale: 1.2, rotate: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            🎯
                          </motion.span>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">🔄</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};