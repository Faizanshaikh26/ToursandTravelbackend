const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const data = { user: { id: user._id } };
    const token = jwt.sign(data, process.env.JWT_SECRET || "Secret-Key", {
      expiresIn: "1h",
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.signup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "Existing user found with same email address",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();

    const data = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(data, process.env.JWT_SECRET || "Secret-Key", {
      expiresIn: "1h",
    });
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
