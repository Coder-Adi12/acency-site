
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-agency-blue to-agency-purple text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-white/80 text-lg mb-8">
            Get started with a free consultation to discuss your goals and how we can help you achieve them.
          </p>
          <Link to="/contact" className="btn-secondary">
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
