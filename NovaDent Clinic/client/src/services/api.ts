import {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  Appointment,
  AppointmentFormData,
  User
} from '../types';

const API_BASE_URL = '/api';

class ApiService {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || 'An error occurred');
    }

    return response.json();
  }

  // Auth endpoints
  async register(data: RegisterData): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getCurrentUser(): Promise<User> {
    return this.request<User>('/auth/me');
  }

  // Appointment endpoints
  async getAppointments(filters?: {
    date?: string;
    status?: string;
    service?: string;
  }): Promise<Appointment[]> {
    const params = new URLSearchParams();
    if (filters?.date) params.append('date', filters.date);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.service) params.append('service', filters.service);
    
    const queryString = params.toString();
    const endpoint = queryString ? `/appointments?${queryString}` : '/appointments';
    return this.request<Appointment[]>(endpoint);
  }

  async getMyAppointments(): Promise<Appointment[]> {
    return this.request<Appointment[]>('/appointments/my');
  }

  async createAppointment(data: AppointmentFormData): Promise<Appointment> {
    return this.request<Appointment>('/appointments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateAppointment(id: number, data: Partial<Appointment>): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteAppointment(id: number): Promise<void> {
    await this.request<void>(`/appointments/${id}`, {
      method: 'DELETE',
    });
  }

  async cancelAppointment(id: number): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}/cancel`, {
      method: 'PUT',
    });
  }
}

export const api = new ApiService();
export default api;
