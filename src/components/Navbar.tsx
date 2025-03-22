import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'py-3 bg-white/95 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-purple">
                Orbit-X-Studios
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={`nav-link ${isLinkActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isLinkActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`nav-link ${isLinkActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/contact" className={`nav-link ${isLinkActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
            <Link to="/contact" className="btn-primary ml-4">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 animate-fade-in bg-white rounded-lg shadow-md">
            <div className="flex flex-col space-y-2 px-4">
              <Link 
                to="/" 
                className={`nav-link py-3 ${isLinkActive('/') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link py-3 ${isLinkActive('/about') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`nav-link py-3 ${isLinkActive('/services') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link py-3 ${isLinkActive('/contact') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center mt-2 mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
