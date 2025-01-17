import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-wheat-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-forest mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-sage rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent bg-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-forest mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-sage rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-forest mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-sage rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent bg-white"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-forest text-white py-3 px-6 rounded-lg hover:bg-forest/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-forest mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:zalkamare@gmail.com"
                  className="flex items-center text-brown hover:text-forest transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  zalkamare@gmail.com                </a>
                <a
                  href="https://linkedin.com/in/sarahanderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-brown hover:text-forest transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  linkedin.com/in/Zalka Mare
                </a>
                <div className="flex items-center text-brown">
                  <MapPin className="w-5 h-5 mr-3" />
                  Agricultural Research Center, California
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;