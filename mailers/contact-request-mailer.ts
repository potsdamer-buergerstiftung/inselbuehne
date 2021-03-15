import { sendOfficeMail } from "@integrations/office-mailer";
import previewEmail from "preview-email";

type ContactRequestMailer = {
  name: string;
  email: string;
  message: string;
};

export function contactRequestMailer({
  name,
  email,
  message,
}: ContactRequestMailer) {
  const msg = {
    from: "hallo@inselbuehne-potsdam.de",
    to: "hallo@inselbuehne-potsdam.de",
    subject: "Kontaktanfrage Inselbühne",
    html: `
      <h1>Kontaktanfrage Inselbühne</h1>
      <p>Bitte nicht direkt auf diese Nachricht antworten, sondern neue E-Mail an Kontaktperson verfassen.</p>
      <h3>Name: ${name}</h3>
      <h3>E-Mail: <a href="mailto:${email}">${email}</a></h3>
      <h3>Nachricht:</h3>
      ${message}
    `,
  };

  return {
    async send() {
      if (process.env.NODE_ENV === "production") {
        await sendOfficeMail(msg);
      } else {
        await previewEmail(msg);
      }
    },
  };
}
