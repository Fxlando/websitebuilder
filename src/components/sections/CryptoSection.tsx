import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const CryptoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsData = [
    { label: 'Rank ⓘ', value: '#21' },
    { label: 'Market Cap', value: '$8.28B' },
    { label: 'Volume', value: '$714.52M' }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={leftVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cryptocurrency<br />
              is the heart of TON
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Toncoin is TON's native cryptocurrency. It is used for network operations,
              transactions, games or collectibles built on TON.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Get Toncoin
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Price Card */}
          <motion.div variants={rightVariants}>
            <motion.div
              whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white font-bold">T</span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-600">Toncoin (TON)</div>
                      <motion.div
                        className="text-3xl font-bold text-gray-900"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        $3.35
                      </motion.div>
                    </div>
                  </div>

                  {/* Market Stats */}
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {statsData.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Powered by */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="text-xs text-gray-400 text-center">
                      Powered by <span className="text-blue-500">CoinMarketCap</span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};