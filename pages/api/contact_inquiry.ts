import type { NextApiRequest, NextApiResponse } from "next";
import { contactRequestMailer } from "@mailers/contact-request-mailer"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await contactRequestMailer(req.body).send()
  res.status(200).json({ name: "John Doe" });
};
