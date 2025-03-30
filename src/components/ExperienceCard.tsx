import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      className="bg-card-gradient backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-[#818CF8]/30 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-2 text-slate-100">{experience.company}</h3>
      <p className="text-xl text-slate-300 mb-2">{experience.role}</p>
      <p className="text-slate-400 mb-4">{experience.period}</p>
      <ul className="list-disc list-inside text-slate-300 space-y-2">
        {experience.highlights.map((highlight: string, i: number) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
      {experience.projects && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center text-[#818CF8] hover:text-indigo-300 transition"
        >
          {expanded ? "Hide Projects" : "Show Projects"}
          {expanded ? <ChevronUp className="ml-2" size={18} /> : <ChevronDown className="ml-2" size={18} />}
        </button>
      )}
      {expanded && (
        <div className="mt-4 space-y-4">
          {experience.projects?.map((project, index) => (
            <div key={index} className="p-4 bg-zinc-900 rounded-lg">
              <h4 className="text-lg font-semibold text-[#818CF8]">{project.name}</h4>
              <p className="text-sm text-slate-400">{project.period}</p>
              <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                {project.highlights.map((highlight: string, i: number) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
} 