/* eslint-disable camelcase */
const express = require('express')
const router = express.Router()

const DB = require('../db_config/db_helpers')

// get all logs which belongs to cust_id

router.get('/prospect/:id', async (req, res) => {
  const { id } = req.params
  try {
    const logs = await DB.getAllLogs(id)
    if (logs.length === 0) {
      res.status(200).json({ message: `Logs for id ${id} does not exist!` })
    } else {
      res.status(200).json(logs)
    }
  } catch (err) {
    res.status(404).json({ message: err })
  }
})

router.post('/user/:user_id/prospect/:pros_id', async (req, res) => {
  const { user_id, pros_id } = req.params
  const { content, user_initial } = req.body
  try {
    await DB.insertLog(pros_id, user_id, content, user_initial)
    const updatedLogs = await DB.getAllLogs(pros_id)
    res.status(201).json(updatedLogs)
  } catch (err) {
    res.status(404).json({ message: err })
  }
})

module.exports = router
