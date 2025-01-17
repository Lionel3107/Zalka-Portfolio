import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, Droplets, Sun, Leaf } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Sustainable Irrigation System",
      description: "Implemented water-efficient irrigation solutions reducing water usage by 40%",
      icon: Droplets,
      category: "water-management",
      tags: ["Water Conservation", "Smart Technology", "Sustainability"],
      image: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4"
    },
    {
      title: "Organic Farming Initiative",
      description: "Led transition to organic farming practices across 500 acres",
      icon: Leaf,
      category: "organic-farming",
      tags: ["Organic", "Soil Health", "Biodiversity"],
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
    },
    {
      title: "Solar-Powered Farm",
      description: "Integrated renewable energy solutions in agricultural operations",
      icon: Sun,
      category: "renewable-energy",
      tags: ["Solar Energy", "Sustainability", "Innovation"],
      image: "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects & Impact
        </motion.h2>

        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'water-management', 'organic-farming', 'renewable-energy'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-forest text-white' 
                  : 'bg-sage/20 text-forest hover:bg-sage/30'
              }`}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-wheat-50 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-forest mb-3">
                  {project.title}
                </h3>
                <p className="text-brown mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-sage/20 text-forest rounded-full text-sm"
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

export default Projects;