import React, { useState, useEffect } from 'react';
import { Calendar, Clock, X, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Appointment } from '../types';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<number | null>(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const data = await api.getMyAppointments();
      setAppointments(data);
    } catch (error) {
      console.error('Failed to load appointments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async (id: number) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    
    setCancellingId(id);
    try {
      await api.cancelAppointment(id);
      await loadAppointments();
    } catch (error) {
      console.error('Failed to cancel appointment:', error);
    } finally {
      setCancellingId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const upcomingAppointments = appointments.filter(a => 
    a.status !== 'cancelled' && a.status !== 'completed' && new Date(a.date) >= new Date(new Date().toDateString())
  );
  const pastAppointments = appointments.filter(a => 
    a.status === 'cancelled' || a.status === 'completed' || new Date(a.date) < new Date(new Date().toDateString())
  );

  return (
    <div className="min-h-screen pt-20 bg-section-bg">
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Welcome, {user?.name}!</h1>
          <p className="text-gray-300 mt-2">Manage your dental appointments</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{upcomingAppointments.length}</div>
                  <div className="text-text-secondary">Upcoming Appointments</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-secondary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {appointments.filter(a => a.status === 'completed').length}
                  </div>
                  <div className="text-text-secondary">Completed</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {appointments.filter(a => a.status === 'pending').length}
                  </div>
                  <div className="text-text-secondary">Pending</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Upcoming Appointments</h2>
          {isLoading ? (
            <div className="text-center py-8 text-text-secondary">Loading...</div>
          ) : upcomingAppointments.length === 0 ? (
            <Card className="p-8 text-center">
              <Calendar className="w-12 h-12 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No upcoming appointments</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{appointment.service}</div>
                        <div className="text-text-secondary text-sm">
                          {new Date(appointment.date).toLocaleDateString('en-US', { 
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                          })} at {appointment.time}
                        </div>
                        <div className="flex items-center mt-2">
                          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getStatusColor(appointment.status)}`}>
                            {getStatusIcon(appointment.status)}
                            <span className="capitalize">{appointment.status}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancel(appointment.id)}
                      isLoading={cancellingId === appointment.id}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Appointments */}
      {pastAppointments.length > 0 && (
        <section className="py-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Past Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-6 opacity-75">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">{appointment.service}</div>
                      <div className="text-text-secondary text-sm">
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })} at {appointment.time}
                      </div>
                      <div className="flex items-center mt-2">
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getStatusColor(appointment.status)}`}>
                          {getStatusIcon(appointment.status)}
                          <span className="capitalize">{appointment.status}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PatientDashboard;
