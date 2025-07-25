"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const AppsSection = () => {
  const apps = [
    {
      icon: '📊',
      badge: 'Narrative Score',
      title: 'Narrative Strength Score',
      subtitle: 'Current meta strength (1-10) and estimated time remaining',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
      textColor: 'text-black',
      isOrange: true
    },
    {
      icon: '🎯',
      badge: 'Market Phase',
      title: 'Bull-degen, Bear-degen, Rotation, or Dead-cat phases',
      subtitle: 'Specifically for meme coins with market phase detection.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      isOrange: false
    },
    {
      icon: '⏰',
      badge: 'Opportunity Windows',
      title: 'Optimal entry/exit timing',
      subtitle: 'Identifies optimal timing based on current degen market psychology.',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
      textColor: 'text-black',
      isOrange: true
    },
    {
      icon: '🔍',
      badge: 'Real-Time Feed',
      title: 'Live intelligence updates',
      subtitle: 'Continuous monitoring and alerts for market opportunities.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      isOrange: false
    },
    {
      icon: '📈',
      badge: 'Pattern Recognition',
      title: 'Market psychology analysis',
      subtitle: 'Advanced pattern recognition for degen market behavior.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      isOrange: false
    },
    {
      icon: '⚡',
      badge: 'Instant Alerts',
      title: 'Real-time notifications',
      subtitle: 'Get notified immediately when opportunities arise.',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
      textColor: 'text-black',
      isOrange: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardHover = {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Space_Grotesk']">
            Explore services
          </h2>
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {apps.map((app, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="whileHover"
              className="group"
            >
              <Card 
                className={`${app.bgColor} ${app.textColor} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group ${app.isOrange ? 'hover:bg-white hover:text-gray-900' : ''}`}
                {...cardHover}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <motion.span 
                        className="text-2xl mr-3"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {app.icon}
                      </motion.span>
                      <span className="text-sm font-medium opacity-80">{app.badge}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-200">
                      {app.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      {app.subtitle}
                    </p>
                  </div>

                  {/* Mock App Screenshot */}
                  <motion.div 
                    className={`${app.isOrange ? 'bg-white/10 group-hover:bg-gray-100' : 'bg-white/10'} rounded-lg p-4 mt-8`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`${app.isOrange ? 'bg-white/20 group-hover:bg-gray-200' : 'bg-white/20'} rounded-lg h-32 flex items-center justify-center`}>
                      <span className="text-4xl opacity-50">{app.icon}</span>
                    </div>
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