const express = require("express");
const router = express.Router();

const DB = require("../db_config/db_helpers");

// get all logs which belongs to cust_id

router.get("/:cust_id", async (req, res) => {
  const { cust_id } = req.params;
  try {
    const logs = await DB.getAllLogs(cust_id);
    if (logs.length <= 0) {
      res
        .status(404)
        .json({ message: `Logs for id ${cust_id} does not exist!` });
    }
    res.status(200).json(logs);
  } catch (err) {
    res.status(404).json("something went wrong");
  }
});

router.post("/user/:user_id/customer/:cust_id", async (req, res) => {
  const { user_id, cust_id } = req.params;
  const { content } = req.body;
  try {
    await DB.insertLog(cust_id, user_id, content);
    const updatedLogs = await DB.getAllLogs(user_id);
    res.status(201).json(updatedLogs);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
