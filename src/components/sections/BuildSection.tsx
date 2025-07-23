import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const BuildSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const categories = [
    { icon: '📱', name: 'Mini Apps' },
    { icon: '🎮', name: 'GameFi' },
    { icon: '💰', name: 'DeFi' }
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Build your product for a global audience
          </h2>
          <div className="flex justify-center space-x-8 text-lg font-medium">
            <span className="text-blue-400">Mini Apps</span>
            <span className="text-blue-400">GameFi</span>
            <span className="text-blue-400">DeFi</span>
          </div>
        </motion.div>

        {/* Build Categories */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Sidebar */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="text-sm text-gray-400">
              Check out the <span className="text-blue-400">roadmap</span> to discover upcoming opportunities.
            </div>

            <div className="space-y-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-sm">{category.icon}</span>
                  </motion.div>
                  <span className="font-medium">{category.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">
              Unlock access to millions of Telegram users
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Your app can unlock access to millions of Telegram users with one-click app launch,
              direct advertising, along with viral and retention mechanics based in the messenger.
              Millions of users have been onboarded to TON via{' '}
              <span className="text-blue-400">@wallet</span>.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 mb-8">
                Build Mini App
              </Button>
            </motion.div>

            {/* Mock Phone Display */}
            <motion.div
              className="bg-blue-500 rounded-2xl p-8 max-w-sm"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-4">
                <div className="text-gray-900 text-center">
                  <div className="text-lg font-bold mb-2">$0.00</div>
                  <div className="text-sm text-gray-600">Test Wallet</div>
                  <div className="flex justify-center space-x-2 mt-4">
                    {['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-gray-400'].map((color, index) => (
                      <motion.div
                        key={index}
                        className={`w-8 h-8 ${color} rounded-full`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Developer Center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <Card className="bg-gray-800 border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center">
                <div className="mr-6">
                  <motion.div
                    className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">👨‍💻</span>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Developers center
                  </h3>
                  <p className="text-gray-300">
                    Quick start and deep dive into development on TON.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};