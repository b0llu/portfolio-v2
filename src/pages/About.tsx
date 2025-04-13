import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutMe, personalInterests } from '../data/about';

export default function About() {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <div className="space-y-16">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
        className="prose dark:prose-invert max-w-none"
      >
        <h1 className="text-4xl font-bold mb-8 text-text-light dark:text-text-dark">About Me</h1>
        
        {/* Hero Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-16">
            <img 
                src="/assets/about.jpg" 
                alt="About me" 
                className="w-full h-full object-cover"
            />
        </div>
        
        {/* Introduction */}
        <div className="space-y-6 mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.introduction.main}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.introduction.specialization}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.introduction.background}
          </p>
        </div>

        {/* The Journey */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-medium text-text-light dark:text-text-dark">The Journey</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.journey.story}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.journey.passion}
          </p>
        </div>

        {/* Beyond the Code */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-text-light dark:text-text-dark mb-8">Beyond the Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(personalInterests).map((interest, index) => (
              <div 
                key={index} 
                className="bg-gray-100 dark:bg-white/5 p-6 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-white/10"
              >
                <h3 className="text-xl font-medium mb-3 text-text-light dark:text-text-dark">
                  {interest.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Thanks for stopping by! I'm always up for meaningful conversations, fresh ideas, and exciting collaborations — especially where tech meets creativity.
        </p>
      </motion.div>
    </div>
  );
} 