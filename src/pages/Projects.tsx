import { Github } from 'lucide-react';
import { personalProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={contentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-white/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 