
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <div 
      className="service-card animate-on-scroll"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="mb-4 p-4 rounded-full bg-agency-purple/10 inline-block text-agency-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-agency-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-agency-purple hover:text-agency-blue transition-colors font-medium"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
