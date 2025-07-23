import { motion } from 'framer-motion';
import { Twitter, ArrowRight } from 'lucide-react';
import { BlobIcon } from '../icons/BlobIcon';
import { FloatingElement } from '../ui/FloatingElement';

export const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const buttonHover = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <FloatingElement duration={4} delay={0}>
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-blob-yellow rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </FloatingElement>
        <FloatingElement duration={4} delay={2}>
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 bg-blob-yellow rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </FloatingElement>
        <FloatingElement duration={3} delay={1}>
          <motion.div 
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-blob-yellow rounded-full blur-2xl"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </FloatingElement>
      </div>

      {/* Premium Floating Elements */}
      <FloatingElement duration={2} delay={0}>
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-blob-yellow rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </FloatingElement>
      <FloatingElement duration={2.5} delay={0.5}>
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blob-yellow rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Enhanced Animated Logo/Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <FloatingElement duration={4} delay={0}>
              <motion.div
                className="relative"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Replace BlobIcon with your custom logo or icon */}
                <div className="w-48 h-48 bg-gradient-to-br from-blob-yellow to-blob-yellow-accent rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl font-bold text-black">YB</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-blob-yellow rounded-full blur-xl opacity-30"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </FloatingElement>
          </motion.div>

          {/* Enhanced Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
            variants={fadeInUp}
          >
            <span className="text-gray-900">Transform Your Business</span>
            <br />
            <span className="gradient-text">with Innovation</span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Discover cutting-edge solutions that revolutionize how you work, 
            built with the latest technology and designed for the future.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <motion.a
              href="#contact"
              className="group flex items-center space-x-3 bg-blob-yellow text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden"
              variants={buttonHover}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#learn-more"
              className="group flex items-center space-x-3 border-2 border-blob-yellow text-blob-yellow px-8 py-4 rounded-full font-semibold text-lg hover:bg-blob-yellow hover:text-black transition-all duration-200"
              variants={buttonHover}
            >
              <span>Learn More</span>
            </motion.a>


          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            variants={fadeInUp}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-black">500+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-black">99%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-black">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <FloatingElement duration={2} delay={0}>
              <motion.div
                className="flex flex-col items-center space-y-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
                <motion.div
                  className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </FloatingElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 