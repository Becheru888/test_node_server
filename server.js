require("dotenv").config();

const express = require("express");
const server = express();

const userRoutes = require("./routes/userRoutes");
const customersRoutes = require("./routes/customersRoutes");
const authRoutes = require("./routes/authRoutes");

const authorization = require("./jwt/check_JWT");

server.use(express.json());

server.use("/users", authorization, userRoutes);
server.use("/customers", authorization, customersRoutes);
server.use("/api", authRoutes);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
