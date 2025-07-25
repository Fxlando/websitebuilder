"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const FutureSection = () => {
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