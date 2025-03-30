export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
}

export const personalProjects: Project[] = [
  {
    name: "Portfolio v2",
    description: "My personal portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/b0llu/portfolio-v2",
    highlights: [
      "Implemented smooth animations and transitions using Framer Motion",
      "Built with TypeScript for better type safety and developer experience",
      "Utilized Tailwind CSS for responsive and modern design",
      "Created reusable components for better maintainability"
    ]
  }
  // Add more projects here
]; 