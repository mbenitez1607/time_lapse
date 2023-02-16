// NOTE 🌟 should probably be called from the front end

/* 

 # ┌────────────── seconds (optional) | 0-59
 # │ ┌──────────── minute | 0-59
 # │ │ ┌────────── hour | 0-23
 # │ │ │ ┌──────── day of month | 1-31
 # │ │ │ │ ┌────── month | 1-12 (or names)
 # │ │ │ │ │ ┌──── day of week | 0-7 (or names, 0 or 7 are sunday)
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

*/
import * as dotenv from 'dotenv';
dotenv.config()
import cron from 'node-cron';
import nodemailer from 'nodemailer'

const sendEmail = async () => {
  // create the transport object
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
  })

  // set up options
  const options = {
    from: process.env.SENDER_ADDRESS, // sender address
    to: 'example@example.com', // list of receivers
    subject: 'Testing email', // subject line
    html: '<b>Hello world?</b>', // html body
  }

  // send mail with defined transport object and options
  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error)
    console.log('Sent ' + info.response)
  })
}

// Can set up values based on user input. '*' is the default
// Look above for legend of values
const sec = '*/10' // every 10 sec
const min = '*'
const hour = '*'
const dayOfMonth = '*'
const month = '*' // can use shorter names like Feb, Mar...
const day = '*' // Can use shorter names like Mon, Fri, Sat...

const cronString = `${sec} ${min} ${hour} ${dayOfMonth} ${month} ${day}`

cron.schedule(cronString, () => {
  sendEmail()
})

module.exports = cron

// credentials of new email account that was set up
// put into an ENV file
// test_789564@outlook.com
// sXi59Vv72xQixqb
