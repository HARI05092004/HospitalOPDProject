
import Appointment from "../models/appointment.js";
/* ================================
   USER → BOOK APPOINTMENT
================================ */


export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ msg: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error booking appointment" });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching appointments" });
  }
};



/* ================================
   USER → VIEW OWN APPOINTMENTS
================================ */
export const getUserAppointments = async (req, res) => {
  try {
    const { email } = req.params;

    const appointments = await Appointment
      .find({ email })          // filter by logged-in user
      .sort({ createdAt: -1 }); // 🔥 newest first

    return res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Failed to fetch appointments"
    });
  }
};



/* ================================
   ADMIN → VIEW ALL APPOINTMENTS
================================ */
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Error fetching appointments"
    });
  }
};



/* ================================
   ADMIN → UPDATE STATUS
================================ */
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // accepted / rejected

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ msg: "Invalid status" });
    }

    const updated = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Appointment not found" });
    }

    res.status(200).json({
      msg: "Status updated successfully",
      appointment: updated
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to update status" });
  }
};


export const getMyAppointments = async (req, res) => {
  try {
    const { email } = req.params;

    // 🔥 FILTER BY EMAIL
    const appointments = await appointment.find({ email: email });

    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

