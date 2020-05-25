const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

module.exports = router

//POST /v1/name
router.post('/name', (req, res) => {
  db.addName(req.body.name)
  .then(() => {
    res.status(201).send()
    })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//GET PREVIOUS SCORE
router.get('/score/:category', (req, res) => {
  let categorySelected = req.params.category
  db.getScore(categorySelected)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})