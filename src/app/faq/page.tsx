'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What is BLOBSY?",
      answer: "BLOBSY is a meme coin built on Solana that represents a community-driven project focused on creating trading tools and fostering a strong community of traders and enthusiasts."
    },
    {
      question: "How can I buy BLOBSY tokens?",
      answer: "You can buy BLOBSY tokens through decentralized exchanges (DEXs) on the Solana network, such as Raydium. Make sure to have SOL in your wallet for transaction fees."
    },
    {
      question: "What trading tools are you developing?",
      answer: "We're developing several tools including a Snipe Scanner, Meme Signal Oracle, Rug Radar, Auto-Liquidity Watcher, MemeCoin Tracker, and BLOBSY Analytics. These tools will help traders make informed decisions."
    },
    {
      question: "When will the trading tools be available?",
      answer: "Our trading tools are currently in development. We'll announce their release dates on our social media channels. Join our community to stay updated on tool releases and early access opportunities."
    },
    {
      question: "How can I join the BLOBSY community?",
      answer: "You can join our community by following us on X (Twitter), joining our Telegram group, or participating in our Discord server. Links to all our social channels are available in the footer."
    },
    {
      question: "Is BLOBSY audited?",
      answer: "We are committed to transparency and security. Our smart contracts will undergo thorough auditing before launch. Audit reports will be made available to the community."
    },
    {
      question: "What makes BLOBSY different from other meme coins?",
      answer: "BLOBSY stands out by focusing on building practical trading tools and fostering a community of informed traders. We're not just another meme coin - we're building a comprehensive trading ecosystem."
    },
    {
      question: "How can I stay updated on BLOBSY news?",
      answer: "The best way to stay updated is to follow us on X (Twitter), join our Telegram group, and sign up for our newsletter. We regularly post updates about development progress, tool releases, and community events."
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
            <h1 className="text-2xl font-bold text-gray-900">FAQ</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about BLOBSY and our trading tools.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
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
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Reach out to our community or contact us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@blobsy.com"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>Contact Support</span>
              </a>
              
              <a
                href="https://t.me/blobsycommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                <span>Join Telegram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 