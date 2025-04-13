import { experiences } from '../data/experience';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={contentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-12">Experience</h1>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-1">{experience.role}</h3>
              <div className="text-gray-400 mb-4">
                <span>{experience.company}</span>
                <span className="mx-2">•</span>
                <span>{experience.period}</span>
                {experience.location && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{experience.location}</span>
                  </>
                )}
              </div>
              <ul className="space-y-2 text-gray-300">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {experience.projects && (
                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-200">Key Projects</h4>
                  {experience.projects.map((project, i) => (
                    <div key={i} className="bg-white/5 rounded p-4">
                      <h5 className="font-medium mb-1">{project.name}</h5>
                      <p className="text-sm text-gray-400 mb-2">{project.period}</p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {project.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 