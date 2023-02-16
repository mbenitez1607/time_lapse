require('dotenv').config()
const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

// auth middleware to filter, and authorize or deny requests
const authMiddleware = require('./auth-middleware')

// Cron will just run as long as server is open
// const cron = require('./controllers/sendEmail')

const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileRoutes = require('./routes/file-upload-routes')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())

app.use('/', authMiddleware)

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/api', routes)
app.use('/api', fileRoutes.routes)

// file paths
app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
