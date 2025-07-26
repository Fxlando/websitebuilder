'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Disclaimer</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Disclaimer</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Disclosure</h3>
            <p className="text-gray-600 mb-6">
              Cryptocurrency trading involves substantial risk and may result in the loss of your invested capital. 
              You should not invest more than you can afford to lose. The value of cryptocurrencies can go down 
              as well as up, and you may not get back the amount you invested.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Investment Advice</h3>
            <p className="text-gray-600 mb-6">
              The information provided on this website is for informational purposes only and should not be 
              construed as investment advice. We do not provide financial, legal, or tax advice. 
              Always conduct your own research and consult with qualified professionals before making 
              investment decisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Guarantees</h3>
            <p className="text-gray-600 mb-6">
              Past performance does not guarantee future results. The performance of cryptocurrencies 
              can be highly volatile and unpredictable. There is no guarantee that any investment 
              will achieve its objectives or that any investment strategy will be successful.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Notice</h3>
            <p className="text-gray-600 mb-6">
              Cryptocurrency regulations vary by jurisdiction and may change over time. 
              It is your responsibility to ensure compliance with applicable laws and regulations 
              in your jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Content</h3>
            <p className="text-gray-600 mb-6">
              This website may contain links to third-party websites and content. 
              We do not endorse or take responsibility for any third-party content, 
              products, or services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this disclaimer, please contact us at{' '}
              <a href="mailto:support@blobsy.com" className="text-blue-600 hover:text-blue-700">
                support@blobsy.com
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 