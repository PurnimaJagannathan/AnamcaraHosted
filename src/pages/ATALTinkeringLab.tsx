import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Puzzle, Brain, Target, Notebook as Robot, Code, Cpu, ShipIcon as ChipIcon, Lightbulb, Users, ArrowRight, Rocket, Microscope, Wrench, Laptop } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroLogo from '../components/HeroLogo';

function ATALTinkeringLab() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Infrastructure', path: '/services/it-infrastructure' },
    { label: 'ATAL Tinkering Lab', path: '/services/atal-lab' }
  ];

  const features = [
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

  const equipment = [
    {
      icon: <Robot className="w-10 h-10" />,
      title: "Robotics Kits",
      description: "Advanced robotics kits for building and programming robots",
      items: ["Arduino Sets", "Servo Motors", "Sensors Pack", "Robot Chassis"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Electronics Lab",
      description: "Complete electronics workstation for circuit design",
      items: ["Breadboards", "Components Kit", "Testing Equipment", "Power Supply"]
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Computing Setup",
      description: "High-performance computers for coding and design",
      items: ["Workstations", "3D Software", "Programming IDEs", "CAD Tools"]
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Science Equipment",
      description: "Tools for scientific exploration and experiments",
      items: ["Digital Microscopes", "Test Kits", "Measurement Tools", "Lab Supplies"]
    }
  ];

  const activities = [
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          alt="ATAL Tinkering Lab"
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
              ATAL Tinkering Laboratory
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Fostering innovation and creativity through hands-on learning experiences
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Empowering Young Innovators
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              The ATAL Tinkering Lab is a workspace where young minds can give shape to their ideas through hands-on do-it-yourself mode and learn innovation skills. Students get a chance to work with tools and equipment to understand concepts in STEM (Science, Technology, Engineering, and Math).
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Key Features
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

      {/* Equipment Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Lab Equipment</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              State-of-the-art equipment for hands-on learning and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((equipment, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-slate">{equipment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Learning Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Set up an ATAL Tinkering Lab and empower your students with future-ready skills
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

export default ATALTinkeringLab;