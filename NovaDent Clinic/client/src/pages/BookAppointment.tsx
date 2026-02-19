import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, User, Phone, Mail } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Textarea from '../components/common/Textarea';
import api from '../services/api';
import { Appointment, AppointmentFormData } from '../types';

const BookAppointment: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const services = [
    { value: 'general', label: 'General Dentistry' },
    { value: 'whitening', label: 'Teeth Whitening' },
    { value: 'implants', label: 'Dental Implants' },
    { value: 'orthodontics', label: 'Orthodontics' },
    { value: 'root-canal', label: 'Root Canal Treatment' },
    { value: 'crowns', label: 'Dental Crowns' },
    { value: 'veneers', label: 'Veneers' },
    { value: 'emergency', label: 'Emergency Care' },
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const appointment = await api.createAppointment(formData);
      setBookedAppointment(appointment);
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to book appointment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess && bookedAppointment) {
    // Get the service label from the services array
    const serviceLabel = services.find(s => s.value === bookedAppointment.service)?.label || bookedAppointment.service;
    
    return (
      <div className="min-h-screen pt-20 bg-section-bg flex items-center justify-center">
        <Card className="p-8 max-w-lg mx-4">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-accent-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-accent-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Appointment Booked!</h2>
            <p className="text-text-secondary">
              Your appointment has been successfully booked.
            </p>
          </div>
          
          {/* Booking Details */}
          <div className="bg-section-bg rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-sm text-text-secondary">Booking Number</div>
              <div className="text-2xl font-bold text-accent">#{bookedAppointment.id}</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <User className="w-4 h-4 text-text-secondary" />
                <span className="text-primary">{bookedAppointment.fullName}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-text-secondary" />
                <span className="text-primary">{bookedAppointment.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-text-secondary" />
                <span className="text-primary">{bookedAppointment.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Calendar className="w-4 h-4 text-text-secondary" />
                <span className="text-primary">
                  {new Date(bookedAppointment.date).toLocaleDateString('en-US', { 
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-text-secondary" />
                <span className="text-primary">{bookedAppointment.time}</span>
              </div>
              <div className="pt-2 border-t border-border">
                <span className="text-sm text-text-secondary">Service: </span>
                <span className="text-sm font-medium text-primary">{serviceLabel}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-text-secondary mb-4">
              You will receive a confirmation email shortly.
            </p>
            <Button onClick={() => navigate('/login')} className="w-full">
              Go to Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-section-bg">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-300">
            Schedule your visit today and take the first step towards a healthier smile
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />

              <Select
                label="Select Service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={[{ value: '', label: 'Choose a service...' }, ...services]}
                required
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <Select
                  label="Preferred Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  options={[{ value: '', label: 'Choose a time...' }, ...timeSlots]}
                  required
                />
              </div>

              <Textarea
                label="Additional Notes (Optional)"
                name="notes"
                value={formData.notes || ''}
                onChange={handleChange}
                placeholder="Any special requests or concerns..."
                rows={4}
              />

              <div className="flex items-center space-x-4 text-sm text-text-secondary bg-section-bg p-4 rounded-lg">
                <Calendar className="w-5 h-5 text-accent" />
                <span>We'll send you a confirmation email with your appointment details</span>
              </div>

              <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                Book Appointment
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
