import React from 'react';
import { Mail, Phone, MapPin, ArrowLeft, Clock, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroLogo from '../components/HeroLogo';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Contact Us"
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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl font-medium text-white max-w-2xl [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
              We're here to help transform your educational institution
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/20 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-secondary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Email</p>
                      <a href="mailto:contact@anamcaraconsulting.in" className="text-secondary hover:text-accent transition-colors">
                        contact@anamcaraconsulting.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Phone</p>
                      <a href="tel:+918074339021" className="text-secondary hover:text-accent transition-colors">
                        (+91) 80743 39021
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Location</p>
                      <p className="text-secondary">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-secondary-light/10 to-accent-light/10 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-secondary mb-8">Business Hours</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Working Hours</p>
                      <p className="text-secondary">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Globe className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Service Area</p>
                      <p className="text-secondary">Pan India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-slate-light text-sm">Office</p>
                      <p className="text-secondary">Corporate Headquarters</p>
                      <p className="text-slate">Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;