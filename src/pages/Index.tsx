import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  // Initialize the intersection observer
  useIntersectionObserver();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
