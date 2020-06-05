const express = require("express");
const router = express.Router();

const DB = require("../db_config/db_helpers");

// Customer Endppoints

router.get("/", async (req, res) => {
  try {
    const prospects = await DB.allProspects();
    res.status(200).json(prospects);
  } catch (err) {
    res.status(404).json("Something went wrong");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prospect = await DB.getProspectById(id);
    if (prospect.length <= 0) {
      res
        .status(404)
        .json({ message: `Prospect with id of ${id} does not exist!` });
    }
    res.status(200).json(prospect);
  } catch (err) {
    res.status(404).json({ err }, "something went wrong");
  }
});

router.post("/add", async (req, res) => {
  const {
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  } = req.body;
  try {
    await DB.addProspect(
      first_name,
      last_name,
      company_name,
      email,
      tel_no,
      job_description
    );
    const updatedList = await DB.allProspects();
    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    company_name,
    email,
    tel_no,
    job_description,
  } = req.body;
  try {
    const prospect = await DB.getProspectById(id);
    if (prospect.length <= 0) {
      res.status(404).json({
        message: `Prospect with the id of ${id} does not exist in the database!`,
      });
    } else {
      await DB.updateProspect(
        first_name,
        last_name,
        company_name,
        email,
        tel_no,
        job_description
      );
      res.status(200).json({
        message: `Prospect with the id ${id} was updated successfully!`,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const propsect = await DB.getProspectById(id);
    if (propsect.length <= 0) {
      res
        .status(500)
        .json({ message: `Prospect with id of ${id} does not exist!` });
    } else {
      DB.deleteProspect(id);
      res
        .status(200)
        .json({ message: `The prospect with the id ${id} was deleted!` });
    }
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
