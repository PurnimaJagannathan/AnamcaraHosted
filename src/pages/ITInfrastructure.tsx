import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Monitor, Network, Notebook as Robot,
  ArrowRight, Cpu, CheckCircle2, X, Wifi, Server,
  Laptop, Users, Code, Lightbulb, Users2, Rocket,
  BookOpen, Puzzle, Brain, Target
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function ITInfrastructure() {
  const [selectedOffering, setSelectedOffering] = useState<string | null>(null);

  const ifpFeatures = [
    "Multi-touch interface with multiple user support",
    "Automatic data processing machine (ADPM) digital board integration",
    "Android OS compatibility with cross-platform support",
    "Easy file access, annotation, and saving capabilities",
    "Wide 179° viewing angle for optimal visibility",
    "UHD 4K resolution for crystal clear display",
    "Real-time response and connectivity",
    "Centralized learning content management"
  ];

  const labFeatures = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "High-Performance Workstations",
      description: "Modern computers equipped to handle educational software and coding environments"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Robust Network Infrastructure",
      description: "High-bandwidth network supporting multiple concurrent users"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Dual Connectivity",
      description: "Both wired and wireless connectivity options for maximum flexibility"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Central Server Setup",
      description: "Centralized resource management and data storage"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Environment",
      description: "Layout designed for both individual and group work"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Modern Displays",
      description: "High-resolution monitors for optimal viewing experience"
    }
  ];

  const aiLabFeatures = [
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

  const offerings = [
    {
      id: 'ifp',
      icon: <Monitor className="w-12 h-12" />,
      title: "Integrated Flat Panels",
      description: "State-of-the-art interactive displays with 4K resolution and multi-touch capabilities",
      image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?auto=format&fit=crop&q=80"
    },
    {
      id: 'computer-labs',
      icon: <Network className="w-12 h-12" />,
      title: "Computer Lab Setup",
      description: "Complete networking infrastructure with high-performance computing facilities",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80"
    },
    {
      id: 'ai-labs',
      icon: <Cpu className="w-12 h-12" />,
      title: "AI Labs",
      description: "Advanced artificial intelligence and machine learning laboratory facilities",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          alt="Modern Educational Technology"
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
              AI-Enhanced Educational Technology
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Cutting-edge hardware and software solutions delivering A-class educational experiences for all stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">Our Infrastructure Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div key={offering.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 text-white">
                        <div className="p-2 bg-secondary/90 rounded-lg">
                          {offering.icon}
                        </div>
                        <h3 className="text-xl font-bold">{offering.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-secondary">{offering.icon}</div>
                    <h3 className="text-xl font-bold text-secondary">{offering.title}</h3>
                  </div>
                  <p className="text-slate mb-4">{offering.description}</p>
                  <Link 
                    to={`/services/${offering.id}`}
                    className="inline-flex items-center text-secondary hover:text-accent transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Learning Environment</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Experience the future of education with our cutting-edge interactive display solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ITInfrastructure;