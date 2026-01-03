import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./controllers/config/db.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);//these is the login 

// Port from .env
const PORT = process.env.PORT ;
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);

// Serve static frontend files
app.use(express.static("frontend"));

// Fallback for SPA (optional but recommended for HTML5 routing)
// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root: "frontend" });
// });

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
