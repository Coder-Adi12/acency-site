
interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  quote: string;
  index: number;
}

const TestimonialCard = ({ name, company, image, quote, index }: TestimonialCardProps) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl testimonial-card animate-on-scroll"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-white/70 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-white/80">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
