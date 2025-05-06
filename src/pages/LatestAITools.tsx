import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Users, 
  Presentation, 
  BarChart, 
  Cpu, 
  GraduationCap,
  BookOpen,
  PenTool,
  ClipboardList,
  LineChart,
  Layers,
  Zap,
  MessageSquare,
  Search,
  Clock
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function LatestAITools() {
  const toolCategories = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Grading and Assessment Tools",
      description: "AI-powered tools like Gradescope and Turnitin help teachers with automated grading, reducing the time spent on administrative tasks.",
      features: [
        "Automated assignment and quiz assessment",
        "Instant feedback for students",
        "Plagiarism detection",
        "Data-driven insights on student performance"
      ],
      examples: [
        {
          name: "Gradescope",
          description: "Streamlines grading workflow for assignments and exams"
        },
        {
          name: "Turnitin",
          description: "Ensures academic integrity through plagiarism detection"
        }
      ]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Personalized Learning Platforms",
      description: "Tools like DreamBox and Knewton use AI to deliver personalized learning experiences tailored to individual student needs.",
      features: [
        "Real-time performance analysis",
        "Adaptive curriculum adjustments",
        "Customized learning paths",
        "Targeted resources based on strengths and weaknesses"
      ],
      examples: [
        {
          name: "DreamBox",
          description: "Adaptive math learning platform that adjusts to student progress"
        },
        {
          name: "Knewton",
          description: "Personalized learning system that adapts to individual learning styles"
        }
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Classroom Management Tools",
      description: "AI tools such as Classcraft and LanSchool assist teachers in managing classrooms more effectively.",
      features: [
        "Student behavior monitoring",
        "Engagement tracking",
        "Classroom dynamics analysis",
        "Automated management tasks"
      ],
      examples: [
        {
          name: "Classcraft",
          description: "Gamifies classroom management to boost engagement"
        },
        {
          name: "LanSchool",
          description: "Monitors student activities and facilitates classroom control"
        }
      ]
    },
    {
      icon: <Presentation className="w-10 h-10" />,
      title: "AI-Powered Lesson Planning",
      description: "Platforms like Socrative and TeachFX help teachers with lesson planning by analyzing class discussions and providing insights.",
      features: [
        "Class discussion analysis",
        "Focus area identification",
        "Resource and material suggestions",
        "Activity recommendations based on objectives"
      ],
      examples: [
        {
          name: "Socrative",
          description: "Creates interactive lessons and provides real-time feedback"
        },
        {
          name: "TeachFX",
          description: "Analyzes classroom talk patterns to improve teaching strategies"
        }
      ]
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Student Data Analytics",
      description: "AI tools such as Edulastic and Clever provide in-depth analytics on student performance and progress.",
      features: [
        "Performance tracking",
        "Trend identification",
        "Areas for attention highlighting",
        "Data-driven decision making"
      ],
      examples: [
        {
          name: "Edulastic",
          description: "Comprehensive assessment platform with detailed analytics"
        },
        {
          name: "Clever",
          description: "Centralizes student data for easier analysis and insights"
        }
      ]
    }
  ];

  const emergingTools = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Writing Assistants",
      description: "Tools like Grammarly for Education and QuillBot help teachers create error-free content and assist students with writing skills"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research Enhancers",
      description: "AI-powered research tools that help find relevant educational resources and summarize complex information"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Content Generation",
      description: "AI systems that can create customized worksheets, quizzes, and learning materials based on specific topics"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Virtual Teaching Assistants",
      description: "AI assistants that can answer student questions and provide additional support outside class hours"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Management Tools",
      description: "AI schedulers that optimize lesson planning, grading time, and administrative tasks for better efficiency"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accessibility Enhancers",
      description: "Tools that make educational content more accessible through text-to-speech, translations, and simplified language"
    }
  ];

  const relatedArticles = [
    {
      title: "Future of Education Technology",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      excerpt: "Exploring emerging trends in AI, VR, and adaptive learning that are transforming education...",
      link: "/blog/future-of-education-technology"
    },
    {
      title: "Modern Teaching Methodologies",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      excerpt: "Innovative approaches to classroom teaching that engage students and improve outcomes...",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&q=80"
          alt="AI Tools for Teachers"
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
                Latest AI Tools for Teachers
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Enhancing teaching efficiency and personalizing learning experiences
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
                  <Cpu className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-slate-light text-sm">Published</p>
                  <p className="text-secondary font-medium">June 5, 2025</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate">
                <p className="text-lg leading-relaxed mb-6">
                  Modern AI tools for teachers are designed to enhance teaching efficiency, personalize learning experiences, and provide valuable insights into student performance. These innovative technologies are transforming education by automating routine tasks, delivering customized content, and offering data-driven insights that help educators make informed decisions about their teaching strategies.
                </p>
                
                <div className="my-10 p-6 bg-sand-light rounded-xl border-l-4 border-secondary">
                  <p className="text-xl font-medium text-secondary italic">
                    "AI tools are designed to save time, improve teaching quality, and support personalized learning—making education more efficient and impactful for both teachers and students."
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed mb-6">
                  As educational technology continues to evolve, AI-powered tools are becoming increasingly sophisticated, offering teachers powerful resources to enhance their teaching practices and improve student outcomes. From automated grading systems to personalized learning platforms, these tools are designed to address specific challenges in education and create more engaging, effective learning environments.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  In this article, we explore some of the most notable AI tools available to teachers today, examining their features, benefits, and potential impact on education. By leveraging these technologies, educators can streamline administrative tasks, gain valuable insights into student performance, and create more personalized, engaging learning experiences for their students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            AI Tools Transforming Education
          </h2>
          <div className="space-y-16">
            {toolCategories.map((category, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{category.title}</h3>
                  <p className="text-slate text-lg mb-6">{category.description}</p>
                  <div className="bg-sand-light rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-secondary mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent-dark flex-shrink-0" />
                          <span className="text-slate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="bg-white border border-sand rounded-lg p-4 shadow-sm">
                        <h5 className="font-bold text-secondary mb-1">{example.name}</h5>
                        <p className="text-slate text-sm">{example.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Tools */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Emerging AI Tools to Watch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{tool.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {tool.title}
                </h3>
                <p className="text-slate">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              The Future of AI in Education
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              As AI technology continues to advance, we can expect even more sophisticated tools to emerge in the educational landscape. These innovations will likely offer even greater personalization, more accurate assessments, and deeper insights into student learning patterns.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-6">
              While AI tools offer tremendous benefits, it's important to remember that they are designed to enhance, not replace, the human elements of education. The most effective approach combines the efficiency and insights of AI with the creativity, empathy, and guidance that only teachers can provide.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-6">
              By embracing these tools and integrating them thoughtfully into their teaching practices, educators can create more engaging, effective, and personalized learning experiences for their students, preparing them for success in an increasingly digital world.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Teaching?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Let us help you implement the right AI tools to enhance your teaching and improve student outcomes
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

export default LatestAITools;