import { useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function Contact() {
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
    <div>
      <h1 className="text-4xl font-bold mb-12">Contact</h1>
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
    </div>
  );
} 