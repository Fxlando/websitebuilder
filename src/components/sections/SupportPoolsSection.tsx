"use client";

import { motion } from 'framer-motion';

export const SupportPoolsSection = () => {
  const pools = [
    {
      name: "Bonk",
      url: "https://letsbonk.fun/",
      logo: "/images/bonk-logo.png"
    },
    {
      name: "Pump.fun",
      url: "https://pump.fun/",
      logo: "/images/pump-logo.png"
    },
    {
      name: "Raydium",
      url: "https://raydium.io",
      logo: "/images/raydium-logo.png"
    },
    {
      name: "Unnamed Moon",
      url: "https://moonshot.money/",
      logo: "/images/unnamedmoon-logo.png"
    },
    {
      name: "Beleive",
      url: "http://believe.app/",
      logo: "/images/beleive-logo.png"
    },
    {
      name: "DigiByte",
      url: "https://raydium.io/",
      logo: "/images/digibyte-logo.png"
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
            Supported by <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-space-grotesk">Leading Pools</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by the most innovative platforms in the Solana ecosystem
          </p>
        </motion.div>

        {/* Pool Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {pools.map((pool) => (
            <a
              key={pool.name}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
              href={pool.url}
            >
              <img 
                alt={`${pool.name} Logo`}
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                className="object-contain"
                src={pool.logo}
                style={{ color: 'transparent' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}; 