import { CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUsSection = () => {
  const features = [
    'Tailored strategies for your specific business goals',
    'Dedicated team of social media specialists',
    'Transparent reporting and measurable results',
    'Cutting-edge tools and industry best practices',
    'Consistent brand voice across all platforms'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-agency-purple font-semibold mb-2 inline-block animate-on-scroll">Why Choose Us</span>
            <h2 className="text-agency-blue mb-6 animate-on-scroll">Results-Driven Social Media Marketing</h2>
            <p className="text-gray-600 mb-8 animate-on-scroll">
              We combine creative strategies with data-driven insights to deliver measurable results for your business.
            </p>
            
            <div className="space-y-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-on-scroll"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCheck className="text-agency-purple flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 animate-on-scroll">
              <Link to="/about" className="btn-primary">
                Learn About Our Approach
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -right-6 h-full w-full bg-agency-purple/20 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
