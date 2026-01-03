import Admin from "../models/Admin.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ msg: "Admin not found" });
    }

    if (admin.password !== password) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    res.status(200).json({ msg: "Admin login success" });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
