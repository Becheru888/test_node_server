require("dotenv").config();

const express = require("express");
const server = express();

const userRoutes = require("./routes/userRoutes");
const customersRoutes = require("./routes/customersRoutes");

server.use(express.json());

server.use("/users", userRoutes);
server.use("/customers", customersRoutes);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
