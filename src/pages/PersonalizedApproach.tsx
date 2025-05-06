import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Target, Users2, ClipboardCheck, BookOpen, Lightbulb, 
  ArrowRight, CheckCircle2, Brain, HeartPulse, BarChart as ChartBar, 
  Workflow, Settings, LineChart, Trophy, Star, Award, Presentation,
  School, Briefcase, GraduationCap
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function PersonalizedApproach() {
  const whyChooseUs = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Expertise",
      description: "Our team consists of seasoned educators and industry experts who bring years of experience in the education sector."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customization",
      description: "We never offer generic solutions; every strategy is designed specifically for your school."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Collaborative Process",
      description: "We work with you, not just for you, ensuring that the solutions we create are embraced and implemented successfully."
    }
  ];

  const approachSteps = [
    {
      icon: <School className="w-10 h-10" />,
      title: "Understanding Your School's Unique Needs",
      description: "We begin by gaining a deep understanding of your school's mission, values, and challenges. Our team works closely with school leaders, teachers, and staff to assess your current situation and identify opportunities for growth.",
      details: [
        "In-depth consultations with stakeholders",
        "Comprehensive surveys and assessments",
        "Data analysis and benchmarking",
        "Context-specific evaluation"
      ]
    },
    {
      icon: <Presentation className="w-10 h-10" />,
      title: "Tailored Solutions for Sustainable Impact",
      description: "We don't offer one-size-fits-all solutions. Each service and strategy we develop is customized to fit the unique needs of your school, taking into account the demographics, resources, and educational goals of your institution.",
      details: [
        "Custom technology implementation plans",
        "Innovative teaching method development",
        "Resource-appropriate strategies",
        "Long-term sustainability focus"
      ]
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Collaborative Partnerships for Success",
      description: "We see ourselves as partners in your school's journey. We believe that collaboration is key to achieving meaningful change. We work side-by-side with your leadership team, educators, and support staff to build capacity and develop actionable solutions.",
      details: [
        "Side-by-side implementation support",
        "Capacity building for staff",
        "Actionable solution development",
        "Ongoing guidance and expertise"
      ]
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Ongoing Engagement and Feedback",
      description: "Our commitment doesn't end with the delivery of a solution. We believe in the power of continuous improvement, and as such, we provide ongoing support, monitoring, and feedback.",
      details: [
        "Regular progress check-ins",
        "Strategy refinement based on results",
        "Continuous improvement cycles",
        "Long-term partnership commitment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Personalized Approach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90">
          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
            <Link to="/" className="inline-flex items-center text-white hover:text-sand mb-8 group">
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
            <div className="flex items-center mb-6">
              <HeroLogo className="h-20 md:h-24 mr-4" />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                Personalized Approach to Educational Excellence
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Crafting tailored solutions that transform schools and empower educators
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-8 mx-auto">
                <Lightbulb className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Personalized Approach to Consulting and Services for Schools
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                At Anamcara Consulting and Services LLP, we understand that every school has its own unique culture, needs, and goals. Our personalized approach to consulting ensures that we craft tailored strategies and solutions that align with your specific objectives, whether you're aiming to enhance student outcomes, improve administrative processes, or foster a positive learning environment.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sand-light rounded-xl p-6 text-center">
                  <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Tailored Solutions</h3>
                  <p className="text-slate text-sm">Customized to your specific needs</p>
                </div>
                <div className="bg-sand-light rounded-xl p-6 text-center">
                  <Target className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Goal-Oriented</h3>
                  <p className="text-slate text-sm">Focused on measurable outcomes</p>
                </div>
                <div className="bg-sand-light rounded-xl p-6 text-center">
                  <Users2 className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Collaborative</h3>
                  <p className="text-slate text-sm">Working together for success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Our Personalized Approach
          </h2>
          <div className="space-y-16">
            {approachSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
                  <p className="text-slate text-lg mb-6">{step.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent-dark flex-shrink-0" />
                          <span className="text-slate">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us?</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Our comprehensive methodology delivers proven results through expertise, customization, and collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate mb-6">{item.description}</p>
                <div className="pt-4 border-t border-sand">
                  <span className="text-accent-dark font-bold text-lg">
                    {index === 0 ? "20+ Years Experience" : 
                     index === 1 ? "100+ Schools Served" : 
                     "95% Success Rate"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <HeartPulse className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-slate italic mb-6">
                "We are passionate about transforming schools through personalized, actionable solutions that make a real difference. Let us help you unlock your school's full potential and build a brighter future for your students, educators, and community."
              </p>
              <footer className="text-secondary font-semibold">
                - Anamcara Consulting Team
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your School?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Let us help you unlock your school's full potential and build a brighter future for your students, educators, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalizedApproach;