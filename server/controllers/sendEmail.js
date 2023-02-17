import * as dotenv from 'dotenv'
dotenv.config()
import cron from 'node-cron'
import nodemailer from 'nodemailer'
import User from '../models/User.js'

const sendEmail = async () => {
  // create the transport object
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
  })

  // retrieve email addresses from database
  const emails = await User.find({}, { email: true, _id: false })

  // loop through emails and send email to each recipient building options object
  for (const { email } of emails) {
    // create email message
    const options = {
      from: process.env.SENDER_ADDRESS, // sender address
      to: email, // list of receivers
      subject: 'Testing email', // subject line
      html: '<b>Hello world?</b>', // html body
    }

    // send email using Nodemailer
    const info = await transporter.sendMail(options)
    console.log(`Email sent to ${email}: ${info.messageId}`)
  }
}

// Can set up values based on user input. '*' is the default
// Look above for legend of values
const sec = '0' // at 0 seconds
const min = '1' // at exactly minute 1
const hour = '15' // sends at 3pm
const dayOfMonth = '*'
const month = '*'
const day = '*'

const cronString = `${sec} ${min} ${hour} ${dayOfMonth} ${month} ${day}`

cron.schedule(cronString, () => {
  sendEmail()
})

export default cron

// credentials of new email account that was set up
// put into an ENV file
// test_789564@outlook.com
// sXi59Vv72xQixqb
