import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// SIGNUP route
router.post("/signup", signup);

// LOGIN route
router.post("/login", login);

export default router;
