import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightbulb, 
  Target, 
  Users2, 
  ArrowRight,
  CheckCircle2,
  Shield,
  Laptop,
  BarChart,
  Presentation,
  Globe,
  Database,
  FileText,
  School,
  Brain,
  Settings,
  DollarSign,
  BadgeCheck,
  UserCheck,
  LineChart
} from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

function InnovationFocus() {
  const selectionSteps = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Understand Your School's Needs",
      description: "Before evaluating any digital solutions, it's essential to assess your school's unique needs and goals.",
      highlights: [
        "Define educational goals and objectives",
        "Identify current challenges and pain points",
        "Consider all user types (teachers, students, administrators, parents)",
        "Evaluate existing technology infrastructure"
      ]
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Evaluate Features and Functionality",
      description: "Look for digital solutions that offer features aligned with your goals and challenges.",
      highlights: [
        "Learning Management Systems (LMS) capabilities",
        "Communication tools for stakeholder engagement",
        "Assessment and feedback mechanisms",
        "Data management and reporting features"
      ]
    },
    {
      icon: <Users2 className="w-10 h-10" />,
      title: "Consider User-Friendliness",
      description: "The best digital solutions should be easy to use for all users—teachers, students, and administrators.",
      highlights: [
        "Intuitive interfaces with minimal learning curve",
        "Comprehensive training and support resources",
        "Mobile accessibility across devices",
        "Customizable user experience"
      ]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Assess Scalability and Flexibility",
      description: "A good digital solution should be scalable and adaptable to the needs of your school as it grows.",
      highlights: [
        "Accommodation for future growth",
        "Customization options for evolving needs",
        "Performance under high user loads",
        "Integration with future technologies"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Prioritize Data Security and Privacy",
      description: "Data privacy and security are critical when choosing a digital solution, especially when it involves minors.",
      highlights: [
        "Compliance with data protection regulations",
        "Secure data storage and encryption",
        "User access control and permissions",
        "Regular security updates and audits"
      ]
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Cost and Budget Considerations",
      description: "Budget is a major factor in choosing a digital solution. When considering cost, evaluate various pricing models and long-term value.",
      highlights: [
        "Compare subscription fees, one-time payments, and per-student pricing models",
        "Identify hidden costs like training fees, integration charges, and maintenance",
        "Weigh cost against efficiency gains, time savings, and improved outcomes"
      ]
    },
    {
      icon: <BadgeCheck className="w-10 h-10" />,
      title: "Vendor Reputation and Support",
      description: "Choosing a reputable vendor with a proven track record in the education sector is crucial for long-term success.",
      highlights: [
        "Verify vendor's experience specifically in educational environments",
        "Evaluate the quality and availability of customer support services",
        "Research reviews and testimonials from similar educational institutions",
        "Assess frequency and quality of software updates and feature improvements"
      ]
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Involve Stakeholders in the Decision",
      description: "When selecting a digital solution, it's important to involve key stakeholders to ensure buy-in and successful adoption.",
      highlights: [
        "Include teachers who will be primary users in evaluation and selection",
        "Ensure that students needs are considered, especially when it comes to ease of use and engagement.",
        "Ensure there are parent portals for better communication with teachers and tracking student progress",
        "Ensure the solution is technically compatible with existing infrastructure and can be maintained effectively."
      ]
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Measure Success and Adjust",
      description: "Once the solution is implemented, regularly measure its success and make necessary adjustments for optimal results.",
      highlights: [
        "Are teachers, students, and parents actively using the system?",
        "Is there an improvement in student performance, collaboration, or communication?",
        "Are administrative tasks streamlined, and is there a reduction in manual workload?",
        "Based on feedback, make necessary adjustments to optimize the solution for your school’s needs."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          alt="Innovation Focus"
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
                Innovation Focus
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                Selecting the right digital solutions for future-ready educational institutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-8 mx-auto">
                <Lightbulb className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Choosing the Right Digital Solutions
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Selecting the right digital solution for a school is a critical decision that can impact teaching, learning, administration, and communication. In today's rapidly evolving educational landscape, making informed technology choices is essential for creating future-ready learning environments. Our innovation-focused approach helps educational institutions navigate the complex digital ecosystem to find solutions that truly enhance educational outcomes.
              </p>
              <div className="flex items-center gap-4 p-4 bg-sand-light rounded-lg">
                <Brain className="w-6 h-6 text-secondary" />
                <p className="text-secondary font-medium">
                  Technology should enhance, not replace, the human elements of education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
            Digital Solution Selection Process
          </h2>
          <div className="space-y-16">
            {selectionSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-secondary transform transition-transform duration-300 hover:scale-110">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                  </div>
                  <p className="text-slate text-lg mb-6">{step.description}</p>
                  <div className="bg-sand-light rounded-xl p-6">
                    <ul className={`grid grid-cols-1 ${step.highlights.length > 4 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-3`}>
                      {step.highlights.map((highlight, idx) => (
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

      {/* Summary Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
              In Summary
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Choosing the right digital solution for a school requires a thoughtful, comprehensive evaluation of the solution's features, ease of use, scalability, data security, and cost. By involving all relevant stakeholders, conducting pilot tests, and ensuring continuous feedback, your school can make a well-informed decision that leads to long-term success in enhancing education through technology.
            </p>
            <div className="flex justify-center">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Innovate Your Educational Approach?</h2>
          <p className="text-xl text-sand-light mb-12 max-w-2xl mx-auto">
            Let us help you select and implement the right digital solutions for your institution's unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors group"
            >
              Start Your Innovation Journey
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

export default InnovationFocus;