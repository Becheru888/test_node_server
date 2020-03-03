require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json("Seccess!");
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
