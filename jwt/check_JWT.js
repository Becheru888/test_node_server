const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET || "purcelgrasan";
  if (authorization) {
    jwt.verify(authorization, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credential provided" });
  }
};

module.exports = { authorization };
