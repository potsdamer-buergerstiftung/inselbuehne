import type { NextApiRequest, NextApiResponse } from "next";
import { getEvents } from "@lib/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const events = await getEvents()
  console.log(events)
  res.status(200).json(events);
};
