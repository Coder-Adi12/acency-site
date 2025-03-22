
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agency-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-agency-light-purple">
              Orbit-X-Studios
            </h3>
            <p className="text-gray-300 max-w-xs">
              Elevating your brand's social media presence with strategic solutions that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon text-white/80 hover:text-agency-light-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon text-white/80 hover:text-agency-light-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon text-white/80 hover:text-agency-light-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon text-white/80 hover:text-agency-light-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-agency-light-purple transition-colors">
                  Product Photo and Videography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-agency-light-purple flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">Akurdi Railway Station, Pune</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-agency-light-purple flex-shrink-0" size={18} />
                <span className="text-gray-300">+91 9689536646</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-agency-light-purple flex-shrink-0" size={18} />
                <span className="text-gray-300">adityaborhade70@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Orbit-X-Studios. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
