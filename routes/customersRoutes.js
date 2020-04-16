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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await DB.getCustomerById(id);
    if (customer.length <= 0) {
      res
        .status(404)
        .json({ message: `Customer with id of ${id} does not exist!` });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

router.post("/add", async (req, res) => {
  const {
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description
  } = req.body;
  try {
    await DB.addCustomer(
      first_name,
      last_name,
      company_name,
      email,
      tel_no,
      job_description
    );
    const updatedList = await DB.allCustomers();
    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description
  } = req.body;
  try {
    const customer = await DB.getCustomerById(id);
    if (customer.length <= 0) {
      res.status(404).json({
        message: `Customer with the id of ${id} does not exist in the database!`
      });
    } else {
      await DB.updatedCustomer(
        first_name,
        last_name,
        company_name,
        email,
        tel_no,
        job_description
      );
      res.status(200).json({
        message: `Customer with the id ${id} was updated successfully!`
      });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await DB.getCustomerById(id);
    if (customer.length <= 0) {
      res
        .status(500)
        .json({ message: `Customer with id of ${id} does not exist!` });
    } else {
      await DB.deleteCustomer(id);
      res
        .status(200)
        .json({ message: `The customer with the id ${id} was deleted!` });
    }
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
