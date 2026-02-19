import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Heart, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  const services = [
    { icon: '🦷', name: 'General Dentistry', desc: 'Comprehensive oral health exams and cleanings' },
    { icon: '✨', name: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile' },
    { icon: '🔧', name: 'Dental Implants', desc: 'Replace missing teeth with durable implants' },
    { icon: '📏', name: 'Orthodontics', desc: 'Traditional braces and Invisalign options' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'Absolutely love my smile after the whitening treatment! The staff was so professional and caring.', rating: 5 },
    { name: 'Michael Chen', text: 'Best dental experience I have ever had. The implants look and feel completely natural.', rating: 5 },
    { name: 'Emily Rodriguez', text: 'The orthodontic treatment transformed my confidence. The team made me feel comfortable throughout.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-section-bg via-white to-accent/5 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Award-Winning Dental Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Precision Care.<br />
                <span className="text-accent">Confident Smile.</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-lg">
                Experience modern dental care that combines advanced technology with personalized attention. Your smile is our priority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book">
                  <Button size="lg" className="group">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Our Services
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-secondary border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">500+ Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-accent-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">🦷</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-section-bg rounded-xl">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-xs text-text-secondary">Years Exp.</div>
                  </div>
                  <div className="text-center p-4 bg-section-bg rounded-xl">
                    <div className="text-2xl font-bold text-accent">5000+</div>
                    <div className="text-xs text-text-secondary">Patients</div>
                  </div>
                  <div className="text-center p-4 bg-section-bg rounded-xl">
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-xs text-text-secondary">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:border-accent/30 transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Extended Hours</h3>
              <p className="text-text-secondary">Open Monday through Saturday, with evening appointments available for your convenience.</p>
            </Card>
            <Card className="p-8 text-center hover:border-accent/30 transition-all">
              <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance Accepted</h3>
              <p className="text-text-secondary">We work with most major insurance providers and offer flexible payment plans.</p>
            </Card>
            <Card className="p-8 text-center hover:border-accent/30 transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
              <p className="text-text-secondary">Your comfort is our priority. We listen to your needs and tailor treatments accordingly.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive dental care for the whole family. From routine cleanings to complex procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-text-secondary text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl rotate-3"></div>
              <div className="relative bg-gradient-to-br from-primary to-slate-700 rounded-3xl p-12 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <span className="text-lg">State-of-the-art equipment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <span className="text-lg">Experienced dental professionals</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <span className="text-lg">Comfortable environment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <span className="text-lg">Personalized treatment plans</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                About NovaDent Clinic
              </h2>
              <p className="text-lg text-text-secondary">
                At NovaDent Clinic, we believe that everyone deserves a healthy, beautiful smile. Our team of experienced dental professionals is dedicated to providing the highest quality care in a comfortable and welcoming environment.
              </p>
              <p className="text-text-secondary">
                Using the latest technology and techniques, we offer a comprehensive range of dental services to meet all your oral health needs. From routine check-ups to advanced cosmetic procedures, we're here to help you achieve the smile you've always wanted.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Patients Say</h2>
            <p className="text-xl text-text-secondary">
              Don't just take our word for it — hear from our satisfied patients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">Patient</div>
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
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your appointment today and take the first step towards a healthier, more confident smile.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-accent hover:bg-cyan-600">
              Schedule Your Visit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
