const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };
  const secret = "purcelgrasan";
  const options = {
    expiresIn: "8h",
  };
  return jwt.sign(payload, secret, options);
};
