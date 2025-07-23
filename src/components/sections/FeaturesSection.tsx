import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Rocket, Target, AlertTriangle, Eye, BarChart3 } from 'lucide-react';
import { TiltedCard } from '../ui/TiltedCard';
import { Card, CardContent } from '../ui/Card';

export const FeaturesSection = () => {
  const features = [
    {
      title: "Live Narrative Tracker",
      description: "Meta Analysis identifies which narrative is currently dominating (AI agents, cult coins, animal seasons, food coins, gaming tokens) and tracks narrative lifecycle stages with rotation prediction.",
      icon: Target,
      status: "Live",
      color: "from-yellow-400 to-orange-500",
      delay: 0.1
    },
    {
      title: "Market Condition Dashboard",
      description: "Degen Liquidity Flow tracks total available 'ape money' flowing between meme coins vs flowing out to majors/stablecoins with risk appetite gauge.",
      icon: BarChart3,
      status: "Live",
      color: "from-blue-400 to-purple-500",
      delay: 0.2
    },
    {
      title: "Ecosystem Health Monitor",
      description: "New Launch Velocity tracks rate of new token deployments and quality indicators with whale activity patterns and social engagement quality analysis.",
      icon: Eye,
      status: "Live",
      color: "from-green-400 to-teal-500",
      delay: 0.3
    },
    {
      title: "Real-Time Intelligence Feed",
      description: "Narrative Strength Score (1-10) with market phase detection (Bull-degen, Bear-degen, Rotation, Dead-cat) and optimal entry/exit timing windows.",
      icon: Zap,
      status: "Live",
      color: "from-red-400 to-pink-500",
      delay: 0.4
    },
    {
      title: "Sub-Narrative Detection",
      description: "Finds emerging micro-trends within larger narratives (like 'depressed animals' within animal season, or 'retro gaming' within gaming tokens).",
      icon: TrendingUp,
      status: "Live",
      color: "from-purple-400 to-indigo-500",
      delay: 0.5
    },
    {
      title: "Whale Activity Patterns",
      description: "Identifies which known degen whales are active, what they're buying, and their current rotation patterns across the Solana ecosystem.",
      icon: Shield,
      status: "Live",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.6
    }
  ];

  const cardHover = {
    whileHover: { y: -8, scale: 1.02 },
    transition: { duration: 0.2 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-blob-yellow rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blob-yellow/10 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">Trading Tools</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            NarrativeScope{' '}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive Solana meme coin market intelligence tool that reads the entire degen ecosystem in real-time, giving you "god mode" vision into the chaotic world of Solana meme coin degeneracy.
          </p>
        </motion.div>

        {/* Trading Tools Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group relative"
              variants={itemVariants}
              transition={{ delay: feature.delay }}
            >
              <TiltedCard intensity={8}>
                <motion.div
                  variants={cardHover}
                  whileHover="whileHover"
                >
                  <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        className="bg-blob-yellow text-black px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.status}
                      </motion.span>
                    </div>

                    <CardContent className="p-8">
                      {/* Enhanced Icon */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blob-yellow transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blob-yellow to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Card>
                </motion.div>
              </TiltedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blob-yellow/10 to-yellow-500/10 rounded-2xl p-8 border border-blob-yellow/20">
            <motion.div
              className="w-16 h-16 bg-blob-yellow rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="w-8 h-8 text-black" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready for God Mode Vision?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the Blob community and get access to NarrativeScope intelligence. See patterns that individual traders miss in the chaos of Solana meme coin degeneracy.
            </p>
            
            <motion.a
              href="https://t.me/blobtoken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blob-yellow text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Telegram</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 