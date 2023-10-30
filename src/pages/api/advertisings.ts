import type { NextApiRequest, NextApiResponse } from "next";
import advertisings from "@/db/advertisings.json";
import { Section } from "@/types";
import { Advertising } from "@/types";

type Data = Array<Advertising>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(advertisings);
}
