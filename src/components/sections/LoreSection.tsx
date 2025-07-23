import { motion } from 'framer-motion';
import { Zap, Moon, Dna, Sparkles, BookOpen, Users } from 'lucide-react';

export const LoreSection = () => {
  const loreCards = [
    {
      title: "The Discovery",
      description: "Deep in the Solana trenches, Blobsy discovered the chaotic world of meme coin degeneracy. Lost in the noise of countless launches, rugs, and narrative shifts, he realized he needed something more—a way to see through the chaos.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      delay: 0.1
    },
    {
      title: "The Vision",
      description: "Blobsy envisioned NarrativeScope—a comprehensive intelligence system that could read the entire degen ecosystem in real-time. Not just tracking prices, but understanding the psychology, narratives, and patterns that drive the chaos.",
      icon: Moon,
      color: "from-blue-400 to-purple-500",
      delay: 0.2
    },
    {
      title: "The Awakening",
      description: "With NarrativeScope, Blobsy gained 'god mode' vision into the meme coin market. He could see which narratives were dominating, predict rotation patterns, and identify optimal entry/exit windows that individual traders miss in the chaos.",
      icon: Dna,
      color: "from-green-400 to-teal-500",
      delay: 0.3
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="lore" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
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
            <BookOpen className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">The Story</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            The <span className="gradient-text">NarrativeScope</span> Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every great tool has a story. This is the tale of how Blobsy discovered the need for comprehensive market intelligence in the chaotic world of Solana meme coins.
          </p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {loreCards.map((card) => (
            <motion.div
              key={card.title}
              className="group relative"
              variants={itemVariants}
              transition={{ delay: card.delay }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full"
                variants={cardHover}
                whileHover="whileHover"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Enhanced Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blob-yellow transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blob-yellow to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Community Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blob-yellow/10 to-yellow-500/10 rounded-2xl p-8 border border-blob-yellow/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 bg-blob-yellow rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-8 h-8 text-black" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              Join the Intelligence Network
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the NarrativeScope story. Connect with fellow traders, share insights, and help shape the future of meme coin market intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://x.com/BL0BSY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Follow on X</span>
              </motion.a>
              

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 