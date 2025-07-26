'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
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
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you sign up for our newsletter, 
              join our community, or contact us for support.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and develop new features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h3>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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