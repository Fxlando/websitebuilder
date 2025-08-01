"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const CryptoSection = () => {
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

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const statsData = [
    { label: 'Risk Appetite', value: 'High' },
    { label: 'Liquidity Flow', value: '$2.1B' },
    { label: 'Attention Span', value: '48h' }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={leftVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Market Condition<br />
              Dashboard
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Degen Liquidity Flow tracks total available "ape money" flowing between meme coins vs flowing out to majors/stablecoins with risk appetite gauge.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                onClick={() => window.location.href = '/demo/dashboard'}
              >
                View Dashboard
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Price Card */}
          <motion.div variants={rightVariants}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white font-bold">📊</span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-600">Degen Liquidity Flow</div>
                      <motion.div
                        className="text-3xl font-bold text-gray-900"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        $3.35
                      </motion.div>
                    </div>
                  </div>

                  {/* Market Stats */}
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {statsData.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Powered by */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="text-xs text-gray-400 text-center">
                      Powered by <span className="text-blue-500">CoinMarketCap</span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};