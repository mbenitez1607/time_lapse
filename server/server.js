import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import db from './config/connection.js'
import routes from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url'

// auth middleware to filter, and authorize or deny requests
//import authMiddleware from './auth-middleware'

// 🌟 Cron will send out emails as long as server is open 🌟
// import cron from './controllers/sendEmail.js'

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
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
