import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  BarChart, 
  Briefcase, 
  ArrowRight,
  CheckCircle2,
  Users2,
  Target,
  Award,
  Clock,
  FileText,
  Presentation,
  BookOpen,
  HeartPulse,
  Lightbulb,
  Brain,
  LineChart,
  School
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function ExpertGuidance() {
  const experienceHighlights = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Decades of Experience",
      description: "With 22 years of proven experience, we've encountered a wide array of challenges in the education sector and have successfully helped schools overcome them.",
      highlights: [
        "Extensive industry knowledge",
        "Proven track record",
        "Diverse project experience",
        "Continuous learning"
      ]
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Informed Decision-Making",
      description: "Our experience equips us to provide expert advice based on data-driven insights and industry best practices.",
      highlights: [
        "Evidence-based strategies",
        "Analytical approach",
        "Benchmarking expertise",
        "Trend forecasting"
      ]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "A Trusted Partner",
      description: "Over the years, we have built lasting relationships with schools, making us a trusted and reliable partner for achieving educational excellence.",
      highlights: [
        "Long-term partnerships",
        "Consistent results",
        "Transparent communication",
        "Ethical practices"
      ]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Holistic Solutions",
      description: "We don't just focus on isolated aspects of a school's needs; our broad experience enables us to provide holistic solutions that consider the interconnectedness of various school functions.",
      highlights: [
        "Comprehensive approach",
        "Integrated strategies",
        "Cross-functional expertise",
        "Sustainable solutions"
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: <School className="w-8 h-8" />,
      title: "Educational Leadership",
      description: "Strategic guidance for school administrators and leadership teams"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curriculum Development",
      description: "Modern, effective curriculum design and implementation"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Technology Integration",
      description: "Seamless incorporation of educational technology"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Staff Development",
      description: "Professional growth programs for educators"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Long-term vision and execution roadmaps"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Performance Improvement",
      description: "Data-driven approaches to enhance outcomes"
    }
  ];

  const stats = [
    {
      value: "22+",
      label: "Years Experience",
      icon: <Clock className="w-8 h-8" />
    },
    {
      value: "100+",
      label: "Schools Transformed",
      icon: <School className="w-8 h-8" />
    },
    {
      value: "95%",
      label: "Client Retention",
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Expert Guidance"
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
                Expert Guidance for Educational Excellence
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Decades of experience driving transformative educational outcomes
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
                Why Choose Anamcara Consulting and Services LLP
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                When you partner with us, you gain access to over two decades of expert guidance that will not only help you tackle today's challenges but also position your school for future success. Our deep-rooted experience in the education sector empowers us to provide actionable, effective solutions that ensure your school thrives.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Award className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Trusted by leading educational institutions across India for transformative results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Our Experience Highlights
          </h2>
          <div className="space-y-16">
            {experienceHighlights.map((highlight, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{highlight.title}</h3>
                  <p className="text-slate text-lg mb-6">{highlight.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {highlight.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent-dark flex-shrink-0" />
                          <span className="text-slate">{item}</span>
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

      {/* Areas of Expertise */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{area.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {area.title}
                </h3>
                <p className="text-slate">
                  {area.description}
                </p>
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
                "The expert guidance from Anamcara has been transformative for our institution. Their deep understanding of educational challenges and innovative solutions has helped us achieve remarkable improvements in both teaching quality and student outcomes."
              </p>
              <footer className="text-secondary font-semibold">
                - Principal, Delhi Public School
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Benefit from Our Expertise?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Partner with us to leverage our decades of experience and position your school for future success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
            >
              Get Expert Guidance
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

export default ExpertGuidance;