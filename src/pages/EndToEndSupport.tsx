import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Workflow, 
  ClipboardCheck, 
  Lightbulb, 
  ArrowRight,
  CheckCircle2,
  Users2,
  Target,
  RefreshCw,
  Clock,
  Award,
  FileCheck,
  Presentation,
  BarChart,
  HeartPulse,
  Layers
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function EndToEndSupport() {
  const supportPhases = [
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Comprehensive Consultation and Assessment",
      description: "Our end-to-end service begins with a deep dive into understanding your school's current landscape. Through detailed consultations, assessments, and needs analysis, we gain a thorough understanding of your school's challenges, aspirations, and resources.",
      highlights: [
        "In-depth stakeholder interviews",
        "Comprehensive needs assessment",
        "Data-driven analysis",
        "Resource evaluation"
      ]
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Tailored Strategy Development",
      description: "Once we've gathered the necessary insights, we develop a customized strategy that aligns with your school's objectives. Whether it's enhancing academic programs, improving operational efficiency, or transforming the school culture, our strategies are designed with your specific goals in mind.",
      highlights: [
        "Custom solution design",
        "Actionable implementation plans",
        "Resource optimization",
        "Scalable frameworks"
      ]
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Seamless Implementation",
      description: "We don't just create plans; we make sure they come to life. Our team works closely with your school's leadership, teachers, and staff to implement solutions effectively and seamlessly. We provide hands-on support during the execution phase.",
      highlights: [
        "Coordinated resource deployment",
        "Staff training and development",
        "Change management support",
        "Milestone tracking"
      ]
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Ongoing Monitoring and Evaluation",
      description: "Once implementation is underway, we continue to provide support and monitoring to ensure that the strategies are delivering the desired results. Through regular check-ins, data collection, and feedback loops, we evaluate the impact of the changes.",
      highlights: [
        "Performance metrics tracking",
        "Regular progress reviews",
        "Feedback collection systems",
        "Continuous improvement cycles"
      ]
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Sustaining Success Over Time",
      description: "Our end-to-end support doesn't stop after implementation. We believe that true success is sustained over time. As your trusted partner, we offer long-term follow-up to help you maintain and enhance the progress made.",
      highlights: [
        "Strategy refinement",
        "New initiative integration",
        "Ongoing professional development",
        "Long-term partnership"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Presentation className="w-12 h-12" />,
      title: "Expertise at Every Stage",
      description: "Our team of experts provides guidance and hands-on support at every step, ensuring no detail is overlooked or left to chance.",
      highlight: "Comprehensive Guidance"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Comprehensive Solutions",
      description: "We offer holistic support, covering all areas of school operations and student development to deliver well-rounded solutions.",
      highlight: "Full-Spectrum Support"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Seamless Transition",
      description: "Our implementation process is designed to integrate smoothly into your existing systems, minimizing disruption and ensuring a seamless transition.",
      highlight: "Minimal Disruption"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Sustained Impact",
      description: "We focus not only on achieving short-term goals but also on ensuring that the solutions we implement continue to deliver value in the long term.",
      highlight: "Long-Term Value"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
          alt="End-to-End Support"
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
                End-to-End Support for Your School's Success
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Comprehensive guidance from vision to execution and beyond
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-8 mx-auto">
                <Workflow className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Our Commitment to Your Journey
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                At Anamcara Consulting & Services LLP, we are committed to providing comprehensive, end-to-end support to ensure the successful implementation of every solution we offer. Our approach is designed to guide you through every phase of the process—from initial consultation and planning to execution, monitoring, and long-term sustainability. We don't just offer advice; we stay with you every step of the way to ensure that your school achieves its goals and maximizes its potential.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <HeartPulse className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Your success is our mission - we're with you at every stage of your transformation journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Phases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Our End-to-End Support Process
          </h2>
          <div className="space-y-16">
            {supportPhases.map((phase, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {phase.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">{phase.title}</h3>
                  </div>
                  <p className="text-slate text-lg mb-6">{phase.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent-dark flex-shrink-0" />
                          <span className="text-slate">{highlight}</span>
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Our End-to-End Support?</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Our comprehensive approach delivers exceptional value at every stage of your educational transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-slate mb-6">{benefit.description}</p>
                <div className="pt-4 border-t border-sand">
                  <span className="text-accent-dark font-bold text-lg">{benefit.highlight}</span>
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
                <Users2 className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-slate italic mb-6">
                "By partnering with us, you gain more than just consulting services—you gain a dedicated team committed to supporting your school's journey from start to finish. We work with you to navigate every challenge, celebrate every success, and build a future where your students, staff, and community thrive."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Begin Your Transformation Journey?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Let us support you every step of the way with our comprehensive end-to-end services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
            >
              Start Your Journey
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

export default EndToEndSupport;