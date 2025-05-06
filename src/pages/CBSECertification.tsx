import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  CheckCircle2,
  FileText,
  BookOpen,
  ClipboardList,
  FileSpreadsheet,
  Building2,
  GraduationCap,
  Target,
  ScrollText,
  Users,
  Award,
  ArrowRight,
  Presentation,
  School
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function CBSECertification() {
  const objectives = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Guiding Through Affiliation",
      description: "Expert advice and step-by-step assistance for schools seeking CBSE affiliation"
    },
    {
      icon: <ScrollText className="w-8 h-8" />,
      title: "Understanding Requirements",
      description: "Help schools comply with CBSE guidelines for infrastructure, faculty, curriculum, and administration"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation Support",
      description: "Ensure proper preparation and submission of all necessary documents"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ongoing Compliance",
      description: "Continued support in maintaining compliance with CBSE rules post-affiliation"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "CBSE Affiliation Guidelines",
      description: "Comprehensive guide with detailed CBSE affiliation requirements",
      highlight: "Complete Reference"
    },
    {
      icon: <ClipboardList className="w-10 h-10" />,
      title: "Application Checklists",
      description: "Detailed checklists ensuring all required documentation is submitted",
      highlight: "100% Coverage"
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10" />,
      title: "Sample Forms",
      description: "Templates for application forms, fee structures, and essential documents",
      highlight: "Ready Templates"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Infrastructure Plans",
      description: "Example infrastructure layouts meeting CBSE requirements",
      highlight: "Visual Guides"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Training Resources",
      description: "Programs for staff development and curriculum alignment",
      highlight: "Expert Training"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Compliance Tools",
      description: "Tools and resources for maintaining ongoing CBSE compliance",
      highlight: "Full Support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&q=80"
          alt="CBSE Certification"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80">
          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
            <Link to="/" className="inline-flex items-center text-white hover:text-sand mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-6">
              <HeroLogo className="h-20 md:h-24 mr-4" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              CBSE Affiliation Support
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Expert guidance and comprehensive support for schools seeking CBSE recognition and accreditation.
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
                Comprehensive CBSE Affiliation Support
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                The CBSE affiliation process requires a detailed understanding of the board's criteria, regulations, and guidelines. Our expert support ensures schools receive comprehensive guidance, resources, and assistance to streamline the application process and maintain compliance with CBSE standards.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Presentation className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Trusted by 100+ schools across India for successful CBSE affiliation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Key Objectives of Our Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{objective.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {objective.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Materials and Resources</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Comprehensive resources and materials to support your CBSE affiliation journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{resource.title}</h3>
                <p className="text-slate mb-4">{resource.description}</p>
                <div className="pt-4 border-t border-sand">
                  <span className="text-secondary font-bold text-lg">{resource.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your CBSE Journey?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Get expert guidance and support for your school's CBSE affiliation process.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CBSECertification;