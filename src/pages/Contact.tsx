import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize the intersection observer
  useIntersectionObserver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map the field names to state properties
    const fieldMapping: Record<string, string> = {
      user_name: 'name',
      user_email: 'email',
      user_phone: 'phone',
      user_company: 'company',
      user_service: 'service',
      message: 'message'
    };
    
    const stateKey = fieldMapping[name] || name;
    setFormState(prev => ({ ...prev, [stateKey]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formState);
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-agency-blue text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
              Get In Touch
            </span>
            <h1 className="text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let&apos;s Discuss Your <span className="text-agency-light-purple">Social Media Goals</span>
            </h1>
            <p className="text-white/80 text-lg mb-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Reach out to start a conversation about how we can help elevate your brand&apos;s social media presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl animate-on-scroll">
              <h2 className="text-agency-blue mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-agency-blue mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-agency-purple font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="user_phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="user_company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service You&apos;re Interested In
                    </label>
                    <select
                      id="service"
                      name="user_service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Product Video and Photography">Product Video and Photography</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-primary w-full flex items-center justify-center ${loading ? 'opacity-80' : ''}`}
                  >
                    {loading ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-on-scroll">
                <h2 className="text-agency-blue mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to get started? Reach out through any of the channels below, and our team will be happy to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-on-scroll">
                    <div className="p-3 rounded-full bg-agency-purple/10 text-agency-purple">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-agency-blue mb-1">Office Location</h3>
                      <p className="text-gray-600">Akurdi Railway Station, Pune</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                    <div className="p-3 rounded-full bg-agency-purple/10 text-agency-purple">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-agency-blue mb-1">Email Address</h3>
                      <a href="mailto:adityaborhade70@gmail.com" className="text-agency-purple hover:underline">
                        adityaborhade70@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                    <div className="p-3 rounded-full bg-agency-purple/10 text-agency-purple">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-agency-blue mb-1">Phone Number</h3>
                      <a href="tel:+919689536646" className="text-agency-purple hover:underline">
                        +91 9689536646
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="glass-card p-8 rounded-2xl animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold text-agency-blue mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.9603396318156!2d73.77129661489762!3d18.65037998733238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e691d21fa1%3A0x8de2abb7dd90e4ab!2sAkurdi%20Railway%20Station!5e0!3m2!1sen!2sin!4v1648032079248!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Akurdi Railway Station, Pune, Maharashtra"
                />
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
              Find quick answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: 'How quickly can you start working on my social media?',
                answer: 'Once we\'ve completed the onboarding process, which typically takes 1-2 weeks, we can begin implementing your social media strategy.'
              },
              {
                question: 'Do I need to be active on all social media platforms?',
                answer: 'No, we recommend focusing on the platforms where your target audience is most active. We\'ll help you identify which platforms will deliver the best ROI for your business.'
              },
              {
                question: 'What information do you need from me to get started?',
                answer: 'We\'ll need access to your existing social accounts, brand guidelines, any existing marketing materials, and information about your target audience and business goals.'
              },
              {
                question: 'How long does it take to see results from social media marketing?',
                answer: 'While some improvements can be seen within weeks, meaningful results typically take 3-6 months of consistent strategy implementation.'
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
            <h2 className="mb-6">Let&apos;s Start Growing Your Social Media Presence</h2>
            <p className="text-white/80 text-lg mb-8">
              Ready to take your brand to the next level? Get in touch today to schedule your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919689536646" className="btn-secondary">
                Call Us: +91 9689536646
              </a>
              <a href="mailto:adityaborhade70@gmail.com" className="bg-transparent text-white border border-white hover:bg-white/10 rounded-lg px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center">
                <Mail className="mr-2" size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
