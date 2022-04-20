const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const message = require("../utility/status");

router.get("/", (req, res) => {
  res.render("signup", {
    title: "Sign Up",
    message: "Enter details below to sign up",
  });
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailExist = await User.findOne({ email });

    if (!email || typeof email !== "string") {
      return res.json({ status: "error", error: "Invalid Email" });
    }
    if (!password || typeof password !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (isEmailExist) {
      return res.status(message.BAD_REQUEST).send("Email already exists");
      // res.send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    user.save();
    res.send("You've been successfully signed up");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = router;
