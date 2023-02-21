import express from 'express'
const router = express.Router()

import {
  sendGreetingEmail,
  sendReminderEmail,
} from '../controllers/sendEmailControllers.js'

router.route('/').post(sendGreetingEmail)
router.route('/reminder').post(sendReminderEmail)

export default router
