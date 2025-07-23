import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-gray-900">The Open Network</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              for creator
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A decentralized and open internet designed to onboard 500M people on-chain,
            built by the community using technology developed by Telegram.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-medium"
              >
                Explore wallets
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-medium"
              >
                Build on TON
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 