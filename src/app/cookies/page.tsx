import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { motion } from 'framer-motion';

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <h2>What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience and understand how you use our site.
                </p>
                
                <h2>How We Use Cookies</h2>
                <p>
                  We use cookies to:
                </p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how our website is used</li>
                  <li>Improve our website's performance and functionality</li>
                  <li>Provide personalized content and features</li>
                </ul>
                
                <h2>Types of Cookies We Use</h2>
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
                
                <h3>Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                
                <h3>Functional Cookies</h3>
                <p>
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and settings.
                </p>
                
                <h2>Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow 
                  you to refuse cookies or to be notified when a cookie is being set.
                </p>
                
                <h2>Third-Party Cookies</h2>
                <p>
                  Some cookies on our website are set by third-party services that we use, such as 
                  analytics providers. These third parties have their own privacy policies.
                </p>
                
                <h2>Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@blobsy.com" className="text-yellow-600 hover:text-yellow-700">
                    privacy@blobsy.com
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