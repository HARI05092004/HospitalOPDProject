import express from "express";
import {

  getAllAppointments,
  updateAppointmentStatus,
  getUserAppointments,
  createAppointment
} from "../controllers/appointmentController.js";

const router = express.Router();

/* ADMIN → VIEW ALL */
router.get("/opd", getAllAppointments);

/* ADMIN → ACCEPT / REJECT */
router.put("/opd/status/:id", updateAppointmentStatus);

// User booking
router.post("/opd", createAppointment);

// User → My Appointments
router.get("/my/:email", getUserAppointments);

export default router;
