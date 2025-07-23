import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const AppsSection = () => {
  const apps = [
    {
      icon: '📱',
      badge: 'Mobile',
      title: 'Fast, Secure, Global',
      subtitle: 'Internet eSIM for Home & Travel',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      icon: '🌐',
      badge: 'DNS',
      title: 'Easy-to-remember address',
      subtitle: 'Your wallet or website can be easily found in the TON network.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white'
    },
    {
      icon: '⭐',
      badge: 'Tribute',
      title: 'Monetize your audience',
      subtitle: 'Earn from subscriptions and donations to your community.',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      icon: '💎',
      badge: 'FRAGMENT',
      title: 'Buy Telegram Premium',
      subtitle: 'Use your crypto wallet to pay for subscriptions for you & friends.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white'
    },
    {
      icon: '💕',
      badge: 'TON Dating',
      title: 'Find a match',
      subtitle: 'Private dating community for the crypto generation.',
      bgColor: 'bg-gray-900',
      textColor: 'text-white'
    },
    {
      icon: '🎨',
      badge: 'Getgems',
      title: 'Unique collectibles',
      subtitle: 'Explore, buy and sell collectibles used in games and services.',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const cardHover = {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore apps and services
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="link" className="text-blue-500 hover:text-blue-600 font-medium">
              Explore all ecosystem →
            </Button>
          </motion.div>
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {apps.map((app, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="whileHover"
              className="group"
            >
              <Card 
                className={`${app.bgColor} ${app.textColor} border-0 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden`}
                {...cardHover}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <motion.span 
                        className="text-2xl mr-3"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {app.icon}
                      </motion.span>
                      <span className="text-sm font-medium opacity-80">{app.badge}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blob-yellow transition-colors duration-200">
                      {app.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      {app.subtitle}
                    </p>
                  </div>

                  {/* Mock App Screenshot */}
                  <motion.div 
                    className="bg-white/10 rounded-lg p-4 mt-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white/20 rounded-lg h-32 flex items-center justify-center">
                      <span className="text-4xl opacity-50">{app.icon}</span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};