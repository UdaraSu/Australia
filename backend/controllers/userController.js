const bcrypt = require("bcryptjs");
const { User } = require("../models");

const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};

module.exports = { register };
