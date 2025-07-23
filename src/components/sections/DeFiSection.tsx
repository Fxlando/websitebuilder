"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const DeFiSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'New Launch Velocity',
      description: 'Tracks rate of new token deployments and quality indicators.',
      linkText: 'View launches →',
      bgColor: 'bg-gray-50'
    },
    {
      icon: '🐋',
      title: 'Whale Activity Patterns',
      description: 'Identifies which known degen whales are active and their rotation patterns.',
      linkText: 'Track whales →',
      bgColor: 'bg-gray-50'
    },
    {
      icon: '📱',
      title: 'Social Engagement Quality',
      description: 'Distinguishes between genuine organic growth vs bot/shill activity.',
      linkText: 'Analyze engagement →',
      bgColor: 'bg-gray-50'
    },
    {
      icon: '📊',
      title: 'Market Health Metrics',
      description: 'Measures ecosystem vitality and sustainability indicators.',
      linkText: 'View metrics →',
      bgColor: 'bg-gray-50'
    },
    {
      icon: '🔍',
      title: 'Quality Indicators',
      description: 'Analyzes token quality and potential for success.',
      linkText: 'Check quality →',
      bgColor: 'bg-gray-50'
    },
    {
      icon: '⚡',
      title: 'Real-Time Monitoring',
      description: 'Continuous ecosystem health tracking and alerts.',
      linkText: 'Monitor now →',
      bgColor: 'bg-gray-50'
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
            Ecosystem Health Monitor
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="whileHover"
              className="group"
            >
              <Card 
                className={`${feature.bgColor} border-0 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                {...cardHover}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <motion.div
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="link" className="text-blue-500 hover:text-blue-600 p-0 h-auto font-medium">
                      {feature.linkText}
                    </Button>
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