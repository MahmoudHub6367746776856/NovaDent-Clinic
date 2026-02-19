import { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle, Trash2, Filter } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Select from '../components/common/Select';
import api from '../services/api';
import { Appointment } from '../types';

const AdminDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    loadAppointments();
  }, [statusFilter, serviceFilter, dateFilter]);

  const loadAppointments = async () => {
    try {
      const filters: any = {};
      if (statusFilter) filters.status = statusFilter;
      if (serviceFilter) filters.service = serviceFilter;
      if (dateFilter) filters.date = dateFilter;
      
      const data = await api.getAppointments(filters);
      setAppointments(data);
    } catch (error) {
      console.error('Failed to load appointments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    setUpdatingId(id);
    try {
      await api.updateAppointment(id, { status: status as 'pending' | 'confirmed' | 'completed' | 'cancelled' });
      await loadAppointments();
    } catch (error) {
      console.error('Failed to update appointment:', error);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;
    
    setDeletingId(id);
    try {
      await api.deleteAppointment(id);
      await loadAppointments();
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    } finally {
      setDeletingId(null);
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

  const today = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(a => a.date === today);
  const pendingAppointments = appointments.filter(a => a.status === 'pending');

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  const serviceOptions = [
    { value: '', label: 'All Services' },
    { value: 'general', label: 'General Dentistry' },
    { value: 'whitening', label: 'Teeth Whitening' },
    { value: 'implants', label: 'Dental Implants' },
    { value: 'orthodontics', label: 'Orthodontics' },
    { value: 'root-canal', label: 'Root Canal' },
    { value: 'crowns', label: 'Dental Crowns' },
    { value: 'veneers', label: 'Veneers' },
    { value: 'emergency', label: 'Emergency Care' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-section-bg">
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-300 mt-2">Manage all appointments</p>
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
                  <div className="text-2xl font-bold text-primary">{appointments.length}</div>
                  <div className="text-text-secondary">Total Appointments</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{todayAppointments.length}</div>
                  <div className="text-text-secondary">Today's Appointments</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{pendingAppointments.length}</div>
                  <div className="text-text-secondary">Pending Requests</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-primary">Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={statusOptions}
              />
              <Select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                options={serviceOptions}
              />
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                placeholder="Filter by date"
                aria-label="Filter appointments by date"
                className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Appointments Table */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">All Appointments</h2>
          {isLoading ? (
            <div className="text-center py-8 text-text-secondary">Loading...</div>
          ) : appointments.length === 0 ? (
            <Card className="p-8 text-center">
              <Calendar className="w-12 h-12 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No appointments found</p>
            </Card>
          ) : (
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-section-bg">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Patient</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Date & Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-section-bg transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-primary">{appointment.fullName}</div>
                            <div className="text-sm text-text-secondary">{appointment.email}</div>
                            <div className="text-sm text-text-secondary">{appointment.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-text-secondary capitalize">
                          {appointment.service.replace('-', ' ')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-text-secondary">
                            {new Date(appointment.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="text-sm text-text-secondary">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            aria-label="Change appointment status"
                            value={appointment.status}
                            onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                            disabled={updatingId === appointment.id}
                            className={`px-3 py-1 rounded-full text-sm font-medium border-0 cursor-pointer ${getStatusColor(appointment.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(appointment.id)}
                            isLoading={deletingId === appointment.id}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
