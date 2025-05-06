import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Monitor, 
  Users, 
  Laptop,
  Brain,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  Presentation,
  School,
  Wifi,
  Cpu,
  BookOpen
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroLogo from '../components/HeroLogo';

function IFPDetails() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Infrastructure', path: '/services/it-infrastructure' },
    { label: 'Integrated Flat Panels', path: '/services/ifp' }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Touch Interface",
      description: "Advanced multi-touch capabilities supporting multiple simultaneous users for collaborative learning"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "4K UHD Display",
      description: "Crystal clear UHD 4K resolution with wide 179° viewing angle for optimal visibility"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Cross-Platform Support",
      description: "Android OS compatibility with seamless integration across different platforms"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Real-time Connectivity",
      description: "Instant response and seamless connectivity for interactive learning experiences"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Content Management",
      description: "Centralized learning content management system for organized resource access"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Smart Processing",
      description: "Powerful processing capabilities for smooth operation of educational applications"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Enhanced Learning",
      description: "Interactive displays that engage students and improve understanding",
      highlight: "Better Retention"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Collaborative Teaching",
      description: "Tools that enable group work and interactive lessons",
      highlight: "Team Learning"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Modern Education",
      description: "State-of-the-art technology for contemporary teaching methods",
      highlight: "Future Ready"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/images/IFP1.png"
          alt="Integrated Flat Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80">
          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="flex items-center mb-6">
              <HeroLogo className="h-20 md:h-24 mr-4" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              Integrated Flat Panels (IFP)
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Next-generation interactive displays for immersive learning experiences
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <School className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Transform Your Classroom
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Our Integrated Flat Panels combine cutting-edge AI-enhanced applications with innovative hardware to deliver exceptional educational experiences. These interactive displays revolutionize the way teachers present information and students engage with learning materials.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Presentation className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Trusted by leading educational institutions across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Interactive Display Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/IFP1.png"
                alt="IFP Display Setup"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Display Technology</h3>
                  <p className="text-sand-light">4K UHD resolution with multi-touch capabilities</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/IFP2.jpg"
                alt="Interactive Learning"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Learning</h3>
                  <p className="text-sand-light">Interactive features for enhanced student engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-sand-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/IFP2.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Educational Benefits</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Transform teaching and learning with interactive technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-slate mb-4">{benefit.description}</p>
                <div className="pt-4 border-t border-sand">
                  <span className="text-secondary font-bold text-lg">{benefit.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Classroom?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Experience the future of interactive learning with our state-of-the-art IFP solutions
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default IFPDetails;