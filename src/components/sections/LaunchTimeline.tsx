'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, Calendar, Rocket, Zap } from 'lucide-react';

export const LaunchTimeline = () => {
  const phases = [
    {
      title: "Phase 1: Meme Infection",
      description: "The Blob begins spreading through social media. Community building and meme creation phase. Building the foundation for what's to come.",
      status: "completed",
      date: "Q1 2024",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Phase 2: Awakening",
      description: "Token launch and initial liquidity provision. The Blob officially awakens and begins its journey to revolutionize meme coin trading.",
      status: "current",
      date: "Q2 2024",
      icon: Rocket,
      color: "from-blob-yellow to-yellow-500"
    },
    {
      title: "Phase 3: Tool Deployment",
      description: "Release of advanced trading tools and platform features. Full ecosystem launch with cutting-edge technology for traders.",
      status: "upcoming",
      date: "Q3 2024",
      icon: Calendar,
      color: "from-blue-500 to-purple-500"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Circle className="w-6 h-6 text-blob-yellow" />;
      case 'upcoming':
        return <Clock className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'current':
        return 'border-blob-yellow bg-yellow-50';
      case 'upcoming':
        return 'border-gray-300 bg-gray-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-40 h-40 bg-blob-yellow rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Calendar className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">Roadmap</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Launch <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The journey from meme to trading powerhouse. Follow our progress as we build the future of meme coin trading.
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blob-yellow to-gray-200" />

          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="relative flex items-start mb-12 group"
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Enhanced Timeline Dot */}
              <div className="absolute left-6 transform -translate-x-1/2 z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full border-2 ${getStatusColor(phase.status)} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <phase.icon className="w-6 h-6 text-gray-600" />
                </motion.div>
              </div>

              {/* Enhanced Content Card */}
              <motion.div
                className="ml-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex-1 relative overflow-hidden group"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-black group-hover:text-blob-yellow transition-colors duration-200">
                      {phase.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {phase.date}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  {/* Enhanced Status Badge */}
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                      phase.status === 'current' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {getStatusIcon(phase.status)}
                      <span className="ml-1">
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'current' ? 'In Progress' :
                         'Upcoming'}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blob-yellow to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
              Ready to Join the Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the Blob&apos;s evolution from meme to trading powerhouse. Join our community and stay updated on every milestone.
            </p>
            
            <motion.a
              href="#newsletter"
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Stay Updated</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 