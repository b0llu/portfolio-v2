import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-card-gradient backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-[#818CF8]/30 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-2 text-slate-100">{project.name}</h3>
      <p className="text-slate-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
        {project.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <div className="flex space-x-4">
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-400 hover:text-[#818CF8] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            <span>View Code</span>
          </motion.a>
        )}
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-400 hover:text-[#818CF8] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="mr-2" size={20} />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
} 