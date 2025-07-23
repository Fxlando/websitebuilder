import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Use',
      links: [
        'Get a Wallet',
        'Get Toncoin',
        'Stake',
        'Accept Payments',
        'Apps & Services',
        'Domains',
        'USDT on TON',
        'Cross-Chain Bridges'
      ]
    },
    {
      title: 'Learn',
      links: [
        'TON Concept',
        'Decentralized Network',
        'Roadmap',
        'TonStat',
        'History of Mining',
        'Toncoin',
        'Validators',
        'White Paper',
        'Brand Assets',
        'Sustainability'
      ]
    },
    {
      title: 'For Builders',
      links: [
        'TON Builders Portal',
        'Getting Started',
        'Documentation',
        'Telegram Mini Apps',
        'Dev Forum',
        'Dev Chats',
        'Bug Bounty',
        'Find a Job',
        'Find a Talent'
      ]
    },
    {
      title: 'Use Cases',
      links: [
        'GameFi',
        'Memecoins & Tokens',
        'Community Tools',
        'TON Sites'
      ]
    },
    {
      title: 'Community',
      links: [
        'Communities',
        'Blog',
        'Careers'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Language & Social Section */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Language Notice */}
            <div className="flex items-center mb-4 md:mb-0">
              <motion.div
                className="w-6 h-6 bg-gray-300 rounded-full mr-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-sm text-gray-600">
                The language of your region is automatically used. Change to English?
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {['Li', 'Tg', 'Gh', 'Tw', 'Yt', 'Rd'].map((social, index) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-600"
                    asChild
                  >
                    <a href="#" className="flex items-center justify-center">
                      <span className="text-sm">{social}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cookie Notice */}
        <motion.div
          className="mt-8 p-4 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start">
            <motion.div
              className="w-6 h-6 bg-blue-500 rounded-full mr-3 mt-1 flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-xs">⚡</span>
            </motion.div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                By using our site you agree to our use of cookies to deliver a better site experience.
                You can disable cookies in the browser settings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}; 