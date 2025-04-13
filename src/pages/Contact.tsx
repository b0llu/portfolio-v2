import { useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

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
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={contentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-4xl font-bold mb-12 text-text-light dark:text-text-dark">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Social Links */}
        <div className=" bg-gray-100 dark:bg-white/5 rounded-lg p-6 h-full">
          <h3 className="text-xl font-semibold mb-6 text-text-light dark:text-text-dark">Connect</h3>
          <div className="space-y-6">
            <a 
              href="https://github.com/b0llu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center group"
            >
              <div className="bg-gray-200 dark:bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-gray-300 dark:group-hover:bg-white/20 transition-colors">
                <Github size={20} className="text-text-light dark:text-text-dark" />
              </div>
              <div>
                <div className="font-medium text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">GitHub</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Follow my work</div>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/the-best-dhruv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="bg-gray-200 dark:bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-gray-300 dark:group-hover:bg-white/20 transition-colors">
                <Linkedin size={20} className="text-text-light dark:text-text-dark" />
              </div>
              <div>
                <div className="font-medium text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">LinkedIn</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Let's connect professionally</div>
              </div>
            </a>
            <a 
              href="https://x.com/TheBestDhruv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="bg-gray-200 dark:bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-gray-300 dark:group-hover:bg-white/20 transition-colors">
                <Twitter size={20} className="text-text-light dark:text-text-dark" />
              </div>
              <div>
                <div className="font-medium text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">Twitter</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Follow my updates</div>
              </div>
            </a>
            <a 
              href="mailto:samantdhruv@gmail.com"
              className="flex items-center group"
            >
              <div className="bg-gray-200 dark:bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-gray-300 dark:group-hover:bg-white/20 transition-colors">
                <Mail size={20} className="text-text-light dark:text-text-dark" />
              </div>
              <div>
                <div className="font-medium text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">Email</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">samantdhruv@gmail.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className=" bg-gray-100 dark:bg-white/5 rounded-lg p-6 h-full flex flex-col" onSubmit={sendEmail} ref={form}>
          <div className="space-y-4 flex-grow">
            <div>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark"
                placeholder="Your name"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:outline-none focus:border-accent-light dark:focus:border-accent-dark resize-none"
                placeholder="Your message..."
              />
            </div>
            {emailStatus.type && (
              <div className={`text-sm ${emailStatus.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {emailStatus.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-2 bg-gray-200 dark:bg-white/10 text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded mt-4"
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
    </motion.div>
  );
} 