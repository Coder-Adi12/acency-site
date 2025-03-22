import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, PenTool, Star, Search, 
  CheckCheck, ArrowRight, Instagram, 
  Facebook, Twitter, Youtube, Target, Camera, CheckCircle2
} from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Services = () => {
  // Initialize the intersection observer
  useIntersectionObserver();

  const mainServices = [
    {
      id: 'social-media-management',
      icon: <Users size={32} />,
      title: 'Social Media Management',
      description: 'Comprehensive management of your social media presence across all relevant platforms.',
      features: [
        'Strategic content planning and calendar development',
        'Daily monitoring and community management',
        'Engagement tracking and audience growth strategies',
        'Regular reporting and optimization recommendations',
        'Custom content creation for each platform'
      ],
      platforms: [
        { icon: <Instagram size={20} />, name: 'Instagram' },
        { icon: <Facebook size={20} />, name: 'Facebook' },
        { icon: <Twitter size={20} />, name: 'Twitter' },
        { icon: <Youtube size={20} />, name: 'YouTube' }
      ]
    },
    {
      id: 'product-photography-videography',
      icon: <Camera size={32} />,
      title: 'Product Photography & Videography',
      description: 'Professional product photography and video services to showcase your products in the best light.',
      features: [
        'High-quality product photography with professional lighting',
        'Product video production for social media and websites',
        '360° product views and interactive media',
        'Post-production editing and enhancement',
        'Ready-to-use files optimized for all platforms'
      ],
      contentTypes: [
        'Product Photography', 'Product Videos', 'Lifestyle Shots', 'Detail Close-ups', 'Demo Videos'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-agency-blue text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
              Our Services
            </span>
            <h1 className="text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive <span className="text-agency-light-purple">Social Media Solutions</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              From strategy to execution, we offer end-to-end services designed to elevate your brand&apos;s social media presence and drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <Link 
                key={index} 
                to={`#${service.id}`}
                className="service-card animate-on-scroll group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 p-4 rounded-full bg-agency-purple/10 inline-block text-agency-purple group-hover:bg-agency-purple group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-agency-blue group-hover:text-agency-purple transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="inline-flex items-center text-agency-purple group-hover:translate-x-2 transition-transform duration-300">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={index} 
          id={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                <div className="inline-block p-4 rounded-full bg-agency-purple/10 text-agency-purple mb-6 animate-on-scroll">
                  {service.icon}
                </div>
                <h2 className="text-agency-blue mb-6 animate-on-scroll">{service.title}</h2>
                <p className="text-gray-600 mb-8 animate-on-scroll">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-agency-blue mb-4 animate-on-scroll">What&apos;s Included</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3 animate-on-scroll"
                        style={{ animationDelay: `${0.1 * featureIndex}s` }}
                      >
                        <CheckCheck className="text-agency-purple flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {service.platforms && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-agency-blue mb-4 animate-on-scroll">Platforms</h3>
                    <div className="flex flex-wrap gap-4">
                      {service.platforms.map((platform, platformIndex) => (
                        <div 
                          key={platformIndex}
                          className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm animate-on-scroll"
                          style={{ animationDelay: `${0.1 * platformIndex}s` }}
                        >
                          <span className="text-agency-purple">{platform.icon}</span>
                          <span className="text-gray-700">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {service.contentTypes && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-agency-blue mb-4 animate-on-scroll">Content Types</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.contentTypes.map((type, typeIndex) => (
                        <span 
                          key={typeIndex}
                          className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 animate-on-scroll"
                          style={{ animationDelay: `${0.1 * typeIndex}s` }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-8 animate-on-scroll">
                  <Link to="/contact" className="btn-primary">
                    Inquire About This Service
                  </Link>
                </div>
              </div>
              
              <div className={`relative animate-on-scroll ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                  <img 
                    src={
                      service.id === 'social-media-management' 
                        ? "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        : "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    } 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                </div>
                <div className={`absolute ${index % 2 === 0 ? 'top-10 -right-6' : 'top-10 -left-6'} h-full w-full bg-agency-purple/20 rounded-2xl -z-10 transform ${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'} translate-y-4`}></div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-agency-blue text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-agency-light-purple font-semibold mb-2 inline-block animate-on-scroll">Our Process</span>
            <h2 className="text-white mb-6 animate-on-scroll">How We Work</h2>
            <p className="text-white/80 animate-on-scroll">
              Our proven methodology ensures that every project is executed with precision and delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'We start by understanding your brand, audience, and business objectives.' },
              { title: 'Strategy', description: 'Next, we develop a custom strategy tailored to your specific goals and target audience.' },
              { title: 'Implementation', description: 'We execute the strategy with attention to detail and continuous optimization.' },
              { title: 'Analysis', description: 'We monitor performance, provide detailed reports, and refine our approach based on data.' }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative animate-on-scroll"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 rounded-full bg-agency-purple flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-y-0 z-10">
                    <ArrowRight className="text-agency-light-purple" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Consultation CTA */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="bg-gradient-to-r from-agency-blue to-agency-purple rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 animate-on-scroll">
                <h2 className="mb-4">Custom Solutions for Your Business</h2>
                <p className="text-white/80 mb-0 lg:mb-0 lg:pr-12">
                  We offer tailored packages designed to meet your specific business needs and budget. Contact us for a personalized pricing consultation.
                </p>
              </div>
              <div className="lg:col-span-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Request Pricing Information</h3>
                  <p className="text-white/80 mb-6">
                    Schedule a free consultation to discuss your needs and receive a custom quote.
                  </p>
                  <Link to="/contact" className="btn-secondary w-full text-center block">
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-agency-purple font-semibold mb-2 inline-block animate-on-scroll">FAQ</span>
            <h2 className="text-agency-blue mb-6 animate-on-scroll">Frequently Asked Questions</h2>
            <p className="text-gray-600 animate-on-scroll">
              Find answers to common questions about our services and approach.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: 'How do you measure the success of social media campaigns?',
                answer: 'We track key performance indicators (KPIs) aligned with your business goals, including engagement rates, reach, follower growth, website traffic, lead generation, and conversion metrics. We provide regular reports with detailed analytics and insights.'
              },
              {
                question: 'How often will you post on our social media accounts?',
                answer: 'Posting frequency varies based on your specific strategy and platforms, but typically ranges from 3-5 times per week for most businesses. We\'ll establish an optimal posting schedule based on your audience\'s behavior and platform best practices.'
              },
              {
                question: 'Do you offer month-to-month contracts or require long-term commitments?',
                answer: 'We offer flexible engagement options. While we recommend a minimum 3-month commitment to see meaningful results, we do provide month-to-month options with a 30-day notice period for cancellation.'
              },
              {
                question: 'What type of product photography services do you offer?',
                answer: 'We offer a complete range of product photography services including standard white-background product shots, lifestyle photography, detail close-ups, 360° rotating views, and creative compositions. All images are professionally edited and delivered in formats optimized for your specific needs.'
              },
              {
                question: 'Can you handle both our social media management and product photography needs?',
                answer: 'Absolutely! Our integrated approach allows us to seamlessly handle both services, ensuring consistent brand messaging and visual identity across all platforms. This combined service often leads to more cohesive and effective marketing outcomes.'
              }
            ].map((faq, index) => (
              <div key={index} className="py-6 animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
                <h3 className="text-xl font-semibold text-agency-blue mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agency-blue to-agency-purple text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="mb-6">Ready to Transform Your Social Media?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let&apos;s discuss your goals and create a customized plan to achieve them.
            </p>
            <Link to="/contact" className="btn-secondary">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
