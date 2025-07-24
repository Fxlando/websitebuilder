"use client";

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2>Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on BLOBSY's 
                  website for personal, non-commercial transitory viewing only.
                </p>
                
                <h2>Disclaimer</h2>
                <p>
                  The materials on BLOBSY's website are provided on an 'as is' basis. BLOBSY makes no 
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
                
                <h2>Limitations</h2>
                <p>
                  In no event shall BLOBSY or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on BLOBSY's website.
                </p>
                
                <h2>Accuracy of Materials</h2>
                <p>
                  The materials appearing on BLOBSY's website could include technical, typographical, 
                  or photographic errors. BLOBSY does not warrant that any of the materials on its 
                  website are accurate, complete or current.
                </p>
                
                <h2>Links</h2>
                <p>
                  BLOBSY has not reviewed all of the sites linked to its website and is not responsible 
                  for the contents of any such linked site. The inclusion of any link does not imply 
                  endorsement by BLOBSY of the site.
                </p>
                
                <h2>Modifications</h2>
                <p>
                  BLOBSY may revise these terms of service for its website at any time without notice. 
                  By using this website you are agreeing to be bound by the then current version of 
                  these Terms of Service.
                </p>
                
                <h2>Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@blobsy.com" className="text-yellow-600 hover:text-yellow-700">
                    legal@blobsy.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
} 