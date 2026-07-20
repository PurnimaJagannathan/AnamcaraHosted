import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo-transparent-png.png" 
                alt="Anamcara Logo" 
                className="h-16 mr-3"
              />
              <h3 className="text-lg md:text-xl font-semibold">Anamcara</h3>
            </div>
            <p className="text-sand">
              Transforming education through innovative solutions and comprehensive support.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sand">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/blog/future-of-education-technology" className="hover:text-accent">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/anamcara-consulting-services-llp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sand hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-8">
          <img src="/images/PoweredByRefrens.png" alt="Accounting Powered by Refrens.com" className="h-12 w-auto" />
        </div>
        <div className="border-t border-sand/20 mt-8 pt-8 text-center text-sand">
          <p>© 2025 Anamcara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
