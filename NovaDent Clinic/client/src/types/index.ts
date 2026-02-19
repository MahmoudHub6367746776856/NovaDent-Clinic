export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'patient';
  createdAt?: string;
}

export interface Appointment {
  id: number;
  userId: number;
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
}
