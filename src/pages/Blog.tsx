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
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
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
    </motion.div>
  );
} 