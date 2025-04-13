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
      {/* Theme Toggler */}
      <ThemeToggler />

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-8 max-w-3xl hidden md:block">
        <div className="flex justify-start space-x-8">
          <Link 
            to="/" 
            className={`pb-1 border-b-2 ${
              currentPath === '/' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/experience" 
            className={`pb-1 border-b-2 ${
              currentPath === '/experience' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
            }`}
          >
            Experience
          </Link>
          <Link 
            to="/projects" 
            className={`pb-1 border-b-2 ${
              currentPath === '/projects' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`pb-1 border-b-2 ${
              currentPath === '/blog' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`pb-1 border-b-2 ${
              currentPath === '/contact' ? 'border-text-light dark:border-text-dark' : 'border-transparent'
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-3xl flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 