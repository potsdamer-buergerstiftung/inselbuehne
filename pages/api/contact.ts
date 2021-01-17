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
  `

  const info = await transporter.sendMail({
    from: '"Inselbühne Potsdam" <hallo@inselbuehne-potsdam.de>',
    to: "hallo@inselbuehne-potsdam.de",
    subject: "Website Inselbühne: Neue Nachricht",
    text: text(req.body),
  });

  console.log(info)

  res.statusCode = 200;
  res.json(req.body);
};
