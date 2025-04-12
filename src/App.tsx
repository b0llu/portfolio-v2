import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { personalProjects, Project } from './data/projects';
import { blogPosts, BlogPost } from './data/blog';
import { experiences } from './data/experience';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailStatus({ type: null, message: '' });

    try {
      const formData = {
        name: form.current?.querySelector<HTMLInputElement>('[name="user_name"]')?.value || '',
        message: form.current?.querySelector<HTMLTextAreaElement>('[name="message"]')?.value || '',
        email: form.current?.querySelector<HTMLInputElement>('[name="user_email"]')?.value || '',
        time: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setEmailStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        if (form.current) {
          form.current.reset();
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof EmailJSResponseStatus 
        ? error.text 
        : 'Failed to send message. Please try again.';
      setEmailStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-start space-x-8">
          <a 
            href="#" 
            onClick={() => setActiveSection('home')}
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              activeSection === 'home' ? 'border-white' : 'border-transparent'
            }`}
          >
            Home
          </a>
          <a 
            href="#projects" 
            onClick={() => setActiveSection('projects')}
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              activeSection === 'projects' ? 'border-white' : 'border-transparent'
            }`}
          >
            Projects
          </a>
          <a 
            href="#blog" 
            onClick={() => setActiveSection('blog')}
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              activeSection === 'blog' ? 'border-white' : 'border-transparent'
            }`}
          >
            Blog
          </a>
          <a 
            href="#tags" 
            onClick={() => setActiveSection('tags')}
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              activeSection === 'tags' ? 'border-white' : 'border-transparent'
            }`}
          >
            Tags
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 max-w-3xl">
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
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Content Sections */}
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-24">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">About Me</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed">
                As a Software Engineer with a passion for innovation, I blend technical expertise with 
                creative problem-solving. My journey in software development is driven by a desire to 
                create impactful solutions that make a difference. Beyond coding, I'm an avid gamer 
                who believes that the strategic thinking and quick decision-making skills from gaming 
                translate perfectly into the world of software development. I'm always excited to 
                explore new technologies and frameworks, constantly pushing myself to learn and grow 
                in this ever-evolving field.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
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
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {personalProjects.map((project: Project, index: number) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, i: number) => (
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
          </section>

          {/* Blog Section */}
          <section id="blog">
            <h2 className="text-2xl font-bold mb-8">Blog</h2>
            <div className="space-y-8">
              {blogPosts.map((post: BlogPost, index: number) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-2">{post.date}</p>
                  <p className="text-gray-300 mb-4">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-sm bg-white/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Social Links */}
              <div className="bg-white/5 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-6">Connect</h3>
                <div className="space-y-6">
                  <a 
                    href="https://github.com/b0llu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center group"
                  >
                    <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                      <Github size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">GitHub</div>
                      <div className="text-sm text-gray-400">Follow my work</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/the-best-dhruv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                      <Linkedin size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">LinkedIn</div>
                      <div className="text-sm text-gray-400">Let's connect professionally</div>
                    </div>
                  </a>
                  <a 
                    href="https://x.com/TheBestDhruv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                      <Twitter size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">Twitter</div>
                      <div className="text-sm text-gray-400">Follow my updates</div>
                    </div>
                  </a>
                  <a 
                    href="mailto:samantdhruv@gmail.com"
                    className="flex items-center group"
                  >
                    <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                      <Mail size={20} className="text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">Email</div>
                      <div className="text-sm text-gray-400">samantdhruv@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form className="bg-white/5 rounded-lg p-6 h-full flex flex-col" onSubmit={sendEmail} ref={form}>
                <div className="space-y-4 flex-grow">
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white/40 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  {emailStatus.type && (
                    <div className={`text-sm ${emailStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {emailStatus.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-2 bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded mt-4"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 inline" size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;