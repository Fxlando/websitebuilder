import { motion } from 'framer-motion';
import { Package, Star, ArrowRight } from 'lucide-react';

export const ProductsSection = () => {
  const products = [
    {
      title: "Basic Plan",
      description: "Perfect for small businesses getting started",
      price: "$29",
      period: "/month",
      features: [
        "Core features included",
        "Email support",
        "Basic analytics",
        "5 team members"
      ],
      popular: false,
      delay: 0.1
    },
    {
      title: "Professional Plan",
      description: "Ideal for growing businesses",
      price: "$79",
      period: "/month",
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced analytics",
        "Unlimited team members",
        "Custom integrations"
      ],
      popular: true,
      delay: 0.2
    },
    {
      title: "Enterprise Plan",
      description: "For large organizations with complex needs",
      price: "$199",
      period: "/month",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom solutions",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
      delay: 0.3
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

  return (
    <section id="products" className="py-20 bg-white">
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
            <Package className="w-4 h-4 text-blob-yellow" />
            <span className="text-sm font-semibold text-blob-yellow">Pricing Plans</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Choose Your{' '}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to grow with your business. Start small and scale up as you need.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              className={`relative ${product.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              variants={itemVariants}
              transition={{ delay: product.delay }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: product.delay + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blob-yellow text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Product Card */}
              <motion.div
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  product.popular 
                    ? 'border-blob-yellow shadow-xl' 
                    : 'border-gray-100 hover:border-blob-yellow/50'
                } transition-all duration-300 h-full`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Product Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-black">
                      {product.price}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {product.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: product.delay + 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 bg-blob-yellow rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 ${
                    product.popular
                      ? 'bg-blob-yellow text-black hover:bg-blob-yellow-accent'
                      : 'bg-gray-100 text-gray-700 hover:bg-blob-yellow hover:text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let&apos;s talk about your specific requirements.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Sales</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}; 