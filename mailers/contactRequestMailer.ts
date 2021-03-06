/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */
import previewEmail from "preview-email"

type ContactRequestMailer = {
  name: string
  email: string
  message: string
}

export function contactRequestMailer({ name, email, message }: ContactRequestMailer) {
  const msg = {
    from: "hello@inselbuhne-potsdam.de",
    to: "hello@inselbuehne-potsdam.de",
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
        // TODO - send the production email, like this:
        // await postmark.sendEmail(msg)
        throw new Error("No production email implementation in mailers/forgotPasswordMailer")
      } else {
        console.log(msg)
        await previewEmail(msg)
      }
    },
  }
}
