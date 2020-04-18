require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const server = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const customersRoutes = require("./routes/customersRoutes");
const authRoutes = require("./routes/authRoutes");

const authorization = require("./jwt/check_JWT").authorization;

server.use(express.json());
server.use(cors());

server.use("/users", authorization, userRoutes);
server.use("/customers", authorization, customersRoutes);
server.use("/api", authRoutes);

server.use("/", (req, res) => {
  res.json("Welcome to the cms api!");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
