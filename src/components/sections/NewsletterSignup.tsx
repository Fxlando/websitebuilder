import { motion } from 'framer-motion';
import { Mail, CheckCircle, Bell, Zap, Shield, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Header */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-blob-yellow/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Bell className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">Early Access</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get <span className="gradient-text">Alerts</span> When $BLOB Launches
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get alerts when $BLOB launches + tool alpha early. Be among the first to access our advanced trading tools and never miss a moon shot.
          </p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Zap className="w-4 h-4 text-blob-yellow" />
              <span>Early Access</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4 text-blob-yellow" />
              <span>No Spam</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <CheckCircle className="w-4 h-4 text-blob-yellow" />
              <span>Instant Alerts</span>
            </div>
          </motion.div>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blob-yellow focus:ring-2 focus:ring-blob-yellow/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="group bg-blob-yellow text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{isLoading ? 'Submitting...' : 'Get Early Access'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                <motion.div
                  className="flex items-center justify-center space-x-3 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-green-400 font-semibold text-xl">
                    Successfully Subscribed!
                  </span>
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  You&apos;ll be the first to know when $BLOB launches and when our advanced trading tools are ready. Check your email for confirmation!
                </p>
              </div>
            </motion.div>
          )}

          <motion.p
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            No spam, ever. Unsubscribe at any time. Your privacy is protected.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 