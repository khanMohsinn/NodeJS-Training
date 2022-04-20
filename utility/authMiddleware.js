const jwt = require("jsonwebtoken");
const message = require("../utility/status");
import("dotenv/config");
const { verifyjwt } = require("../utility/jwt");

const authMiddleware = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    let authParts = req.headers.authorization.split(" ");
    if (authParts.length === 2) {
      if (/^Bearer$/i.test(authParts[0])) {
        token = authParts[1];
        try {
          var decoded = verifyjwt(token);
          req.user = decoded;
          next();
        } catch (err) {
          return res
            .status(message.UNAUTHORIZED)
            .send({ message: "invalid token" });
        }
      }
    }
  } else {
    return res
      .status(message.UNAUTHORIZED)
      .send("You cannot access this link without being signed in");
  }
};

module.exports = authMiddleware;
