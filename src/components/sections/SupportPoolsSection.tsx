"use client";

import { motion } from 'framer-motion';

export const SupportPoolsSection = () => {
  const pools = [
    {
      name: "Bonk",
      color: "bg-orange-500",
      url: "https://letsbonk.fun/"
    },
    {
      name: "Pump.fun",
      color: "bg-red-500",
      url: "https://pump.fun/"
    },
    {
      name: "Raydium",
      color: "bg-blue-500",
      url: "https://raydium.io"
    },
    {
      name: "Unnamed Moon",
      color: "bg-purple-500",
      url: "https://moonshot.money/"
    },
    {
      name: "Beleive",
      color: "bg-green-500",
      url: "http://believe.app/"
    },
    {
      name: "DigiByte",
      color: "bg-yellow-500",
      url: "https://raydium.io/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">
            Supported by <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Leading Pools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by the most innovative platforms in the Solana ecosystem
          </p>
        </motion.div>

        {/* Pool Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pools.map((pool, index) => (
            <motion.div
              key={pool.name}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.a
                href={pool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 ${pool.color} rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center p-4 group-hover:shadow-xl transition-all duration-300 group-hover:border-orange-300`}>
                  <span className="text-white font-bold text-lg">
                    {pool.name.split('.')[0]}
                  </span>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                    {pool.name}
                  </p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 