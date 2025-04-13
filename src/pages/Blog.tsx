import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 20 }}
      animate={contentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-4xl font-bold mb-12 text-text-light dark:text-text-dark">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 dark:bg-white/5 rounded-lg p-6 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{post.title}</h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-sm bg-gray-200 dark:bg-white/10 text-text-light dark:text-text-dark px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 