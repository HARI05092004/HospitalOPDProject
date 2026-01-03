import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  problem: String,
  status: {
  type: String,
  enum: ["pending", "accepted", "rejected"],
  default: "pending"
}

}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);
