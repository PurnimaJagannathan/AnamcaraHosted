import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Award, 
  Brain, 
  BarChart3, 
  Lightbulb,
  GraduationCap,
  Globe2,
  CheckCircle2,
  ArrowRight,
  FileText,
  Compass,
  LineChart
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function CareerCounselling() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Career Counselling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80">
          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
            <Link to="/" className="inline-flex items-center text-white hover:text-sand mb-4 sm:mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4 sm:mb-6">
              <HeroLogo className="h-16 sm:h-20 md:h-24 mr-4" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              Integrating Career Guidance for Lasting Impact
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Empowering students to make informed decisions about their future through personalized guidance and support.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-sand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-slate leading-relaxed">
              Career Counseling for Students is an essential service that helps guide young individuals in making informed decisions about their future careers. By providing personalized advice, resources, and support, career counseling helps students identify their strengths, explore potential career paths, and make educational choices that align with their long-term goals. It empowers students to understand themselves better, manage their academic choices, and navigate the complexities of the job market.
            </p>
          </div>
        </div>
      </section>

      {/* iDreamCareer Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <Compass className="w-12 sm:w-16 h-12 sm:h-16 text-secondary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-4 sm:mb-6">
                Discover Your Perfect Career Path with iDreamCareer
              </h2>
              <p className="text-base sm:text-lg text-slate mb-6 sm:mb-8 text-center">
                Through our partnership with iDreamCareer, we offer comprehensive psychometric assessments that help students understand their aptitudes, interests, and personality traits. Our scientific approach combines multiple assessment tools to provide detailed insights into career compatibility.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                  <FileText className="w-8 h-8 text-secondary mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">Scientific Assessment</h3>
                  <p className="text-sm sm:text-base text-slate">Comprehensive psychometric tests based on global standards</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                  <Brain className="w-8 h-8 text-secondary mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">Detailed Analysis</h3>
                  <p className="text-sm sm:text-base text-slate">In-depth evaluation of abilities, interests, and personality</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                  <LineChart className="w-8 h-8 text-secondary mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">Career Mapping</h3>
                  <p className="text-sm sm:text-base text-slate">Personalized career recommendations based on assessment results</p>
                </div>
              </div>
              <div className="text-center">
                <a 
                  href="https://anamcaraconsulting.idreamcareer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-colors group"
                >
                  Take Your Career Assessment
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-primary/5 rounded-xl">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">1M+</h3>
              <p className="text-slate">Students Impacted</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-secondary/5 rounded-xl">
              <Award className="w-10 sm:w-12 h-10 sm:h-12 text-secondary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">75+</h3>
              <p className="text-slate">NPS Score</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-accent/10 rounded-xl">
              <Brain className="w-10 sm:w-12 h-10 sm:h-12 text-accent-dark mx-auto mb-3 sm:mb-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">2.2M</h3>
              <p className="text-slate">Psychometric Assessments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-primary-light/20 to-accent-light/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12">Our Unique Approach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8" />,
                title: "Multilingual Platform",
                description: "India's only multilingual career navigation platform, making guidance accessible to all"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Proven Track Record",
                description: "13 years of excellence with 99% partner continuation rate"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Technology-Led Guidance",
                description: "Leveraging technology to empower students, parents, schools, and counsellors"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "NEP Aligned",
                description: "Working with forward-thinking schools to enhance career guidance capacities"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "High-Impact Programs",
                description: "Unique programs helping underserved students pursue thriving careers"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Comprehensive Assessment",
                description: "India's highest administered psychometric career assessment tool"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-secondary mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Student Futures?</h2>
          <p className="text-base sm:text-lg text-sand-light mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the transformative power of our career guidance programs and help your students thrive in their chosen paths.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CareerCounselling;