# NovaDent Clinic – Full-Stack Appointment System

NovaDent is a full-stack dental clinic web application designed to provide a modern, fast, and user-friendly appointment booking experience for patients, along with a powerful dashboard for clinic administrators.

The system allows patients to browse services, create accounts, and book appointments online, while administrators can manage bookings, update statuses, and monitor clinic activity from a dedicated dashboard.

---

## Features

### Public Website
- Modern, responsive landing page
- Services overview
- About section
- Image gallery
- Appointment booking form
- User authentication (register/login)

### Patient Dashboard
- View upcoming appointments
- Cancel scheduled appointments
- Secure account access

### Admin Dashboard
- View all appointments
- Filter and search bookings
- Update appointment status
- Delete appointments
- Basic statistics overview

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express

### Database
- SQLite

### Authentication
- JSON Web Tokens (JWT)

---

## Project Structure

```
nova-dent/
│
├── client/        # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/        # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/nova-dent.git
cd nova-dent
```

### 2. Install dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd ../server
npm install
```

---

## Running the Project

### Start the backend
```bash
cd server
npm run dev
```

### Start the frontend
```bash
cd client
npm run dev
```

The frontend will typically run on:
```
http://localhost:5173
```

---

## API Endpoints

### Authentication
- POST /api/auth/register – Register new user
- POST /api/auth/login – Login user
- GET /api/auth/me – Get current user

### Appointments
- GET /api/appointments – Get appointments
- POST /api/appointments – Create appointment
- PUT /api/appointments/:id – Update status
- DELETE /api/appointments/:id – Delete appointment

---

## User Roles

### Patient
- Register and login
- Book appointments
- View and cancel appointments

### Admin
- Access admin dashboard
- Manage all appointments
- Update statuses
- Delete bookings
- View statistics

---

## Database Schema

### Users
| Field | Type |
|------|------|
| id | INTEGER (PK) |
| name | TEXT |
| email | TEXT (unique) |
| password | TEXT |
| role | TEXT (admin/patient) |
| created_at | DATETIME |

### Appointments
| Field | Type |
|------|------|
| id | INTEGER (PK) |
| user_id | INTEGER |
| full_name | TEXT |
| phone | TEXT |
| email | TEXT |
| service | TEXT |
| date | TEXT |
| time | TEXT |
| notes | TEXT |
| status | TEXT |
| created_at | DATETIME |

---

## Main Services
- General Dentistry
- Teeth Whitening
- Dental Implants
- Orthodontics
- Root Canal Treatment
- Crowns
- Veneers
- Emergency Care

---

## Deployment

### Frontend
- Vercel
- Netlify

### Backend
- Render
- Railway
- VPS (Node.js)

---

## Author
Full-stack web application for a dental clinic booking system.
