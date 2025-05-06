import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Building2, GraduationCap, Users, ClipboardCheck, ArrowRight, BookCheck, School, UserCheck, Trophy, Mail, Phone, MapPin, Target, Workflow, Lightbulb, Award, CheckCircle2, Users2, Briefcase, Globe2, Menu, X, HeartPulse, Cpu, Headset as VrHeadset, Cloud, Notebook as Robot, Compass 
} from 'lucide-react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img 
              src="/images/logo home.png"
              alt="Anamcara Logo" 
              className="h-8 sm:h-10"
            />
            <div className="ml-2">
              <p className="text-secondary font-semibold text-xs sm:text-sm">Anamcara Consulting and Services LLP</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate hover:text-secondary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="bg-white border-t border-sand">
            <ul className="py-2">
              {['About', 'Services', 'Why Us', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-slate hover:bg-sand-light hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/images/logo home.png"
                alt="Anamcara Logo" 
                className="h-12"
              />
              <div className="ml-3">
                <p className="text-secondary font-semibold">Anamcara Consulting and Services LLP</p>
              </div>
            </div>
            <ul className="flex space-x-8">
              {['About', 'Services', 'Why Us', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center pt-16 sm:pt-20 lg:pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-secondary/70"></div>
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center md:text-left">
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              Transforming Education Through Innovation
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-white mb-6 sm:mb-8 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              End-to-end educational consulting solutions that empower institutions to shape the future of learning
            </p>
            <button 
              onClick={scrollToServices}
              className="bg-secondary hover:bg-secondary-dark text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors text-sm md:text-base shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-sand-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-6 sm:mb-8 md:mb-16">About Us</h2>
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-16">
            <p className="text-sm sm:text-base md:text-lg text-slate">
              Founded by education visionaries Santosh and Sindhu, Anamcara brings decades of combined experience in educational excellence. Our mission is to transform educational institutions through innovative solutions and comprehensive support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Santosh's profile */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow p-6 sm:p-8">
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-secondary shadow-lg mb-4">
                  <img
                    src="/images/santosh-blacksuit.png"
                    alt="P N Santosh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary">P N Santosh</h3>
                  <p className="text-accent font-medium">Founding Director</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate mb-4 sm:mb-6">
                A distinguished professional with over 22 years of experience in management and leadership, P.N. Santosh combines deep expertise in human behaviour with strategic business acumen. His journey from academia to corporate leadership has shaped his unique approach to educational consulting.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 text-slate">
                  <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">Former Head of Sales at Tata ClassEdge Ltd.</span>
                </div>
                <div className="flex items-center gap-3 text-slate">
                  <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">Assistant Professor at Osmania University & JNTU</span>
                </div>
                <div className="flex items-center gap-3 text-slate">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">National Corporate Workshop Leader</span>
                </div>
              </div>
              {/* Books Section */}
              <div className="bg-sand-light rounded-lg p-4">
                <h4 className="text-base sm:text-lg font-semibold text-secondary mb-3">Published Books</h4>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="https://www.amazon.in/Lead-without-Title-towards-Leadership/dp/B0C3DJPVKG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-dark hover:text-secondary transition-colors flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium text-sm sm:text-base">To Lead Without a Title</span>
                    </a>
                    <p className="text-xs sm:text-sm text-slate mt-1">
                      Explores leadership beyond titles and positions
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.amazon.in/Adapting-AI-Era-SANTOSH-PN/dp/9358474327"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-dark hover:text-secondary transition-colors flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium text-sm sm:text-base">Adapting to the AI Era: Build Your ARK for Success</span>
                    </a>
                    <p className="text-xs sm:text-sm text-slate mt-1">
                      Strategies for success in the age of AI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sindhu's Profile */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow p-6 sm:p-8">
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-secondary shadow-lg mb-4">
                  <img
                    src="/images/sindhu2.png"
                    alt="K M Sindhu"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary">K M Sindhu</h3>
                  <p className="text-accent font-medium">Founding Partner</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate mb-4 sm:mb-6">
                A senior HR Professional with 16 years of experience as an HR Generalist & key Leader in leading HR Strategic roles across industries like IT Services, FMCG, Telecom & Insurance. A strategic thinker & Thought Leader who influences and advises leaders as a Business Partner.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-slate">
                  <Target className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">Strategic HR Leadership</span>
                </div>
                <div className="flex items-center gap-3 text-slate">
                  <Users2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">Cross-Industry HR Experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate">
                  <HeartPulse className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base">Employee Relations Expert</span>
                </div>
              </div>
              {/* Career Guidance Mission */}
              <div className="bg-sand-light rounded-lg p-4 mt-4 sm:mt-6">
                <h4 className="text-base sm:text-lg font-semibold text-secondary mb-3">Career Guidance Mission</h4>
                <p className="text-sm sm:text-base text-slate">
                  Recognizing the widespread issue of career uncertainty among young adults after seeing firsthand how many young job seekers struggle with unclear career paths, created a drive to focus on providing early career guidance and career development for young aspirants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-6 sm:mb-8 md:mb-16">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Building2 className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "IT Infrastructure",
                description: "Comprehensive IT solutions tailored for educational institutions",
                link: "/services/it-infrastructure"
              },
              {
                icon: <BookOpen className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Education Curriculum",
                description: "Modern curriculum development and implementation services",
                link: "/services/curriculum"
              },
              {
                icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Teacher Training",
                description: "Professional development programs for educators",
                link: "/services/teacher-training"
              },
              {
                icon: <UserCheck className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Career Counselling",
                description: "Student guidance and career planning services for schools",
                link: "/services/career-counselling"
              },
              {
                icon: <ClipboardCheck className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "CBSE Certification",
                description: "Support for CBSE affiliation and certification process",
                link: "/services/cbse-support"
              },
              {
                icon: <School className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Support Services",
                description: "Ongoing support and maintenance services for schools",
                link: "/services/support-services"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-light/20 to-accent-light/30 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-accent mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-secondary/10 rounded-lg text-secondary hover:bg-secondary/20 transition-all duration-300 font-medium text-xs sm:text-sm md:text-base group"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">Why Choose Us?</h2>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto">
              We bring unparalleled expertise and a proven track record of transforming educational institutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Target className="w-8 sm:w-10 h-8 sm:h-10" />,
                title: "Personalized",
                description: "Designed specifically for your institution's needs",
                link: "/personalized-approach"
              },
              {
                icon: <Workflow className="w-8 sm:w-10 h-8 sm:h-10" />,
                title: "End-to-End Support",
                description: "Comprehensive guidance from vision to execution",
                link: "/end-to-end-support"
              },
              {
                icon: <Users2 className="w-8 sm:w-10 h-8 sm:h-10" />,
                title: "Expert Guidance",
                description: "Professional support at every step of your journey",
                link: "/expert-guidance"
              },
              {
                icon: <Lightbulb className="w-8 sm:w-10 h-8 sm:h-10" />,
                title: "Innovation Focus",
                description: "Future-ready solutions for sustainable growth",
                link: "/innovation-focus"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white/95 shadow-lg p-6 sm:p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-secondary mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate mb-4">{item.description}</p>
                <div className="pt-3 sm:pt-4 border-t border-sand flex justify-between items-center">
                  <Link 
                    to={item.link}
                    className="inline-flex items-center text-secondary hover:text-accent transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="blog" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-6 sm:mb-8 md:mb-16">Thought Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                  alt="Future of Education Technology"
                  className="w-full h-36 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="bg-secondary/10 p-1.5 rounded">
                    <Cpu className="w-3 sm:w-4 h-3 sm:h-4 text-secondary" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate">Education Technology</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 group-hover:text-accent transition-colors">
                  Future of Education Technology
                </h3>
                <p className="text-sm sm:text-base text-slate mb-4">
                  Exploring emerging trends in AI, VR, and adaptive learning that are transforming how we teach and learn...
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    to="/blog/future-of-education-technology" 
                    className="text-accent hover:text-accent-dark font-medium inline-flex items-center text-sm sm:text-base"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&q=80"
                  alt="Latest AI Tools for Teachers"
                  className="w-full h-36 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent text-secondary text-xs font-bold px-2 py-1 rounded">
                  New
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="bg-secondary/10 p-1.5 rounded">
                    <Robot className="w-3 sm:w-4 h-3 sm:h-4 text-secondary" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate">AI in Education</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 group-hover:text-accent transition-colors">
                  Latest AI Tools for Teachers
                </h3>
                <p className="text-sm sm:text-base text-slate mb-4">
                  Modern AI tools designed to enhance teaching efficiency, personalize learning, and provide valuable insights...
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    to="/blog/latest-ai-tools-for-teachers" 
                    className="text-accent hover:text-accent-dark font-medium inline-flex items-center text-sm sm:text-base"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Career Counseling Importance"
                  className="w-full h-36 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary text-xs font-bold px-2 py-1 rounded">
                  Latest
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="bg-secondary/10 p-1.5 rounded">
                    <Compass className="w-3 sm:w-4 h-3 sm:h-4 text-secondary" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate">Career Guidance</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 group-hover:text-accent transition-colors">
                 Importance of Career Counseling
                </h3>
                <p className="text-sm sm:text-base text-slate mb-4">
                  Exploring the crucial role of early career guidance in helping students make informed educational choices...
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    to="/blog/career-counseling-importance" 
                    className="text-accent hover:text-accent-dark font-medium inline-flex items-center text-sm sm:text-base"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-light/30 to-accent-light/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="bg-secondary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">Email</h3>
                  <a 
                    href="mailto:contact@anamcaraconsulting.in" 
                    className="text-sm sm:text-base text-slate hover:text-accent transition-colors"
                  >
                    contact@anamcaraconsulting.in
                  </a>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">Phone</h3>
                  <a 
                    href="tel:+918074339021" 
                    className="text-sm sm:text-base text-slate hover:text-accent transition-colors"
                  >
                    (+91) 80743 39021
                  </a>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/10 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-secondary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">Location</h3>
                  <p className="text-sm sm:text-base text-slate">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;