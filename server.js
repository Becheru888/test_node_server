require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());

const DB = require("./db_config/db_helpers");

// USERS END-POINTS

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

server.delete("/delete/:id", async (req, res) => {
  try {
    const users = await DB.deleteUser(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

// Customers Endpoints

server.get("/customers", async (req, res) => {
  try {
    const cust = await DB.allCustomers();
    res.status(200).json(cust);
  } catch (err) {
    res.status(404).json("Something went wrong");
  }
});

server.post("/customers/add", async (req, res) => {
  const { first_name, last_name, company_name, job_description } = req.body;
  try {
    await DB.addCustomer(first_name, last_name, company_name, job_description);
    const updatedList = await DB.allCustomers();
    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
