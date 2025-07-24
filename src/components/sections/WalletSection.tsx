"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const WalletSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const cardData = [
    {
      title: 'Meta Analysis identifies which narrative is currently dominating',
      icon: '🎯',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
      mockupBg: 'bg-gray-900',
      balance: 'AI Agents'
    },
    {
      title: 'Narrative Rotation Predictor spots when current meta is getting stale',
      icon: '🔄',
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      mockupBg: 'bg-green-500',
      balance: 'Cult Coins',
      subtitle: 'Next Shift'
    },
    {
      title: 'Sub-Narrative Detection finds emerging micro-trends within larger narratives',
      icon: '🔍',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      mockupBg: 'bg-gray-800',
      balance: 'Animal Season'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Live Narrative Tracker
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-gray-900">Meta Analysis tool that identifies which narrative is currently </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">dominating</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
              Access Intelligence
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`${card.bgColor} ${card.textColor} border-0 h-full`}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <motion.div
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl">{card.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {card.title.includes('Rotation Predictor') ? (
                        <>
                          Narrative <span className="text-blue-500">Rotation Predictor</span> spots when current meta is getting stale
                        </>
                      ) : card.title.includes('Sub-Narrative') ? (
                        <>
                          <span className="text-blue-400">Sub-Narrative Detection</span> finds emerging micro-trends within larger narratives
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                  </div>
                  
                  <motion.div
                    className={`${card.bgColor === 'bg-white' ? 'bg-gray-100' : 'bg-white/10'} rounded-lg p-4 mt-8`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.bgColor === 'bg-white' ? (
                      <div className="bg-green-500 text-white rounded-lg p-4 inline-block">
                        <div className="text-2xl font-bold">{card.balance}</div>
                        <div className="text-sm">{card.subtitle}</div>
                      </div>
                    ) : (
                      <div className={`${card.mockupBg} rounded-lg p-4 text-center`}>
                        <div className="text-sm text-gray-400 mb-2">
                          {card.bgColor === 'bg-blue-500' ? 'Balance' : ''}
                        </div>
                        <div className="text-2xl font-bold">{card.balance}</div>
                        <div className="flex justify-center space-x-4 mt-4">
                          {['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-gray-600'].map((color, colorIndex) => (
                            <motion.div
                              key={colorIndex}
                              className={`w-8 h-8 ${color} rounded-full`}
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2, delay: colorIndex * 0.1 }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};