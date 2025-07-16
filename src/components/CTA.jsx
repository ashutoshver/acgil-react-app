import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-indigo-600 opacity-95"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's discuss how our solutions can help you achieve your goals and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#4f46e5"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;