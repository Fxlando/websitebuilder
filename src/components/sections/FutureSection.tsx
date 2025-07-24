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
          {/* TON Sites Card */}
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
                      >
                        Read more
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

          {/* TON Storage Card */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
            <Card className="bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-sm font-medium mb-2 opacity-90">PHASE 2.0</div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                      BLOBSY Analytics
                    </h3>
                    <p className="text-lg mb-8 opacity-90 leading-relaxed">
                      Advanced trading analytics powered by the BLOBSY community. Get insights from thousands of traders and make data-driven decisions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="secondary"
                          className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3"
                        >
                          View Analytics
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3"
                        >
                          Roadmap →
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3"
                        >
                          Join Community →
                        </Button>
                      </motion.div>
                    </div>
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
                            📊
                          </motion.span>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">📈</span>
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