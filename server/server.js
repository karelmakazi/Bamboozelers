const path = require('path')
const express = require('express')
const name = require('./routes/name')

const server = express()
server.use(express.urlencoded({ extended: true }))


server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', name)

module.exports = server
