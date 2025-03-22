
import { Users, Camera } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Users size={24} />,
      title: 'Social Media Management',
      description: 'Strategic planning, content creation, and community engagement to grow your brand\'s presence.'
    },
    {
      icon: <Camera size={24} />,
      title: 'Product Photo and Videography',
      description: 'Professional product photography and video content that showcases your offerings in the best light.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-agency-purple font-semibold mb-2 inline-block">Our Services</span>
          <h2 className="text-agency-blue mb-6 animate-on-scroll">Comprehensive Social Media Solutions</h2>
          <p className="text-gray-600 animate-on-scroll">
            We offer specialized services to elevate your brand's social media presence and visual content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
