import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">NovaDent</span>
                <span className="text-sm text-accent block -mt-1">Clinic</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Precision Care. Confident Smile. Modern dental care with a focus on comfort and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" title="Follow us on Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" title="Follow us on Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" title="Follow us on Twitter" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/book" className="text-gray-300 hover:text-accent transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">General Dentistry</li>
              <li className="text-gray-300">Teeth Whitening</li>
              <li className="text-gray-300">Dental Implants</li>
              <li className="text-gray-300">Orthodontics</li>
              <li className="text-gray-300">Root Canal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Dental Street<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">info@novadent.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NovaDent Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
