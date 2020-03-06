const express = require("express");

const router = express.Router();

const DB = require("../db_config/db_helpers");

router.get("/", async (req, res) => {
  try {
    const users = await DB.allUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

router.post("/add", async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await DB.addUser(username, password);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const users = await DB.deleteUser(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

module.exports = router;
