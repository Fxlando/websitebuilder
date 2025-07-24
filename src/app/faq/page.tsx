import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What is BLOBSY?",
      answer: "BLOBSY is a meme coin token built on the Ethereum blockchain. It represents a community-driven project focused on creating trading tools and fostering a strong community around meme coin trading."
    },
    {
      question: "How can I buy BLOBSY tokens?",
      answer: "You can buy BLOBSY tokens through decentralized exchanges like Uniswap. Make sure you have ETH in your wallet and use the contract address provided on our website."
    },
    {
      question: "What trading tools are you developing?",
      answer: "We're developing several advanced trading tools including a Snipe Scanner, Meme Signal Oracle, Rug Radar, Auto-Liquidity Watcher, MemeCoin Tracker, and BLOBSY Analytics. These tools will help traders make better decisions."
    },
    {
      question: "Is BLOBSY audited?",
      answer: "We are committed to security and transparency. Our smart contract will undergo thorough auditing before launch, and the audit report will be made available to the community."
    },
    {
      question: "How can I join the BLOBSY community?",
      answer: "You can join our community through our social media channels including Twitter, Telegram, and Discord. Follow us for the latest updates and announcements."
    },
    {
      question: "What's the total supply of BLOBSY tokens?",
      answer: "The total supply of BLOBSY tokens is 1,000,000,000 tokens. The exact tokenomics and distribution will be detailed in our whitepaper."
    },
    {
      question: "Are there any fees for trading BLOBSY?",
      answer: "Standard network fees apply when trading BLOBSY tokens, just like any other ERC-20 token on the Ethereum network. These fees go to network validators, not to our team."
    },
    {
      question: "How can I get support if I have issues?",
      answer: "You can reach out to our support team through our social media channels or email us directly. We're committed to helping our community members with any questions or issues."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Find answers to the most common questions about BLOBSY and our ecosystem.
              </p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <motion.div
                        className="px-6 pb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <a
                  href="mailto:support@blobsy.com"
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Contact Support
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
} 