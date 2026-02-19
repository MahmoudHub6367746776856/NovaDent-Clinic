import express from 'express';
import {
  createAppointment,
  getAppointments,
  getMyAppointments,
  updateAppointment,
  cancelAppointment,
  deleteAppointment
} from '../controllers/appointmentController.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public route - create appointment without auth
router.post('/', createAppointment);

// Protected routes
router.get('/', authenticateToken, getAppointments);
router.get('/my', authenticateToken, getMyAppointments);
router.put('/:id', authenticateToken, requireAdmin, updateAppointment);
router.put('/:id/cancel', authenticateToken, cancelAppointment);
router.delete('/:id', authenticateToken, requireAdmin, deleteAppointment);

export default router;
