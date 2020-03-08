const express = require("express");
const bcrypt = require("bcryptjs");
const generateJwt = require("../jwt/generate_JWT");
const DB = require("../db_config/db_helpers");

const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  password = hash;
  try {
    const users = await DB.addUser(username, password);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await DB.getUserByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateJwt(user);
      res.status(200).json({ message: `Welcome ${user.username}`, token });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch (err) {
    res.status(401).json({ message: "Unauthorised user" });
  }
});

module.exports = router;
