require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());

const DB = require("./db_config/db_helpers");

server.get("/", async (req, res) => {
  try {
    const users = await DB.allUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

server.post("/post", async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await DB.addUser(username, password);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
