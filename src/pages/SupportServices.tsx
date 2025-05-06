import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Clock, Shield, Zap, Gauge, PenTool as Tool, RefreshCw, HardDrive, Network, Wifi, Server, Database, Users, Laptop, CheckCircle2, ArrowRight, Wrench, FileCheck, HeartPulse } from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function SupportServices() {
  const objectives = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "System Reliability",
      description: "Ensure all IT hardware and software operate efficiently with minimal downtime"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Cost-Effective Maintenance",
      description: "Affordable IT system maintenance without full-time IT staff investment"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Timely Support",
      description: "Immediate assistance for technical issues to minimize disruptions"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Regular Updates",
      description: "System updates to meet latest security and performance standards"
    }
  ];

  const services = [
    {
      icon: <Tool className="w-10 h-10" />,
      title: "Preventive Maintenance",
      description: "Monthly/Quarterly scheduled checks and servicing",
      activities: [
        "Hardware inspections",
        "System cleaning",
        "Health checks",
        "Battery backup testing"
      ]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Breakdown Support",
      description: "24-48 hour response time for issues",
      activities: [
        "Hardware repairs",
        "Software troubleshooting",
        "Network issues",
        "Peripheral support"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Software Updates",
      description: "Regular system and security updates",
      activities: [
        "OS updates",
        "Security patches",
        "Software upgrades",
        "Antivirus maintenance"
      ]
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Network Support",
      description: "Complete network infrastructure management",
      activities: [
        "Wi-Fi optimization",
        "Bandwidth management",
        "Firewall configuration",
        "Server maintenance"
      ]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Management",
      description: "Comprehensive backup and recovery solutions",
      activities: [
        "Regular backups",
        "Cloud storage",
        "Disaster recovery",
        "Data security"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Staff Training",
      description: "Ongoing technical support and training",
      activities: [
        "Teacher workshops",
        "Admin staff support",
        "Software training",
        "Helpdesk access"
      ]
    }
  ];

  const infrastructureItems = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Computer Systems",
      description: "Regular maintenance of all workstations"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Servers",
      description: "Server optimization and monitoring"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Network Equipment",
      description: "Wi-Fi and network infrastructure support"
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: "Storage Systems",
      description: "Data storage and backup solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="IT Support Services"
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
              Annual Maintenance Contract (AMC) Services
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              Comprehensive IT infrastructure support and maintenance for educational institutions
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <HeartPulse className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Ensuring Your IT Infrastructure's Health
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Our AMC services ensure the smooth functioning and upkeep of your school's IT systems through regular maintenance, troubleshooting, repairs, and comprehensive support for all hardware and software systems.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Clock className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  24/7 support with guaranteed response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Key Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-secondary">{objective.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {objective.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-accent-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Comprehensive maintenance and support services for your IT infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white/95 shadow-lg p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">{service.title}</h3>
                <p className="text-slate mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-slate">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Coverage */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Infrastructure Coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureItems.map((item, index) => (
              <div 
                key={index}
                className="bg-sand-light p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Secure Your IT Infrastructure?</h2>
          <p className="text-lg text-sand-light mb-8 max-w-2xl mx-auto">
            Get comprehensive AMC services tailored to your institution's needs
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

export default SupportServices;