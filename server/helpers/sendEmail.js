import * as dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

export const sendGreeting = async (html, subject, to) => {
  // create the transport object
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    // port: 587,
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
  })

  // create email message
  const options = {
    from: `"The Timelapse Team" <${process.env.SENDER_ADDRESS}>`, // sender address
    to, // list of receivers 🌟
    subject, // subject line
    html, // html body
    attachments: [
      {
        filename: 'logo1.png',
        path: './img/mainImg/logo1.png',
        cid: 'logo',
      },
    ],
  }

  // send email using Nodemailer
  const info = await transporter.sendMail(options, (error, info) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`Email sent to user: ${info.messageId}`)
    }
  })
}
