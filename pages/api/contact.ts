import nodemailer from "nodemailer";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const text = (data: ContactRequest) => `
  Name des Absenders: ${data.message}
  E-Mail-Adresse: ${data.email}
  
  ${data.message}
  `;

  const content = {
    from: `"Inselbühne Potsdam" <${process.env.SMTP_USER}>`,
    to: `${process.env.SMTP_USER}`,
    subject: "Website Inselbühne: Neue Nachricht",
    text: text(req.body),
  };

  try {
    const info = await transporter.sendMail(content);
    return res.status(200).json(info);
  } catch (error) {
    return res.status(422).json(error);
  }
};
