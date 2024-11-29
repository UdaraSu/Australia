const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

  
    const token = jwt.sign(
      { id: user.id, role: user.role }, 
      { expiresIn: "1h" }              
    );

    // Send token and role back to the client
    res.json({ token, role: user.role });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { login };
