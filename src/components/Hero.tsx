import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden leaf-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/90 to-forest/70">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                rotate: 360,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {i % 2 === 0 ? 
                <Leaf className="text-sage" size={20 + Math.random() * 40} /> :
                <Sprout className="text-sage" size={20 + Math.random() * 40} />
              }
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-wheat"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Zalka MARE
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-sage">
              Agricultural Specialist & Sustainability Expert
            </h2>
            <p className="text-xl text-wheat-50">
              Cultivating sustainable solutions for tomorrow's agriculture
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="src/images/WhatsApp Image 2025-01-07 at 12.51.10.jpeg"
                alt="Sarah Anderson"
                className="rounded-full w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-sage opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;