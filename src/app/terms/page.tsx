'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
            <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
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
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h3>
            <p className="text-gray-600 mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Use License</h3>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on BLOBSY's 
              website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer</h3>
            <p className="text-gray-600 mb-6">
              The materials on BLOBSY's website are provided on an 'as is' basis. BLOBSY makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h3>
            <p className="text-gray-600 mb-6">
              In no event shall BLOBSY or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on BLOBSY's website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Revisions and Errata</h3>
            <p className="text-gray-600 mb-6">
              The materials appearing on BLOBSY's website could include technical, typographical, 
              or photographic errors. BLOBSY does not warrant that any of the materials on its 
              website are accurate, complete or current.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at{' '}
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