import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkCreatures from '../effects/SpiderWebCursor';

const HeroSection = () => {
  return (
    <section className="hero-container h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-blue via-agency-blue/90 to-agency-purple/80 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1573164713988-8665321e3e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center z-[-1]"></div>
      
      {/* Network Creatures Effect */}
      <NetworkCreatures />
      
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
            Elevate Your Social Media Presence
          </span>
          <h1 className="text-white font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Boost Your Brand's <span className="text-agency-light-purple">Online Presence</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We help businesses grow their audience, increase engagement, and drive conversions through strategic social media marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <ChevronRight className="text-white rotate-90" size={20} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
