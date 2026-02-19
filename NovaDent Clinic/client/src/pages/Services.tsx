import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🦷',
      name: 'General Dentistry',
      description: 'Comprehensive oral health care including exams, cleanings, and preventive treatments.',
      features: ['Dental Exams & Cleanings', 'X-Rays & Diagnostics', 'Fillings & Restorations', 'Extractions'],
      price: 'From $99',
    },
    {
      icon: '✨',
      name: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile.',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Custom Trays', 'Maintenance Products'],
      price: 'From $299',
    },
    {
      icon: '🔧',
      name: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel natural.',
      features: ['Single Tooth Implants', 'Multiple Tooth Implants', 'Full Arch Replacements', 'All-on-4 Implants'],
      price: 'From $1,999',
    },
    {
      icon: '📏',
      name: 'Orthodontics',
      description: 'Straighten your smile with traditional braces or modern clear aligners.',
      features: ['Traditional Braces', 'Invisalign', 'Retainers', 'Early Intervention'],
      price: 'From $2,499',
    },
    {
      icon: '🩹',
      name: 'Root Canal Treatment',
      description: 'Save infected teeth with our gentle and effective root canal procedures.',
      features: ['Diagnosis & Treatment', 'Pain Management', 'Root Canal Therapy', 'Post-Treatment Care'],
      price: 'From $899',
    },
    {
      icon: '👑',
      name: 'Dental Crowns',
      description: 'Custom-made crowns to restore damaged teeth and improve appearance.',
      features: ['Porcelain Crowns', 'Ceramic Crowns', 'Same-Day Crowns', 'Crown Repairs'],
      price: 'From $1,099',
    },
    {
      icon: '💎',
      name: 'Veneers',
      description: 'Transform your smile with custom porcelain veneers.',
      features: ['Porcelain Veneers', 'Composite Veneers', 'Smile Design', 'Minimal Prep Veneers'],
      price: 'From $1,299',
    },
    {
      icon: '🚨',
      name: 'Emergency Care',
      description: 'Immediate dental care for dental emergencies when you need it most.',
      features: ['Tooth Pain Relief', 'Broken Tooth Repair', 'Lost Filling/Crown', 'Dental Trauma'],
      price: 'From $150',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-text-secondary">
              Comprehensive dental care for the whole family. State-of-the-art technology meets compassionate treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:border-accent/30 transition-all">
                <div className="flex items-start space-x-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-primary">{service.name}</h3>
                      <span className="text-accent font-semibold">{service.price}</span>
                    </div>
                    <p className="text-text-secondary mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/book">
                      <Button variant="outline" className="w-full">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experienced team will help you determine the best treatment plan for your specific needs.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-accent hover:bg-cyan-600">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
