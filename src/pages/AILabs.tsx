import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Code, Users2, Rocket, Brain, Target, Cpu, ArrowRight, Bot, Microscope, CheckCircle2, BookOpen, Puzzle, Wrench, ShipIcon as ChipIcon, PenTool as Tool, Laptop } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroLogo from '../components/HeroLogo';

function AILabs() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Infrastructure', path: '/services/it-infrastructure' },
    { label: 'AI Labs', path: '/services/ai-labs' }
  ];

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Fostering Innovation and Critical Thinking",
      description: "Students design projects and create working prototypes, developing critical thinking and creative problem-solving skills through exploration and iteration."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Bridging Theory and Practical Knowledge",
      description: "Integration of ATL ensures students apply theoretical classroom concepts in real-world scenarios."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Encouraging Collaboration and Teamwork",
      description: "The tinkering space promotes group work, developing interpersonal skills and effective team collaboration."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Developing 21st-Century Skills",
      description: "Focus on essential skills like coding, robotics, and engineering, preparing students for future technological advancements."
    }
  ];

  const labEquipment = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Robotics Kit",
      description: "Advanced robotics equipment for hands-on learning",
      items: ["Arduino Sets", "Servo Motors", "Sensors Pack", "Robot Chassis"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Computing Setup",
      description: "High-performance computers for AI/ML tasks",
      items: ["GPU Workstations", "Development IDEs", "Cloud Access", "AI Tools"]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI/ML Tools",
      description: "Software suite for artificial intelligence learning",
      items: ["Neural Networks", "Machine Learning", "Data Analysis", "Vision Systems"]
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Research Equipment",
      description: "Tools for scientific exploration and testing",
      items: ["Testing Devices", "Measurement Tools", "Analysis Software", "Documentation"]
    }
  ];

  const atalFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curriculum Integration",
      description: "Supports STEM subjects by providing tools for hands-on projects that align with educational goals"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Dynamic, interactive layer that complements classroom learning with practical applications"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Skill Development",
      description: "Exposure to cutting-edge technology while developing hands-on skills in robotics and coding"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Future Preparation",
      description: "Essential preparation for an increasingly tech-driven world through innovation and problem-solving"
    }
  ];

  const atalActivities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Coding Workshops",
      description: "Learn programming fundamentals and advanced concepts"
    },
    {
      icon: <ChipIcon className="w-8 h-8" />,
      title: "Electronics Projects",
      description: "Build electronic circuits and understand components"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "DIY Projects",
      description: "Create innovative solutions to real-world problems"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Challenges",
      description: "Participate in competitions and showcase projects"
    }
  ];

  const atalEquipment = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Robotics Kits",
      description: "Complete robotics kits for building and programming",
      items: ["Arduino Sets", "Servo Motors", "Sensors Pack", "Robot Chassis"]
    },
    {
      icon: <Tool className="w-10 h-10" />,
      title: "Electronics Lab",
      description: "Electronics workstation for circuit design",
      items: ["Breadboards", "Components Kit", "Testing Equipment", "Power Supply"]
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Computing Setup",
      description: "High-performance computers for coding",
      items: ["Workstations", "3D Software", "Programming IDEs", "CAD Tools"]
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Science Equipment",
      description: "Tools for scientific exploration",
      items: ["Digital Microscopes", "Test Kits", "Measurement Tools", "Lab Supplies"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
          alt="AI Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80">
          <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="flex items-center mb-6">
              <HeroLogo className="h-20 md:h-24 mr-4" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
              AI & Innovation Labs
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Cutting-edge facilities fostering innovation, critical thinking, and technological advancement
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <Target className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Empowering Future Innovators
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Our AI Labs combine state-of-the-art technology with innovative learning approaches to create an environment where students can explore, experiment, and develop crucial skills for the future. Through hands-on experience with cutting-edge tools and technologies, students learn to solve real-world problems while developing critical thinking and collaborative abilities.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Brain className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Preparing students for the AI-driven future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Core Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Equipment */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Lab Equipment</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              State-of-the-art equipment for hands-on learning and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labEquipment.map((equipment, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {equipment.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{equipment.title}</h3>
                <p className="text-slate mb-4">{equipment.description}</p>
                <ul className="space-y-2">
                  {equipment.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATAL Tinkering Lab Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              ATAL Tinkering Laboratory
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              A workspace where young minds can give shape to their ideas through hands-on do-it-yourself mode and learn innovation skills
            </p>
          </div>

          {/* ATAL Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {atalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* ATAL Equipment */}
          <div className="bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
              ATAL Lab Equipment
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {atalEquipment.map((equipment, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-secondary mb-4">{equipment.icon}</div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">{equipment.title}</h4>
                  <p className="text-slate text-sm mb-4">{equipment.description}</p>
                  <ul className="space-y-2">
                    {equipment.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ATAL Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {atalActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-sand-light p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {activity.title}
                </h3>
                <p className="text-slate">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Learning Environment?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Experience the future of education with our state-of-the-art AI Labs
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AILabs;