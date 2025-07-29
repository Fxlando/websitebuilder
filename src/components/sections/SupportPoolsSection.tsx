"use client";

import { motion } from 'framer-motion';

export const SupportPoolsSection = () => {
  const pools = [
    {
      name: "Bonk",
      logo: "/images/bonk-logo.svg",
      url: "https://letsbonk.fun/"
    },
    {
      name: "Pump.fun",
      logo: "/images/pump-logo.svg",
      url: "https://pump.fun/"
    },
    {
      name: "Raydium",
      logo: "/images/raydium-logo.svg",
      url: "https://raydium.io"
    },
    {
      name: "Unnamed Moon",
      logo: "/images/unnamedmoon-logo.svg",
      url: "https://moonshot.money/"
    },
    {
      name: "Beleive",
      logo: "/images/beleive-logo.svg",
      url: "http://believe.app/"
    },
    {
      name: "DigiByte",
      logo: "/images/digibyte-logo.svg",
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
              <img
                alt={`${pool.name} Logo`}
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                className="object-contain"
                style={{ color: "transparent" }}
                src={pool.logo}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 