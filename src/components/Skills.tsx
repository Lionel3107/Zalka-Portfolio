import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Database, Brain, 
  Settings, Tool, Users
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Technical Skills',
      icon: Settings,
      items: [
        //{ name: 'SolidWork', level: 90 },
        //{ name: 'Finite Element Analysis', level: 85 },
        { name: 'Thermal Analysis', level: 80 },
        { name: '3D Modeling', level: 95 },
      ],
    },
    {
      category: 'Software',
      icon: Code2,
      items: [
        { name: 'SOLIDWORKS', level: 95 },
        { name: 'ANSYS', level: 85 },
        { name: 'AutoCAD', level: 90 },
        { name: 'MATLAB', level: 80 },
      ],
    },
    {
      category: 'Soft Skills',
      icon: Users,
      items: [
        { name: 'Project Management', level: 85 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Technical Writing', level: 85 },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <skillGroup.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: skill.level / 100 } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;