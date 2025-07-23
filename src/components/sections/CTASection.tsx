import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-blob-yellow/20 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-4 h-4 text-blob-yellow" />
              <span className="text-sm font-semibold text-blob-yellow">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="gradient-text">Transform</span>
              <br />
              Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Let&apos;s discuss how our solutions can help you achieve your goals. Our team is ready to answer your questions and get you started.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+1234567890"
              className="group flex items-center space-x-3 bg-blob-yellow text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
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
              href="mailto:hello@yourbrand.com"
              className="group flex items-center space-x-3 border-2 border-blob-yellow text-blob-yellow px-8 py-4 rounded-full font-semibold text-lg hover:bg-blob-yellow hover:text-black transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </motion.a>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-blob-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (234) 567-8900</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-blob-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@yourbrand.com</p>
              <p className="text-sm text-gray-400">24/7 Support</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-blob-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Start a conversation</p>
              <p className="text-sm text-gray-400">Instant Response</p>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <div className="text-blob-yellow font-semibold mb-2">✓ Free Consultation</div>
                  <p className="text-sm">No obligation, just expert advice</p>
                </div>
                <div>
                  <div className="text-blob-yellow font-semibold mb-2">✓ Custom Solutions</div>
                  <p className="text-sm">Tailored to your specific needs</p>
                </div>
                <div>
                  <div className="text-blob-yellow font-semibold mb-2">✓ Ongoing Support</div>
                  <p className="text-sm">We&apos;re here for you every step</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 