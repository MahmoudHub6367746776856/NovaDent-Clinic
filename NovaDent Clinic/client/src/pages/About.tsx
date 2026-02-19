import React from 'react';
import { Award, Users, Heart, Shield, CheckCircle, Star } from 'lucide-react';
import Card from '../components/common/Card';

const About: React.FC = () => {
  const team = [
    { name: 'Dr. Sarah Johnson', role: 'Chief Dentist', emoji: '👩‍⚕️' },
    { name: 'Dr. Michael Chen', role: 'Orthodontist', emoji: '👨‍⚕️' },
    { name: 'Dr. Emily Rodriguez', role: 'Dental Surgeon', emoji: '👩‍⚕️' },
    { name: 'Dr. James Wilson', role: 'Periodontist', emoji: '👨‍⚕️' },
  ];

  const values = [
    { icon: Heart, title: 'Patient-Centered Care', desc: 'Every decision we make prioritizes your comfort and well-being.' },
    { icon: Shield, title: 'Safety First', desc: 'We maintain the highest standards of sterilization and safety.' },
    { icon: Award, title: 'Excellence', desc: 'Continuous learning and advanced techniques for optimal results.' },
    { icon: Users, title: 'Team Work', desc: 'Collaborative approach ensures comprehensive dental care.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">About NovaDent Clinic</h1>
            <p className="text-xl text-text-secondary">
              We are dedicated to providing exceptional dental care in a comfortable and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Founded in 2008, NovaDent Clinic has been committed to transforming smiles and improving oral health for thousands of patients in our community.
                </p>
                <p>
                  Our journey began with a simple mission: to make high-quality dental care accessible and comfortable for everyone. Over the years, we've grown from a small practice to a leading dental clinic, but our core values remain the same.
                </p>
                <p>
                  We invest in the latest dental technology and continuously train our team to ensure we provide the best possible care. Our patients' trust and satisfaction are the foundations of our success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-text-secondary">Years of Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                <div className="text-text-secondary">Happy Patients</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-text-secondary">Training Hours/Year</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-text-secondary">Patient Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-text-secondary">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:border-accent/30 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-text-secondary">
              Experienced professionals dedicated to your smile
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:border-accent/30 transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NovaDent?</h2>
            <p className="text-xl text-gray-300">
              Experience the difference of truly exceptional dental care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-text-secondary">Advanced technology & techniques</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-text-secondary">Personalized treatment plans</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-text-secondary">Comfortable & relaxing environment</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
