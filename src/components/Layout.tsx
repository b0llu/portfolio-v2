import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import ThemeToggler from './ThemeToggler';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark flex flex-col transition-colors duration-200">
      <ThemeToggler />
      
      {/* Header with Navigation */}
      <header className="container mx-auto px-4 py-4 max-w-3xl">
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="flex justify-start space-x-8">
            <Link 
              to="/" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/about' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              About
            </Link>
            <Link 
              to="/experience" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/experience' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              Experience
            </Link>
            <Link 
              to="/projects" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/projects' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/blog' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`pb-1 border-b-2 transition-colors ${
                currentPath === '/contact' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16 pt-12 max-w-3xl flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 