const express = require('express')
const router = express.Router()

const DB = require('../db_config/db_helpers')

router.get('/', async (req, res) => {
  try {
    const users = await DB.allUsers()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json('something went wrong')
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await DB.getUserById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json('something went wrong')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const users = await DB.deleteUser(req.params.id)
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json('something went wrong')
  }
})

module.exports = router
