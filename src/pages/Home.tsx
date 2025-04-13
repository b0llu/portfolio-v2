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
          <p className="text-gray-600 dark:text-gray-400 mb-16">Software Engineer | Tech Enthusiast | Gamer | Fantasy & Manga Nerd</p>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <img 
              src="https://res.cloudinary.com/dtzklid8v/image/upload/v1744515766/PXL_20230714_081323658_ify78z.jpg?grayscale" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Software Engineer who thrives in full-stack environments, with a strong focus on JavaScript and modern web technologies. I enjoy turning complex challenges into clean, efficient solutions that scale. Whether it's building intuitive front-end experiences or optimizing back-end systems, I bring a thoughtful and practical approach to every project.
            </p>
            <br />
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond the code, I'm a tech enthusiast who's always exploring new tools and trends. I'm also an avid gamer, fantasy novel lover, and manga reader — drawn to rich stories and immersive worlds, whether they're built with code or imagination.
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