import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, TrendingUp, Users, ArrowRight, 
  Star, Target, Zap, ShieldCheck
} from 'lucide-react';

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const team = [
    {
      name: 'Arya Kadam',
      position: 'Founder & CEO',
      image: '/images/Arya.jpg',
      bio: 'With over 4 months of experience in Instagram handling, Arya is the founder of this company.'
    },
    {
      name: 'Aditya Borhade',
      position: 'Manager',
      image: '/images/Aditya.jpg',
      bio: 'Aditya is good at managing our whole team and plays an important role managing accounts.'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Orbit-X-Studios began with a mission to help businesses thrive in the digital age.'
    }
  ];

  const values = [
    {
      icon: <Star size={24} />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from strategy to execution.'
    },
    {
      icon: <Target size={24} />,
      title: 'Results-Focused',
      description: 'We measure our success by the tangible results we deliver for our clients.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to bring innovative solutions to our clients.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our client relationships.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-agency-blue text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
                About Orbit-X-Studios
              </span>
              <h1 className="text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We're Passionate About <span className="text-agency-light-purple">Social Media Excellence</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Founded in 2015, Orbit-X-Studios has been helping businesses transform their social media presence with strategic, creative, and data-driven approaches that deliver real results.
              </p>
              <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-2">
                  <Award className="text-agency-light-purple" size={24} />
                  <span className="text-white font-medium">Award-winning agency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-agency-light-purple" size={24} />
                  <span className="text-white font-medium">Data-driven results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-agency-light-purple" size={24} />
                  <span className="text-white font-medium">Expert team</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-10 -left-6 h-full w-full bg-agency-purple/30 rounded-2xl -z-10 transform -translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-10 animate-on-scroll">
              <h3 className="text-2xl font-semibold text-agency-blue mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with strategic social media solutions that drive meaningful connections, engagement, and growth. We believe in creating authentic digital experiences that resonate with audiences and deliver measurable results.
              </p>
            </div>
            <div className="glass-card p-10 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-agency-blue mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted social media partner for forward-thinking businesses worldwide, setting the standard for innovation, creativity, and results in digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-agency-purple font-semibold mb-2 inline-block animate-on-scroll">Our Core Values</span>
            <h2 className="text-agency-blue mb-6 animate-on-scroll">What Drives Our Work</h2>
            <p className="text-gray-600 animate-on-scroll">
              These fundamental principles guide our approach to client relationships, strategy development, and service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-on-scroll"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 p-4 rounded-full bg-agency-purple/10 inline-block text-agency-purple">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-agency-blue">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-agency-purple font-semibold mb-2 inline-block animate-on-scroll">Meet Our Team</span>
            <h2 className="text-agency-blue mb-6 animate-on-scroll">The Experts Behind Our Success</h2>
            <p className="text-gray-600 animate-on-scroll">
              Our diverse team of specialists brings together expertise across social media, design, content, and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-on-scroll"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-agency-blue">{member.name}</h3>
                  <p className="text-agency-purple mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-agency-purple font-semibold mb-2 inline-block animate-on-scroll">Our Journey</span>
            <h2 className="text-agency-blue mb-6 animate-on-scroll">Key Milestones & Achievements</h2>
            <p className="text-gray-600 animate-on-scroll">
              From our humble beginnings to becoming an industry leader, here's how our journey has unfolded.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-agency-purple/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-agency-purple font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-agency-blue mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-agency-purple hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agency-blue to-agency-purple text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="mb-6">Ready to Work With Our Team?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help your business achieve its social media goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link to="/services" className="bg-transparent text-white border border-white hover:bg-white/10 rounded-lg px-6 py-3 font-medium transition-all duration-200">
                Explore Our Services <ArrowRight className="inline ml-1" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
