import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Lightbulb,
  Users,
  HeartPulse,
  FileText,
  Compass,
  BarChart,
  Award,
  Globe
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function CareerCounselingBlog() {
  const keyPoints = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Guidance on Subject Selection",
      description: "In India, students typically choose their subjects for grades 9 and 10, which influence their future educational and career choices. Career counseling provides students with the guidance needed to select subjects based on their aptitude, interest, and career aspirations.",
      highlights: [
        "Informed subject selection aligned with future goals",
        "Understanding implications of academic choices",
        "Avoiding peer pressure-driven decisions",
        "Strategic planning for higher education"
      ]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Self-Awareness and Skill Development",
      description: "Career counseling helps students identify their strengths, weaknesses, interests, and skills. This self-awareness is crucial in the decision-making process.",
      highlights: [
        "Psychometric assessments for aptitude identification",
        "Personality evaluations for career matching",
        "Strengths and weaknesses analysis",
        "Interest-based career exploration"
      ]
    },
    {
      icon: <Compass className="w-10 h-10" />,
      title: "Exposure to Career Options",
      description: "Indian students often lack exposure to the vast range of career options available beyond traditional paths like engineering, medicine, and law. Career counseling broadens their horizons.",
      highlights: [
        "Introduction to emerging fields like data science",
        "Exploration of creative careers in design",
        "Information about digital marketing opportunities",
        "Guidance on entrepreneurship pathways"
      ]
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: "Reducing Stress and Pressure",
      description: "The pressure to perform well in board exams and select the 'right' career can be overwhelming for students. Career counseling provides emotional support and helps alleviate this stress.",
      highlights: [
        "Structured guidance reducing anxiety",
        "Decision-making based on potential rather than expectations",
        "Improved mental well-being",
        "Enhanced academic performance through reduced stress"
      ]
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Informed Decision-Making",
      description: "In a country like India, where education and career decisions are often influenced by parents and societal norms, career counseling allows students to take charge of their own futures.",
      highlights: [
        "Accurate information on various career paths",
        "Understanding qualification requirements",
        "Knowledge about growth potential in different fields",
        "Future-oriented decision making"
      ]
    }
  ];

  const beneficiaries = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Students",
      description: "Gain clarity about their strengths, interests, and suitable career paths"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Parents",
      description: "Better understand their child's potential and appropriate educational paths"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Schools",
      description: "Improve student outcomes and satisfaction through better guidance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Society",
      description: "Benefits from individuals working in fields aligned with their talents"
    }
  ];

  const statistics = [
    {
      value: "93%",
      label: "of students feel more confident after counseling",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      value: "78%",
      label: "make different choices than they would have without guidance",
      icon: <Compass className="w-8 h-8" />
    },
    {
      value: "85%",
      label: "report reduced stress about their future",
      icon: <HeartPulse className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Career Counseling"
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
                Career Counseling: Why It Has Become Important
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Guiding students through critical educational and career decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-slate-light text-sm">Published</p>
                  <p className="text-secondary font-medium">June 12, 2025</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate">
                <p className="text-lg leading-relaxed mb-6">
                  Career counseling is crucial for students in grades 8 to 10 in India, as it helps them navigate the complex educational landscape and make informed decisions about their future careers. During these formative years, students face increasing pressure to choose subjects and career paths that will shape their professional lives. Career counseling plays a pivotal role in ensuring that students make choices aligned with their interests, strengths, and long-term goals.
                </p>
                
                <div className="my-10 p-6 bg-sand-light rounded-xl border-l-4 border-secondary">
                  <p className="text-xl font-medium text-secondary italic">
                    "Career counseling empowers students to make informed, confident decisions about their academic and career paths, fostering self-awareness and reducing stress."
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed mb-6">
                  The educational system in India often requires students to make critical decisions about their academic streams and subject choices at a relatively young age. These decisions can have far-reaching implications for their future career options. Without proper guidance, students may make choices based on peer pressure, parental expectations, or limited information, rather than their own aptitudes and interests.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Career counseling provides a structured approach to help students understand themselves better and explore the vast array of career options available to them. Through various assessments, discussions, and information sessions, students gain valuable insights that enable them to make more informed decisions about their educational and career paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Why Career Counseling Matters
          </h2>
          <div className="space-y-16">
            {keyPoints.map((point, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {point.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{point.title}</h3>
                  <p className="text-slate text-lg mb-6">{point.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {point.highlights.map((highlight, idx) => (
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

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/20 to-accent-light/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            The Impact of Career Counseling
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-secondary">{stat.icon}</div>
                </div>
                <h3 className="text-4xl font-bold text-secondary mb-4">{stat.value}</h3>
                <p className="text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Who Benefits from Career Counseling?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/10 to-accent-light/10 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <div className="text-secondary">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
              In Conclusion
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              Career counseling in India for students from grades 8 to 10 is essential for empowering students to make informed, confident decisions about their academic and career paths. It fosters self-awareness, reduces stress, and opens the door to a wide range of career opportunities, helping students set the foundation for a successful and fulfilling future.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-6">
              As the educational and professional landscape continues to evolve rapidly, the importance of early career guidance becomes even more significant. By providing students with the tools, information, and support they need to navigate these complex decisions, career counseling plays a vital role in shaping not only individual futures but also the broader workforce and society.
            </p>
            <div className="flex justify-center mt-8">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Student Futures?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Partner with us to implement effective career counseling programs in your educational institution
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
              to="/services/career-counselling"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerCounselingBlog;