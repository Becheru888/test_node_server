const express = require("express");

const router = express.Router();

const DB = require("../db_config/db_helpers");

// Customer Endppoints

router.get("/", async (req, res) => {
  try {
    const cust = await DB.allCustomers();
    res.status(200).json(cust);
  } catch (err) {
    res.status(404).json("Something went wrong");
  }
});

router.post("/add", async (req, res) => {
  const { first_name, last_name, company_name, job_description } = req.body;
  try {
    await DB.addCustomer(first_name, last_name, company_name, job_description);
    const updatedList = await DB.allCustomers();
    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
