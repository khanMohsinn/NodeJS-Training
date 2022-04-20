const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/user");
const message = require("../utility/status");
const { signjwt } = require("../utility/jwt");
import("dotenv/config");

router.get("/", (req, res) => {
  res.render("signin", {
    title: "Sign In",
    message: "Enter details below to sign in",
  });
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(message.BAD_REQUEST).send("-Email or password invalid");
    }
    const validPass = bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(message.BAD_REQUEST).send("Email or -password invalid");
    }
    const token = signjwt(user);

    res.header("Authorization", token).send(token);
  } catch (error) {
    res.json({ status: "error", error: "Login unsuccessful" });
  }
});

module.exports = router;
