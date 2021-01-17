import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import * as fs from "fs";
import { dirname, join } from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

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

  const data = fs.readFileSync(
    join(serverRuntimeConfig.PROJECT_ROOT, "templates", "contact.html"),
    "utf-8"
  );
  const template = Handlebars.compile(data);

  const formContent: ContactRequest = req.body;

  const content = {
    from: `"Inselbühne Potsdam" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: "Website Inselbühne: Neue Nachricht",
    html: template(formContent),
  };

  try {
    const info = await transporter.sendMail(content);
    return res.status(200).json(info);
  } catch (error) {
    return res.status(422).json(error);
  }
};
