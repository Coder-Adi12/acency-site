
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'starvishwa',
      company: 'New and celebrity interviews',
      image: '/images/starvishwa.jpg',
      quote: 'Orbit-x-studios transformed our online presence. Their strategic approach to content creation and community management led to a 150% increase in engagement.'
    },
    {
      name: 'Sambhav',
      company: 'DYPCOE club',
      image: '/images/sambhav.jpg',
      quote: 'Working with Orbit-x-studios has increased our reach for more than 1 milliom.'
    },
   
  ];

  return (
    <section className="py-20 bg-agency-blue text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-agency-light-purple font-semibold mb-2 inline-block animate-on-scroll">
            Client Success Stories
          </span>
          <h2 className="text-white mb-6 animate-on-scroll">What Our Clients Say</h2>
          <p className="text-white/80 animate-on-scroll">
            Hear from the businesses that have transformed their social media presence with our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              image={testimonial.image}
              quote={testimonial.quote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
