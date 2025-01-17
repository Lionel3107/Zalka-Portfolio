import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Sprout } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      year: '2020-Present',
      title: 'Lead Agricultural Consultant',
      organization: 'Sustainable Farming Initiative',
      icon: Sprout,
    },
    {
      year: '2018',
      title: 'MSc in Agricultural Science',
      organization: 'Agricultural University',
      icon: GraduationCap,
    },
    {
      year: '2019',
      title: 'Sustainability Excellence Award',
      organization: 'World Agriculture Forum',
      icon: Award,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-wheat-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-forest leading-relaxed mb-6">
              With over a decade of experience in sustainable agriculture and crop management,
              I specialize in developing innovative farming solutions that balance productivity
              with environmental stewardship.
            </p>
            <p className="text-lg text-forest leading-relaxed">
              My work focuses on implementing regenerative agricultural practices,
              optimizing resource utilization, and promoting sustainable farming
              methods across diverse agricultural landscapes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-forest" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-sage font-semibold">{achievement.year}</p>
                  <h3 className="text-lg font-semibold text-forest">{achievement.title}</h3>
                  <p className="text-brown">{achievement.organization}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;