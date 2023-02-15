require('dotenv').config()
const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

// Cron will just run as long as server is open
// const cron = require('./controllers/sendEmail')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
