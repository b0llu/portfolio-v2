import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, FileText, Mail, ChevronUp, ChevronDown } from 'lucide-react';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const experiences = [
    {
  "company": "Copods - Partners in Your Digital Journey",
  "role": "Software Engineer",
  "period": "Aug 2022 - Present · 2 yrs 7 mos",
  "location": "Pune, Maharashtra, India",
  "highlights": [
    "Developed dynamic UIs with Vue and React, enhancing user experiences across various projects.",
    "Created a library of web components with Stencil to enhance UI development efficiency.",
    "Deployed micro frontends via cloud storage and content delivery networks, utilizing AWS S3 and CloudFront for optimal performance.",
    "Innovated a JSON-driven UI framework with React to boost interactivity and responsiveness.",
    "Developed AI-driven projects to convert documents into structured learning materials and to generate multimedia content.",
    "Conducted end-to-end testing with Cypress, ensuring platform reliability and functionality.",
    "Led the development of key features across projects, guiding teams to successful implementations."
  ],
  "projects": [
    {
      "name": "Environmental Sustainability Platform",
      "period": "October 2022 – February 2023",
      "highlights": [
        "Built interactive dashboards using React, Highcharts, and AGGrid to support real-time sustainability analytics.",
        "Integrated AGGrid for advanced dataset management, enhancing sorting, filtering, and searching functionalities.",
        "Developed isolated, reusable Storybook components to maintain UI consistency across the platform.",
        "Optimized rendering performance with React.memo and React callbacks, improving load times and responsiveness."
      ]
    },
    {
      "name": "B2B SaaS Growth Integration Platform",
      "period": "April 2023 – September 2023",
      "highlights": [
        "Implemented a scalable microfrontend architecture using Apollo GraphQL, React Router, and Webpack Module Federation.",
        "Built a JSON-driven headless UI for real-time adaptability, enabling backend-defined UI changes.",
        "Developed a reusable StencilJS component library to ensure consistency and flexibility in UI design.",
        "Optimized large JSON state management with chunked rendering for smooth user interactions.",
        "Engineered a high-performance rendering solution for React Flow workflows to ensure seamless real-time updates."
      ]
    },
    {
      "name": "AgriTech Platform",
      "period": "October 2023 – April 2024",
      "highlights": [
        "Designed and implemented robust GraphQL APIs for secure and efficient data exchanges.",
        "Integrated third-party regulatory software and external services to enhance platform compliance and capabilities.",
        "Implemented jsPDF with AutoTable for automated, formatted PDF report generation.",
        "Created an error logging system using Discord webhooks for real-time developer notifications.",
        "Developed delivery service API integration for seamless logistics operations."
      ]
    },
    {
      "name": "Enterprise Mobile Cloud Solution",
      "period": "July 2024 – Present",
      "highlights": [
        "Developed a comprehensive design system for the entire product using Storybook.",
        "Built flow diagrams for network visualization using React Flow, improving data clarity.",
        "Enhanced table functionalities with TanStack Table (React Table) and Material-UI for advanced data presentation.",
        "Integrated Google Maps API for interactive radio coverage area visualization.",
        "Optimized performance with React.memo and React callbacks to reduce latency and enhance UX."
      ]
    }
  ]
}

  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-slate-100">

      {/* Main content container */}
      <div>
        {/* Hero Section */}
        <motion.section
          id="hero"
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-4 text-center z-10">
            <motion.h1 className="text-6xl font-bold mb-6 text-indigo-400" variants={fadeInUp}>
              Dhruv Samant
            </motion.h1>
            <motion.p className="text-2xl text-slate-300 mb-8" variants={fadeInUp}>
              Software Engineer
            </motion.p>
            <motion.div className="flex justify-center space-x-6" variants={fadeInUp}>
              <SocialLink href="https://github.com/b0llu" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/the-best-dhruv/" icon={<Linkedin />} />
              <SocialLink href="https://x.com/TheBestDhruv" icon={<Twitter />} />
              <SocialLink href="https://docs.google.com/document/d/1HXfKbZ52zuRsSFb9GyCIbhx-GTUJ9uIOlagt5a7KJFw/edit?usp=sharing" icon={<FileText />} />
              <SocialLink href="mailto:samantdhruv@gmail.com" icon={<Mail />} />
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-indigo-400">About Me</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a Software Engineer with nearly 3 years of experience specializing in full-stack development. My expertise lies in building scalable and high-performance web applications using React, Vue, and Node.js, with a strong focus on frontend architecture, microfrontends, and performance optimization. I have worked on projects spanning SaaS platforms, AI-driven solutions, and enterprise applications, implementing GraphQL, WebSockets, and cloud deployments to enhance user experiences. Passionate about clean code, reusable component design, and innovative problem-solving, I continuously seek to optimize workflows and push the boundaries of web development.
            </p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-indigo-400">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-indigo-400">Get In Touch</h2>
            <p className="text-lg text-slate-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <motion.div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/b0llu" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/the-best-dhruv/" icon={<Linkedin />} />
              <SocialLink href="https://x.com/TheBestDhruv" icon={<Twitter />} />
              <SocialLink href="https://docs.google.com/document/d/1HXfKbZ52zuRsSFb9GyCIbhx-GTUJ9uIOlagt5a7KJFw/edit?usp=sharing" icon={<FileText />} />
              <SocialLink href="mailto:samantdhruv@gmail.com" icon={<Mail />} />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-indigo-400 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  projects?: {
    name: string;
    period: string;
    highlights: string[];
  }[];
};

function ExperienceCard({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      className="bg-card-gradient backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-indigo-400/30 transition-colors"
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
          className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition"
        >
          {expanded ? "Hide Projects" : "Show Projects"}
          {expanded ? <ChevronUp className="ml-2" size={18} /> : <ChevronDown className="ml-2" size={18} />}
        </button>
      )}
      {expanded && (
        <div className="mt-4 space-y-4">
          {experience.projects?.map((project: { name: string; period: string; highlights: string[] }, index: number) => (
            <div key={index} className="p-4 bg-zinc-900 rounded-lg">
              <h4 className="text-lg font-semibold text-indigo-400">{project.name}</h4>
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

export default App;