import express from "express";
import Appointment from "../models/appointmentget.js";

const router = express.Router();


// View all appointments
router.get("/opd", async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

// Accept / Reject appointment
router.put("/opd/:id", async (req, res) => {
  try {
    const { status } = req.body;

    await Appointment.findByIdAndUpdate(req.params.id, { status });

    res.json({ msg: "Appointment updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Update failed" });
  }
});

export default router;
