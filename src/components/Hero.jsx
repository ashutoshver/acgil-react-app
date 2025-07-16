import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full bg-white"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%'],
              backgroundSize: ['200%', '200%']
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #ffffff, #e0e7ff, #ffffff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Innovating Solutions for Tomorrow
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering Businesses with Cutting-Edge Technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div 
        className="absolute top-20 right-20 w-12 h-12 rounded-full bg-white opacity-20"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;