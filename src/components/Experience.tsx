import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, Award, 
  Lightbulb, Cog,
  TestTube // Replacing Flask with TestTube
} from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Solar-Powered Water Pump System",
      description: "Designed and implemented a sustainable water pumping solution for rural communities",
      icon: Lightbulb,
      tags: ["Renewable Energy", "Fluid Mechanics", "CAD Design"],
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d"
    },
    {
      title: "Automated Manufacturing Process",
      description: "Developed an automated system for precision parts manufacturing",
      icon: Cog,
      tags: ["Automation", "Process Control", "Industrial Design"],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7"
    },
    {
      title: "Thermal Efficiency Analysis",
      description: "Conducted research on improving industrial heating system efficiency",
      icon: TestTube, // Using TestTube instead of Flask
      tags: ["Thermodynamics", "Data Analysis", "Energy Efficiency"],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7"

    }

  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Experience & Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;