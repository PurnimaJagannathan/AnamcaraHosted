import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Brain, Laptop, ArrowRight, Globe, Layers, Database, Users, Share2, BookOpen, Presentation, BarChart, Zap, Cpu, Headset as VrHeadset, Cloud, LineChart } from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function FutureOfEdTech() {
  const keyTechnologies = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Artificial Intelligence",
      description: "AI-powered tools enable personalized learning paths, providing students with real-time feedback and helping them progress at their own pace.",
      features: [
        "Adaptive learning systems",
        "Automated grading and feedback",
        "Personalized content recommendations",
        "Learning gap identification"
      ]
    },
    {
      icon: <VrHeadset className="w-10 h-10" />,
      title: "Virtual & Augmented Reality",
      description: "Immersive technologies allow students to experience learning in ways that traditional methods cannot, enhancing engagement and improving retention.",
      features: [
        "Virtual field trips and historical experiences",
        "3D model visualization for complex concepts",
        "Interactive simulations and experiments",
        "Spatial learning environments"
      ]
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud-Based Learning",
      description: "Cloud platforms revolutionize the classroom by offering flexible, on-demand learning and creating global learning communities.",
      features: [
        "Anywhere, anytime access to resources",
        "Collaborative workspaces",
        "Cross-device compatibility",
        "Seamless content updates"
      ]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data-Driven Insights",
      description: "Big data analytics help educators track student progress, identify learning trends, and make informed decisions for more effective teaching.",
      features: [
        "Learning analytics dashboards",
        "Predictive performance models",
        "Intervention opportunity identification",
        "Curriculum effectiveness measurement"
      ]
    }
  ];

  const transformations = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Hybrid Learning Models",
      description: "Blending in-person and digital experiences for flexible education"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "Technology-enabled group work across geographical boundaries"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Dynamic learning materials that respond to student interactions"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Literacy",
      description: "Essential skills for navigating and creating in digital environments"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Continuous Assessment",
      description: "Real-time evaluation replacing traditional testing models"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Classrooms",
      description: "Connecting students worldwide for cultural exchange and collaboration"
    }
  ];

  const relatedArticles = [
    {
      title: "Modern Teaching Methodologies",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      excerpt: "Innovative approaches to classroom teaching that engage and inspire students..."
    },
    {
      title: "Student Success Strategies",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      excerpt: "Proven techniques for improving student outcomes and fostering lifelong learning..."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          alt="Future of Education Technology"
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
                Future of Education Technology
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Transformative innovations reshaping how we teach and learn
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
                  <p className="text-secondary font-medium">May 15, 2025</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate">
                <p className="text-lg leading-relaxed mb-6">
                  The future of education technology is poised to bring about transformative changes in how we teach, learn, and engage with education. With rapid advancements in artificial intelligence (AI), virtual reality (VR), and adaptive learning, education will become more personalized and accessible, catering to the diverse needs of individual students. AI-powered tools will enable tailored learning paths, providing students with real-time feedback, helping them progress at their own pace, and filling knowledge gaps efficiently.
                </p>
                
                <div className="my-10 p-6 bg-sand-light rounded-xl border-l-4 border-secondary">
                  <p className="text-xl font-medium text-secondary italic">
                    "Immersive technologies allow students to experience learning in ways that traditional methods cannot, enhancing engagement and improving retention."
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed mb-6">
                  One of the most promising advancements in education technology is the integration of virtual and augmented reality. These immersive technologies allow students to experience learning in ways that traditional methods cannot. For instance, VR can transport students to historical events, allowing them to experience history firsthand, while AR can bring scientific concepts to life through interactive 3D models. This not only enhances engagement but also improves retention by making learning more interactive and hands-on.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Additionally, cloud-based platforms and online learning environments are revolutionizing the classroom by offering flexible, on-demand learning. Students from anywhere in the world can access educational content, attend virtual classrooms, and collaborate with peers, creating a global learning community. Tools like Google Classroom and Zoom have already paved the way, but in the future, these platforms will be even more immersive and integrated with AI to provide customized learning experiences.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  As we look to the future, data-driven insights will play a crucial role in shaping education. By harnessing big data, educators will be able to track student progress, identify learning trends, and make informed decisions. This will lead to more effective teaching methods, helping to ensure that each student receives the attention and support they need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Key Technologies Shaping Education's Future
          </h2>
          <div className="space-y-16">
            {keyTechnologies.map((tech, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {tech.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{tech.title}</h3>
                  <p className="text-slate text-lg mb-6">{tech.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-slate">{feature}</span>
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

      {/* Educational Transformations */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            Educational Transformations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
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

     
      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Embrace the Future of Education?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Partner with us to implement cutting-edge educational technology solutions that prepare your students for tomorrow
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

export default FutureOfEdTech;