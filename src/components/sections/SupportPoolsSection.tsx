"use client";

import { motion } from 'framer-motion';

export const SupportPoolsSection = () => {
  const pools = [
    {
      name: "Bonk",
      color: "bg-yellow-400",
      bgColor: "bg-yellow-400",
      textColor: "text-orange-600",
      url: "https://letsbonk.fun/"
    },
    {
      name: "Pump.fun",
      color: "bg-green-500",
      bgColor: "bg-black",
      textColor: "text-green-500",
      url: "https://pump.fun/"
    },
    {
      name: "Raydium",
      color: "bg-gradient-to-r from-cyan-400 to-purple-600",
      bgColor: "bg-black",
      textColor: "text-white",
      url: "https://raydium.io"
    },
    {
      name: "Unnamed Moon",
      color: "bg-purple-600",
      bgColor: "bg-black",
      textColor: "text-pink-400",
      url: "https://moonshot.money/"
    },
    {
      name: "Beleive",
      color: "bg-green-500",
      bgColor: "bg-black",
      textColor: "text-green-500",
      url: "http://believe.app/"
    },
    {
      name: "DigiByte",
      color: "bg-pink-500",
      bgColor: "bg-black",
      textColor: "text-pink-500",
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
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pools.map((pool, index) => (
            <motion.a
              key={pool.name}
              target="_blank"
              rel="noopener noreferrer"
              href={pool.url}
              className="transition-transform duration-200 hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-20 h-20 ${pool.color} rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-all duration-300`}>
                <span className={`font-bold text-lg ${pool.textColor}`}>
                  {pool.name.split('.')[0]}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 