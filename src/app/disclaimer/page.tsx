import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { motion } from 'framer-motion';

export default function DisclaimerPage() {
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
                Disclaimer
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h2 className="text-yellow-800 font-bold mb-2">⚠️ Important Notice</h2>
                  <p className="text-yellow-700">
                    Cryptocurrency investments carry significant risks. Please read this disclaimer carefully 
                    before making any investment decisions.
                  </p>
                </div>
                
                <h2>Investment Risks</h2>
                <p>
                  Cryptocurrency investments, including BLOBSY tokens, are highly speculative and involve 
                  substantial risk of loss. The value of cryptocurrencies can be extremely volatile and 
                  may result in significant financial losses.
                </p>
                
                <h2>No Financial Advice</h2>
                <p>
                  The information provided on this website is for informational purposes only and does not 
                  constitute financial advice, investment advice, or any other type of advice. We strongly 
                  recommend consulting with a qualified financial advisor before making any investment decisions.
                </p>
                
                <h2>Market Volatility</h2>
                <p>
                  Cryptocurrency markets are known for their extreme volatility. Prices can fluctuate 
                  dramatically in short periods, and there is no guarantee of profit or protection against loss.
                </p>
                
                <h2>Regulatory Risks</h2>
                <p>
                  Cryptocurrency regulations are evolving and vary by jurisdiction. Changes in regulations 
                  may affect the value and legality of cryptocurrency investments.
                </p>
                
                <h2>Technical Risks</h2>
                <p>
                  Cryptocurrencies rely on blockchain technology, which may be subject to technical failures, 
                  security breaches, or other technological issues that could result in loss of funds.
                </p>
                
                <h2>No Guarantees</h2>
                <p>
                  We make no guarantees regarding the future performance of BLOBSY tokens or any other 
                  cryptocurrency. Past performance does not indicate future results.
                </p>
                
                <h2>Liquidity Risks</h2>
                <p>
                  Cryptocurrency markets may have limited liquidity, which could make it difficult to buy 
                  or sell tokens at desired prices or quantities.
                </p>
                
                <h2>Tax Implications</h2>
                <p>
                  Cryptocurrency transactions may have tax implications. We recommend consulting with a 
                  qualified tax professional to understand your tax obligations.
                </p>
                
                <h2>Third-Party Services</h2>
                <p>
                  Our website may link to third-party services, exchanges, or platforms. We are not 
                  responsible for the content, security, or practices of these third-party services.
                </p>
                
                <h2>Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, BLOBSY and its team shall not be liable for 
                  any direct, indirect, incidental, special, consequential, or punitive damages arising 
                  from your use of this website or investment in cryptocurrencies.
                </p>
                
                <h2>Acceptance of Risk</h2>
                <p>
                  By using this website and considering investments in BLOBSY tokens, you acknowledge 
                  that you understand and accept the risks associated with cryptocurrency investments.
                </p>
                
                <h2>Contact Information</h2>
                <p>
                  If you have questions about this disclaimer, please contact us at{' '}
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