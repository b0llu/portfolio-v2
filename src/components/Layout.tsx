import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-8 max-w-3xl hidden md:block">
        <div className="flex justify-start space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              currentPath === '/' ? 'border-white' : 'border-transparent'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/experience" 
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              currentPath === '/experience' ? 'border-white' : 'border-transparent'
            }`}
          >
            Experience
          </Link>
          <Link 
            to="/projects" 
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              currentPath === '/projects' ? 'border-white' : 'border-transparent'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              currentPath === '/blog' ? 'border-white' : 'border-transparent'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-gray-300 transition-colors pb-1 border-b-2 ${
              currentPath === '/contact' ? 'border-white' : 'border-transparent'
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