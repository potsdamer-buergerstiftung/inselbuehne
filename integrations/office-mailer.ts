import nodemailer, { SentMessageInfo } from "nodemailer"

const username = process.env.SMTP_USERNAME
const password = process.env.SMTP_PASSWORD

interface MailOptions {
  from: string
  to: string
  subject: string
  html: string
}

export async function sendOfficeMail(msg: MailOptions): Promise<SentMessageInfo> {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: username,
      pass: password,
    },
    tls: {
      ciphers: "SSLv3",
    },
  })

  return await transporter.sendMail(msg)
}
