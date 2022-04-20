const jwt = require("jsonwebtoken");
import("dotenv/config");

const signjwt = (user) => {
  return jwt.sign(
    { id: user._id, username: user.email },
    process.env.JWT_SECRET
  );
};

const verifyjwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { signjwt, verifyjwt };
