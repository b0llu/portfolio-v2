export default function Footer() {
  return (
    <footer className="auto">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Top border that only spans content width */}
        <div className="border-t border-gray-200 dark:border-white/10 transition-colors"></div>
    

        {/* Bottom row with copyright and social links */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark gap-4 md:gap-0">
          <div>© {new Date().getFullYear()} Dhruv Samant. All rights reserved.</div>
          <div className="flex gap-6">
            <a
              href="https://github.com/b0llu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/the-best-dhruv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/TheBestDhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light dark:hover:text-accent-dark"
            >
              X/Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 