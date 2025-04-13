import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-2 text-text-light dark:text-text-dark">Dhruv Samant</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Full-stack Software Engineer | Tech Enthusiast | Gamer | Fantasy Novels & Manga Reader</p>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <img 
              src="/assets/main.jpg" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm Dhruv Samant, a full-stack Software Engineer passionate about building modern web experiences with JavaScript and beyond. I love transforming real-world problems into scalable, user-friendly solutions that actually make a difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              From crafting sleek UIs to fine-tuning backend logic, I bring both creativity and precision to every project. I'm all about clean architecture, thoughtful design, and shipping things that work.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              When I'm not coding, you'll probably find me deep into a strategy game, flipping through a fantasy novel, or geeking out over the latest dev tools and tech trends.
            </p>
            
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-2 rounded bg-gray-200 dark:bg-white/10 text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
} 