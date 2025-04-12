import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/experience';
import { personalProjects } from '../data/projects';
import { blogPosts } from '../data/blog';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <header>
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2">Dhruv Samant</h1>
          <p className="text-gray-400 mb-16">Software Engineer & Digital Craftsman</p>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <img 
              src="https://picsum.photos/800/400?grayscale" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Software Engineer who thrives at the intersection of code and creativity. 
              When I'm not crafting elegant solutions or optimizing performance, you'll find me 
              immersed in the latest gaming adventures. I have a knack for turning complex problems 
              into elegant solutions, and I'm constantly exploring emerging technologies to push the 
              boundaries of what's possible in software development.
            </p>
            
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">About Me</h2>
        <div className="prose prose-invert">
          <p className="text-gray-300 leading-relaxed">
            As a Software Engineer with a passion for innovation, I blend technical expertise with 
            creative problem-solving. My journey in software development is driven by a desire to 
            create impactful solutions that make a difference. Beyond coding, I'm an avid gamer 
            who believes that the strategic thinking and quick decision-making skills from gaming 
            translate perfectly into the world of software development.
          </p>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Link to="/experience" className="text-gray-400 hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="space-y-8">
          {experiences.slice(0, 2).map((experience, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-1">{experience.role}</h3>
              <div className="text-gray-400 mb-4">
                <span>{experience.company}</span>
                <span className="mx-2">•</span>
                <span>{experience.period}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {experience.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {personalProjects.slice(0, 2).map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-white/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Blog</h2>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="space-y-8">
          {blogPosts.slice(0, 2).map((post, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-sm bg-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 