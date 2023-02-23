import express from 'express'
import db from './config/connection.js'
import routes from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url'
import cron from 'node-cron'
import { remind } from './helpers/API.js'

// auth middleware to filter, and authorize or deny requests
//import authMiddleware from './auth-middleware'

import cors from 'cors'
import bodyParser from 'body-parser'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())

//app.use('/', authMiddleware)

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  //Added this to manage browser refresh on Heroku
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
}

// Basic reminder to be set at 3PM every day, once to all emails in DB
cron.schedule('0 0 15 * * *', () => {
  remind()
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
