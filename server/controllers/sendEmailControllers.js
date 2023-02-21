import { sendGreeting } from '../helpers/sendEmail.js'
import User from '../models/User.js'

import * as fs from 'fs'
const greetingHTML = fs.readFileSync('./emailTemplates/template.html', 'utf-8')
const reminderHTML = fs.readFileSync('./emailTemplates/reminder.html', 'utf-8')

export const sendGreetingEmail = async (req, res) => {
  try {
    const email = req.body.email
    sendGreeting(greetingHTML, 'Welcome Email', email)

    res.status(200).json({ msg: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const sendReminderEmail = async (req, res) => {
  try {
    // retrieve email addresses from database
    const emails = await User.find({}, { email: true, _id: false })

    // loop thru emails to create an array
    const arrayOfEmails = emails.map((email) => email.email)

    sendGreeting(reminderHTML, 'Ready to Create Timelapses?', arrayOfEmails)

    res.status(200).json(arrayOfEmails)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// credentials of new email account that was set up
// put into an ENV file
// test_789564@outlook.com
// sXi59Vv72xQixqb
