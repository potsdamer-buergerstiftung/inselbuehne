import type { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  const id = process.env.PAYPAL_CLIENT_ID;
  if (!id) {
    res.status(500).json({ error: "Paypal Client Id not set" });
  } else {
    res.status(200).send(id);
  }
};
