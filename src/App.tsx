import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, FileText, Mail, Send } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { BlogCard } from './components/BlogCard';
import { TabNavigation } from './components/TabNavigation';
import { personalProjects } from './data/projects';
import { blogPosts } from './data/blog';
import { experiences } from './data/experience';
import { ExperienceCard } from './components/ExperienceCard';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);

  const tabs = [
    { id: 'about', label: 'About & Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tabContentVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            key="about"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
          >
            <div className="max-w-4xl mx-auto pb-12">
              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-8 text-[#818CF8]">About Me</h2>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I am a Software Engineer with nearly 3 years of experience specializing in full-stack development. My expertise lies in building scalable and high-performance web applications using React, Vue, and Node.js, with a strong focus on frontend architecture, microfrontends, and performance optimization.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed mt-4">
                    I have worked on projects spanning SaaS platforms, AI-driven solutions, and enterprise applications, implementing GraphQL, WebSockets, and cloud deployments to enhance user experiences. Passionate about clean code, reusable component design, and innovative problem-solving, I continuously seek to optimize workflows and push the boundaries of web development.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-12 text-[#818CF8]">Experience</h2>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#818CF8]">Personal Projects</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {personalProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'blog':
        return (
          <motion.div
            key="blog"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#818CF8]">Blog</h2>
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#818CF8]">Get in Touch</h2>
              
              <div className="grid md:grid-cols-[1fr,1.5fr] gap-12">
                {/* Social Links */}
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6 text-[#818CF8]">Connect With Me</h3>
                  <div className="space-y-6">
                    <a href="https://github.com/b0llu" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center text-slate-300 hover:text-[#818CF8] transition-colors">
                      <Github className="mr-4" size={24} />
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-slate-400">Check out my code</div>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/the-best-dhruv/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-[#818CF8] transition-colors">
                      <Linkedin className="mr-4" size={24} />
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-slate-400">Let's connect professionally</div>
                      </div>
                    </a>
                    <a href="https://x.com/TheBestDhruv" target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-[#818CF8] transition-colors">
                      <Twitter className="mr-4" size={24} />
                      <div>
                        <div className="font-medium">Twitter</div>
                        <div className="text-sm text-slate-400">Follow my updates</div>
                      </div>
                    </a>
                    <a href="mailto:samantdhruv@gmail.com"
                      className="flex items-center text-slate-300 hover:text-[#818CF8] transition-colors">
                      <Mail className="mr-4" size={24} />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-slate-400">samantdhruv@gmail.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6 text-[#818CF8]">Send a Message</h3>
                  <form className="space-y-6" onSubmit={sendEmail} ref={form}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-slate-300 focus:outline-none focus:border-[#818CF8] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-slate-300 focus:outline-none focus:border-[#818CF8] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-slate-300 focus:outline-none focus:border-[#818CF8] transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    {emailStatus.type && (
                      <div className={`text-sm ${emailStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {emailStatus.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-[#818CF8] text-white font-medium hover:bg-[#818CF8]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-slate-100">
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
            <motion.div
              className="mb-12 relative"
              variants={fadeInUp}
            >
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-2 border-[#818CF8]/30 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="https://res.cloudinary.com/dtzklid8v/image/upload/v1743331317/file_0000000030605230991360ada617c074_conversation_id_67e6528d-4a90-8000-9bfe-6d1735a47392_message_id_e579870a-d2b3-49c8-850a-a53a2c2c2f8c_daikwe.png"
                  alt="Dhruv Samant"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.h1 className="text-6xl font-bold mb-6 text-[#818CF8]" variants={fadeInUp}>
              Dhruv Samant
            </motion.h1>
            <motion.p className="text-2xl text-slate-300 mb-12" variants={fadeInUp}>
              Software Engineer
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6" 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="https://github.com/b0llu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-zinc-900/50 backdrop-blur-sm text-slate-300 hover:text-[#818CF8] hover:bg-zinc-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2" size={20} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/the-best-dhruv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-zinc-900/50 backdrop-blur-sm text-slate-300 hover:text-[#818CF8] hover:bg-zinc-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="mr-2" size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://x.com/TheBestDhruv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-zinc-900/50 backdrop-blur-sm text-slate-300 hover:text-[#818CF8] hover:bg-zinc-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="mr-2" size={20} />
                <span>Twitter</span>
              </motion.a>
              <motion.a
                href="https://docs.google.com/document/d/1HXfKbZ52zuRsSFb9GyCIbhx-GTUJ9uIOlagt5a7KJFw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-zinc-900/50 backdrop-blur-sm text-slate-300 hover:text-[#818CF8] hover:bg-zinc-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="mr-2" size={20} />
                <span>Resume</span>
              </motion.a>
              <motion.a
                href="mailto:samantdhruv@gmail.com"
                className="flex items-center px-6 py-3 rounded-lg bg-zinc-900/50 backdrop-blur-sm text-slate-300 hover:text-[#818CF8] hover:bg-zinc-900/80 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2" size={20} />
                <span>Email</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Section with Tabs */}
        <motion.section
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="py-20 px-4"
        >
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <div className="relative min-h-[800px]">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;