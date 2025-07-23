import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Inc.",
      content: "This platform transformed our business operations. The efficiency gains are incredible and the support team is outstanding.",
      rating: 5,
      avatar: "SJ",
      delay: 0.1
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "We've seen a 300% increase in productivity since implementing their solutions. Highly recommended for any growing business.",
      rating: 5,
      avatar: "MC",
      delay: 0.2
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GrowthCo",
      content: "The scalability and reliability of their platform is exactly what we needed. Our team loves the intuitive interface.",
      rating: 5,
      avatar: "ER",
      delay: 0.3
    },
    {
      name: "David Thompson",
      role: "Founder, StartupXYZ",
      content: "From day one, this platform has been a game-changer for our startup. The features are exactly what we needed.",
      rating: 5,
      avatar: "DT",
      delay: 0.4
    },
    {
      name: "Lisa Wang",
      role: "VP of Engineering, ScaleTech",
      content: "The technical implementation was seamless and the ongoing support has been exceptional. Great partnership!",
      rating: 5,
      avatar: "LW",
      delay: 0.5
    },
    {
      name: "James Wilson",
      role: "Managing Director, Enterprise Solutions",
      content: "We've tried many platforms, but this one stands out for its reliability and customer service. Excellent choice.",
      rating: 5,
      avatar: "JW",
      delay: 0.6
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-blob-yellow fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <Quote className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">Customer Success</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="group"
              variants={itemVariants}
              transition={{ delay: testimonial.delay }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-8 h-8 text-blob-yellow" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blob-yellow to-blob-yellow-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
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

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </motion.div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blob-yellow/10 to-yellow-500/10 rounded-2xl p-8 border border-blob-yellow/20">
            <h3 className="text-2xl font-bold text-black mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to experience the same success? Start your journey with us today and see the difference for yourself.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-blob-yellow text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 