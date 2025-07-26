'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
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
            <h1 className="text-2xl font-bold text-gray-900">Cookie Policy</h1>
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
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Cookie Policy</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies</h3>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience and understand how you use our site.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Cookies</h3>
            <p className="text-gray-600 mb-6">
              We use cookies to improve your browsing experience, analyze site traffic, 
              and understand where our visitors are coming from.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
            <ul className="text-gray-600 mb-6 list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Managing Cookies</h3>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies through your browser settings. 
              However, disabling certain cookies may affect the functionality of our website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h3>
            <p className="text-gray-600 mb-6">
              Some cookies may be placed by third-party services that appear on our pages. 
              We do not control these cookies and they are subject to the third party's privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about our Cookie Policy, please contact us at{' '}
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