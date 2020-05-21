require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const prospectRoutes = require("./routes/prospectsRoutes");
const authRoutes = require("./routes/authRoutes");
const logsRoutes = require("./routes/prospectsLogs");

const authorization = require("./jwt/check_JWT").authorization;

server.use(express.json());
server.use(cors());

server.use("/users", authorization, userRoutes);
server.use("/prospects", authorization, prospectRoutes);
server.use("/auth", authRoutes);
server.use("/logs", logsRoutes);

server.get("/", (req, res) => {
  res.json("Welcome to the cms api!");
});

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
