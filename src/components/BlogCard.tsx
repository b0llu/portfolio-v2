import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      className="bg-card-gradient backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-[#818CF8]/30 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-4 mb-4 text-slate-400">
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        <span>•</span>
        <span className="flex items-center">
          <Clock size={16} className="mr-1" />
          {post.readTime}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-slate-100">{post.title}</h3>
      <p className="text-slate-300 mb-4">{post.summary}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.a
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-[#818CF8] hover:text-indigo-300 transition-colors"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        Read More
        <ArrowRight size={16} className="ml-2" />
      </motion.a>
    </motion.div>
  );
} 