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

  return (
    <section id="support-pool" className="w-full py-12 md:py-24 bg-background text-foreground lg:py-20 lg:pt-0 lg:pb-40 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "10px 10px"
        }}
      ></div>
      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.h2 
          className="text-xl font-sans tracking-tighter sm:text-2xl md:text-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Supported by Leading Pools
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              whileHover={{ scale: 1.1, y: -5 }}
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