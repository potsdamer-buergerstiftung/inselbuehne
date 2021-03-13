import { sendOfficeMail } from "@integrations/office-mailer"
import previewEmail from "preview-email"

type ContactRequestMailer = {
  name: string
  email: string
  message: string
}

export function contactRequestMailer({ name, email, message }: ContactRequestMailer) {
  const msg = {
    from: "hallo@inselbuehne-potsdam.de",
    to: "noel@sigmunczyk.de",
    subject: "Kontaktanfrage Inselbühne",
    html: `
      <h1>Kontaktanfrage Inselbühne</h1>
      <h3>Name: ${name}</h3>
      <h3>E-Mail: ${email}</h3>
      <h3>Nachricht:</h3>
      ${message}
    `,
  }

  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        await sendOfficeMail(msg)
      } else {
        await previewEmail(msg)
      }
    },
  }
}
