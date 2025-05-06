import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Users, 
  Laptop,
  Brain,
  Target,
  Award,
  Lightbulb,
  Clock,
  HeartPulse,
  Cpu,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function TeacherTraining() {
  const importancePoints = [
    {
      title: "Enhancing Teaching Quality",
      icon: <Target className="w-10 h-10" />,
      description: "Effective teaching methods and deeper subject mastery for confident delivery",
      highlight: "95% Success Rate"
    },
    {
      title: "Adapting to Diverse Needs",
      icon: <Users className="w-10 h-10" />,
      description: "Inclusive education strategies and effective classroom management techniques",
      highlight: "All Students Supported"
    },
    {
      title: "Technology Integration",
      icon: <Laptop className="w-10 h-10" />,
      description: "Modern digital tools and innovative teaching approaches for enhanced learning",
      highlight: "Latest Tech Tools"
    },
    {
      title: "Professional Growth",
      icon: <Award className="w-10 h-10" />,
      description: "Continuous learning opportunities and confidence building programs",
      highlight: "Certified Training"
    },
    {
      title: "Student Success Focus",
      icon: <Brain className="w-10 h-10" />,
      description: "Improved academic performance and holistic student development",
      highlight: "Proven Results"
    },
    {
      title: "Teacher Empowerment",
      icon: <HeartPulse className="w-10 h-10" />,
      description: "Enhanced job satisfaction and clear career advancement paths",
      highlight: "24/7 Support"
    }
  ];

  const trainingPrograms = [
    {
      title: "Inventive Teaching Strategies",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Move beyond traditional methods with technology, collaborative work, and real-world problem-solving to ensure students are motivated and challenged.",
      highlight: "Interactive Learning",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
    },
    {
      title: "Mind Maps",
      icon: <Brain className="w-8 h-8" />,
      description: "Learn to use mind maps for organizing thoughts, structuring lessons, and creating dynamic classroom activities that enhance memory retention and problem-solving.",
      highlight: "Visual Learning",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80"
    },
    {
      title: "Classroom Management",
      icon: <Users className="w-8 h-8" />,
      description: "Develop effective strategies to maintain a productive, positive, and respectful classroom environment while fostering student engagement.",
      highlight: "Effective Control",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    {
      title: "Time Management",
      icon: <Clock className="w-8 h-8" />,
      description: "Master techniques to maximize productivity, reduce stress, and maintain a healthy work-life balance while managing multiple responsibilities.",
      highlight: "Better Productivity",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
    },
    {
      title: "Stress Management",
      icon: <HeartPulse className="w-8 h-8" />,
      description: "Learn practical techniques for recognizing and managing stress, implementing self-care strategies, building resilience, fostering mindfulness, and enhancing well-being.",
      highlight: "Mental Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
    },
    {
      title: "AI Tools 2025",
      icon: <Cpu className="w-8 h-8" />,
      description: "Get hands-on experience with AI tools for personalized learning, grading, classroom management, and communication to transform classrooms.",
      highlight: "Future Ready",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          alt="Teacher Training"
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
              Empowering Educators Through Training
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Comprehensive professional development programs designed to enhance teaching quality and student outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Training Programs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Our Training Programs
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Discover our comprehensive range of training programs designed to enhance your teaching skills and transform your classroom experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="group bg-gradient-to-br from-primary-light/20 to-accent-light/30 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 text-white">
                        <div className="p-2 bg-secondary/90 rounded-lg">
                          {program.icon}
                        </div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-secondary">{program.icon}</div>
                    <h3 className="text-xl font-bold text-secondary">{program.title}</h3>
                  </div>
                  <p className="text-slate">{program.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-lg text-secondary font-medium">
                      {program.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Benefits of Our Training</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Our comprehensive training approach delivers multiple benefits that enhance both teaching quality and student outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importancePoints.map((point, index) => (
              <div 
                key={index} 
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{point.title}</h3>
                <p className="text-slate mb-4">{point.description}</p>
                <div className="pt-4 border-t border-sand">
                  <span className="text-secondary font-bold text-lg">{point.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Teaching?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs and enhance your teaching skills for better student outcomes.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TeacherTraining;