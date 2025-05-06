import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Brain,
  Lightbulb,
  Rocket,
  Users,
  Code,
  Palette,
  Calculator,
  Microscope,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  School,
  Target,
  Award
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function Curriculum() {
  const ageGroups = [
    {
      title: "Early Childhood",
      grades: "Pre-K to Grade 2",
      icon: <GraduationCap className="w-10 h-10" />,
      description: "Engaging, interactive content designed to build basic literacy skills",
      books: [
        {
          type: "Picture Books",
          description: "Richly illustrated books with simple, repetitive text",
          benefits: ["Connect words with images", "Teach basic concepts", "Stimulate imagination"]
        },
        {
          type: "Early Readers",
          description: "Books with larger fonts and simple vocabulary",
          benefits: ["Develop basic reading", "Build confidence", "Foster independence"]
        }
      ]
    },
    {
      title: "Elementary",
      grades: "Grade 3 to Grade 5",
      icon: <BookOpen className="w-10 h-10" />,
      description: "Books that encourage independent reading and explore diverse themes",
      books: [
        {
          type: "Chapter Books",
          description: "Complex storylines with illustrations and larger text",
          benefits: ["Support reading skills", "Build comprehension", "Develop focus"]
        },
        {
          type: "Informational Books",
          description: "Non-fiction topics presented in an accessible way",
          benefits: ["Learn about the world", "Build knowledge", "Develop curiosity"]
        }
      ]
    },
    {
      title: "Middle School",
      grades: "Grade 6 to Grade 8",
      icon: <Brain className="w-10 h-10" />,
      description: "Books providing deeper insight into personal growth and social issues",
      books: [
        {
          type: "Young Adult Fiction",
          description: "Engaging novels with complex characters and dilemmas",
          benefits: ["Emotional growth", "Critical thinking", "Social awareness"]
        },
        {
          type: "Non-Fiction & Fantasy",
          description: "Diverse genres exploring various themes and concepts",
          benefits: ["Creative thinking", "Subject mastery", "Analytical skills"]
        }
      ]
    }
  ];

  const steamFeatures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology",
      description: "Empowering students to become creators, not just consumers of technology"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Science",
      description: "Hands-on experiments and scientific exploration"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Mathematics",
      description: "Problem-solving and analytical thinking skills"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Arts",
      description: "Creative expression and design thinking"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Personalized",
      description: "AI-powered adaptive learning paths",
      highlight: "Custom Growth"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Innovation Focus",
      description: "STEAM-based learning for future skills",
      highlight: "Future Ready"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Active Participation",
      description: "Interactive and engaging learning experiences",
      highlight: "Deep Learning"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "World-Class Quality",
      description: "Premium educational materials and resources",
      highlight: "Excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Education Curriculum"
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
              Modern Education Curriculum
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Comprehensive learning solutions designed for the digital age
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
                Transformative Learning Experience
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Our curriculum is designed to create a well-rounded, engaging, and educational experience for students. Through carefully curated content and innovative teaching methods, we help foster literacy, creativity, critical thinking, and subject-specific knowledge.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Lightbulb className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  World-class learning kits for kindergarten, primary, and secondary students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Age-Appropriate Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{group.icon}</div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{group.title}</h3>
                  <p className="text-accent-dark font-medium">{group.grades}</p>
                  <p className="text-slate mt-2">{group.description}</p>
                </div>
                <div className="space-y-4">
                  {group.books.map((book, idx) => (
                    <div key={idx} className="bg-white/80 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">{book.type}</h4>
                      <p className="text-slate text-sm mb-3">{book.description}</p>
                      <div className="space-y-2">
                        {book.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <span className="text-slate text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEAM Features */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            STEAM Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steamFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Our Curriculum</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Innovative learning solutions designed for the modern classroom
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your School's Curriculum?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Get started with our world-class educational resources and learning kits
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Curriculum;