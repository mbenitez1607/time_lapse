import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';

// Cron will just run as long as server is open
// const cron = require('./controllers/sendEmail')


import path from'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileRoutes from './routes/file-upload-routes.js';

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors());


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
});
